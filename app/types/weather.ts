export interface WeatherData {
  location: {
    name: string;
    region: string;
  };
  current: {
    temp_f: number;
    condition: {
      icon: string;
      text: string;
    };
    wind_mph: number;
    wind_dir: string;
    pressure_mb: number;
    feelslike_f: number;
    humidity: number;
    vis_km: number;
  };
  forecast: {
    forecastday: {
      date: string;
      astro: {
        sunrise: string;
        sunset: string;
      };
      day: {
        condition: {
          icon: string;
          text: string;
        };
        maxtemp_f: number;
        mintemp_f: number;
      };
    }[];
  };

}