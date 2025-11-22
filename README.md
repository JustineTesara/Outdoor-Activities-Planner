# Outdoor Activity Planner

A web application that helps users plan their outdoor activities by providing accurate weather predictions and forecasts.

## Overview

Outdoor Activity Planner is a weather-based planning tool that enables users to make informed decisions about their outdoor activities. By leveraging real-time weather data and forecasts, the system helps users choose the best days for hiking, camping, sports, and other outdoor adventures.

## Features

- **Weather Forecasting** - Get detailed weather predictions for planning future activities
- **Activity Planning** - Schedule outdoor activities based on weather conditions
- **User-Friendly Interface** - Clean and intuitive design for easy navigation
- **Real-Time Data** - Access to current and forecasted weather information via REST API

## Technologies Used

- **Backend**: Node.js with Express.js framework
- **Frontend**: EJS (Embedded JavaScript templating)
- **Styling**: CSS
- **API**: RESTful API architecture for weather data integration

## Installation

1. Clone the repository
```bash
git clone https://github.com/JustineTesara/Outdoor-Activities-Planner.git
cd Outdoor-Activities-Planner
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory and add:
```
PORT=3000
WEATHER_API_KEY=your_api_key_here
```

4. Start the application
```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Enter your location to get weather predictions
2. View the weather forecast for upcoming days
3. Plan your outdoor activities based on the predicted conditions
4. Check back regularly for updated forecasts

## Project Structure

```
├── node_modules/        # Project dependencies
├── public/              # Static assets
│   ├── images/          # Image files
│   ├── scripts/         # Client-side JavaScript
│   └── styles/          # CSS stylesheets
│       └── style.css    # Main stylesheet
├── views/               # EJS templates
│   └── index.ejs        # Main page template
├── .gitignore          # Git ignore rules
├── index.js            # Main application entry point
├── package.json        # Project metadata and dependencies
└── package-lock.json   # Locked dependency versions
```


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Justine Tesara - justine.tesara0907@gmail.com

Project Link: [https://github.com/JustineTesara/Outdoor-Activity-Planner](https://github.com/JustineTesara/Outdoor-Activity-Planner)

## Acknowledgments

- Weather data provided by https://openweathermap.org/api
- Inspiration from outdoor enthusiasts worldwide
