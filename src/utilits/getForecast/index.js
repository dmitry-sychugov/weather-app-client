
export const getForecast = (forecastData) => {
    function getDayWeather(day) {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const dayOfWeek = new Date(day.dt_txt).getDay();

        const weather = {};
        const KELVIN = -273.15;

        day.weather.map((el) => {
            weather.weatherType = el.main;
            weather.icon = el.icon;
        });

        return {
            dayOfWeek: days[dayOfWeek],
            weather: weather,
            temp: Math.round(day.main.temp + KELVIN),
        };
    }

    const days = forecastData.reduce(((acc, list) => {
        const currentDate = new Date(list.dt_txt).getDate();
        const hour = new Date(list.dt_txt).getHours();
        console.log(acc.date);
        if (currentDate > acc.date && hour === 9) {
            acc.date = currentDate;
            acc.forecast.push(getDayWeather(list));
        }
        return acc;
    }), { date: new Date().getDate(), forecast: [] });

    return days.forecast.map(day => day);

}