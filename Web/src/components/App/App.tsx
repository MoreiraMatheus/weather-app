import { useState, useEffect } from "react";

import GlobalStyle from "../GlobalStyle/GlobalStyle";
import SearchBar from "../SearchBar/index";
import CardWithKeyInformations from "../CardWithKeyInformations";

import { FindCurrentLocation, coordinates } from "../../functions/FindCurrentLocation";

let cords:coordinates = FindCurrentLocation();

export interface IKeyInformations{
  temp?: number;
  cityName?: string;
  country?: string;
  feelsLike?: number;
  situation?: string;
  situationIcon?: string;
  max?: number;
  min?: number;
  wind?: number;
  humidity?: number;
}

function App() {
  const [keyInformations, setKeyInformations] = useState<IKeyInformations | null>(null)

  //Remember to enter your API key in the file ".env"
  const apiKey = process.env.REACT_APP_API_KEY

  async function QueryWeatherApi(
    cityName?:string, 
    lat:number = cords.latitude, 
    lon:number = cords.longitude){

    const require = await fetch(
      cityName !== undefined?
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=pt_br`:
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
    )

    const data = await require.json()
    console.log(data)

    setKeyInformations({
      temp: data.main.temp,
      cityName: data.name,
      country: data.sys.country,
      feelsLike: data.main.feels_like,
      situation: data.weather[0].description,
      situationIcon: data.weather[0].icon,
      max: data.main.temp_max,
      min: data.main.temp_min,
      wind: data.wind.speed,
      humidity: data.main.humidity,
    })
  }

  useEffect(()=>{
    QueryWeatherApi()
  }, [])

  return (
    <>
      <GlobalStyle/>
      <main>
        <SearchBar updateInformations={QueryWeatherApi}/>

        <CardWithKeyInformations
          //descobrir por que aqui dá erro quando removo o nullish coalescing operator
          informations={keyInformations ?? {}}
        />

        <footer>Desenvolvido por Matheus Moreira</footer>
      </main>
    </>
  );
}

export default App;