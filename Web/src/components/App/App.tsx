import { createContext, useState, useEffect } from "react";

import GlobalStyle from "../GlobalStyle/GlobalStyle";
import SearchBar from "../SearchBar/styles";
import DailyForecastCard from "../DailyForecastCard/styles";
import CardWithKeyInformations from "../CardWithKeyInformations";

import { FindCurrentLocation, coordinates } from "../../functions/FindCurrentLocation";

export const WeatherContext = createContext({})

let cords:coordinates = FindCurrentLocation();

export interface IKeyInformations{
  temp?: number;
  cityName?: string;
  country?: string;
  feelsLike?: number;
  situation?: string;
  max?: number;
  min?: number;
  wind?: number;
  humidity?: number;
}

function App() {
  const [keyInformations, setKeyInformations] = useState<IKeyInformations>()

  //Lembre-se de inserir sua chave de API no arquivo .env (traduzir)
  const apiKey = process.env.REACT_APP_API_KEY

  async function QueryWeatherApiByCoords(lat:number, lon:number){
    const require = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`)

    const data = await require.json()

    console.log(data)
    setKeyInformations({
      temp: data.main.temp,
      cityName: data.name,
      country: data.sys.country,
      feelsLike: data.main.feels_like,
      situation: data.weather[0].description,
      max: data.main.temp_max,
      min: data.main.temp_min,
      wind: data.wind.speed,
      humidity: data.main.humidity,
    })
  }

  async function QueryCountryFlag(country:string){
    const baseUrl = 'https://countryflagsapi.com/svg/'

    const require = await fetch(baseUrl + country)
    const data = await require.json()
    
    return data
  }
  
  useEffect(()=>{
    QueryWeatherApiByCoords(cords.latitude, cords.longitude)
  }, [])


  return (
    <>
      <GlobalStyle/>
      <WeatherContext.Provider value={'a'}>
      <main>
        <SearchBar placeholder="Pesquisar"/>

        <CardWithKeyInformations
          //descobrir por que aqui dá erro quando removo o nullish coalescing operator
          informations={keyInformations ?? {}}
        />

        <footer>
          <div>
            <DailyForecastCard>HJ</DailyForecastCard>
            <DailyForecastCard>AM</DailyForecastCard>
            <DailyForecastCard>DPS</DailyForecastCard>
          </div>
        </footer>
      </main>
      </WeatherContext.Provider>
    </>
  );
}

export default App;
