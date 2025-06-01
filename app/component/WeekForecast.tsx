import { WeatherData } from "../types/weather"


interface WeekForecastProps {
    data: WeatherData
}

const WeekForecast = ({ data }: WeekForecastProps) => {
  return <div className="grid grid-cols-2 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full">
    {data.forecast.forecastday.map((day, index) => (
        <div key={index} className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center">
            <p className=''>{new Date(day.date).toLocaleString("en-US", {weekday: "short"})}</p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <p>H {day.day.maxtemp_f.toLocaleString()}°</p>
            <p>L {day.day.mintemp_f.toLocaleString()}°</p>
        </div>
    ))}
  </div>
}

export default WeekForecast