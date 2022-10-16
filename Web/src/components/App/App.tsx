import { useState, useEffect } from "react";

import GlobalStyle from "../GlobalStyle/GlobalStyle";
import SearchBar from "../SearchBar/index";
import CardWithKeyInformations from "../CardWithKeyInformations";
import { Loading } from "../Loading/Loading";

import { FindCurrentLocation, coordinates } from "../../functions/FindCurrentLocation";

let cords:coordinates = FindCurrentLocation();

export interface IKeyInformations{
  temp?: number | null;
  cityName?: string | null;
  country?: string | null;
  feelsLike?: number | null;
  situation?: string | null;
  situationIcon?: string | null;
  max?: number | null;
  min?: number | null;
  wind?: number | null;
  humidity?: number | null;
}

function App() {
  const [keyInformations, setKeyInformations] = useState<IKeyInformations | null>(null)

  //Remember to enter your API key in the file ".env"
  const apiKey = process.env.REACT_APP_API_KEY

  async function QueryWeatherApi(
    cityName?:string, 
    lat:number = cords.latitude, 
    lon:number = cords.longitude){
    setKeyInformations(null)
    try {
      const require = await fetch(
        cityName !== undefined?
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=pt_br`:
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
      )
      console.log(require.status)
      const data = await require.json()
  
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
    } catch (error) {
      // console.log(error)
      setKeyInformations({
        temp: null,
        cityName: null,
        country: null,
        feelsLike: null,
        situation: null,
        situationIcon: null,
        max: null,
        min: null,
        wind: null,
        humidity: null,
      })
    }
  }

  useEffect(()=>{
    QueryWeatherApi()
  }, [])

  return (
    <>
      <GlobalStyle/>
      <main>
        <div>
          <SearchBar updateInformations={QueryWeatherApi}/>
          {keyInformations === null ?
            <Loading>carregando...</Loading>:
            <CardWithKeyInformations
            //descobrir por que aqui dá erro quando removo o nullish coalescing operator
            informations={keyInformations ?? {}}
          />}
        </div>

        <footer>
          Desenvolvido por <a href="https://github.com/MoreiraMatheus" target='_blank'>Matheus Moreira</a>
        </footer>
      </main>
    </>
  );
}

export default App;