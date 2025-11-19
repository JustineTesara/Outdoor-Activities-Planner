import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const PORT = 3000;
const API_KEY = "cce83ada19e1bd482a8caa610849afd9";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { result: null });
});

app.post("/plan", async (req, res) => {
  const { activity, place, date, time } = req.body;

  try {
    // STEP 1 — Convert place → lat/lon
    const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=1&appid=${API_KEY}`;
    const geoRes = await axios.get(geoURL);

    if (geoRes.data.length === 0) {
      return res.render("index", {
        result: { error: "Place not found. Try another location." },
      });
    }

    const lat = geoRes.data[0].lat;
    const lon = geoRes.data[0].lon;

    // STEP 2 — Get weather forecast
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    const weatherRes = await axios.get(weatherURL);

    // Convert user date into timestamp
    const userTimestamp = new Date(date).getTime() / 1000;

    // Find closest daily forecast
    let bestMatch = weatherRes.data.list[0];
    let smallestDiff = Math.abs(bestMatch.dt - userTimestamp);

    for (let day of weatherRes.data.list) {
      const diff = Math.abs(day.dt - userTimestamp);
      if (diff < smallestDiff) {
        smallestDiff = diff;
        bestMatch = day;
      }
    }

    const temp = bestMatch.main.temp;
    const weather = bestMatch.weather[0].description;

    // Suggestion logic
    let suggestion = "";

    if (weather.includes("rain")) {
      suggestion = "It might rain. Bring a jacket or consider rescheduling.";
    } else if (temp > 32) {
      suggestion = "It will be hot. Bring water and avoid long exposure.";
    } else if (temp < 20) {
      suggestion = "It will be cold. Wear warm clothes.";
    } else {
      suggestion = "Weather looks perfect for your activity!";
    }

    res.render("index", {
      result: {
        activity,
        place,
        date,
        time,
        temp,
        weather,
        suggestion,
      },
    });
  } catch (err) {
    console.log(err);
    res.render("index", {
      result: { error: "Error retrieving weather data." },
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
