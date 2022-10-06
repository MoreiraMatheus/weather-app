import { createContext, useState, useEffect } from "react";

import GlobalStyle from "../GlobalStyle/GlobalStyle";
import SearchBar from "../SearchBar/styles";
import DailyForecastCard from "../DailyForecastCard/styles";
import CardWithKeyInformations from "../CardWithKeyInformations";

import { FindCurrentLocation, coordinates } from "../../functions/FindCurrentLocation";
import { QueryWeatherApiByCoords } from "../../functions/QueryWeatherApiByCoords";

const test = 'testando'

export const WeatherContext = createContext(test)

const cords:coordinates = FindCurrentLocation()

export interface IKeyInformations{
  temp?: number;
  cityName?: string;
  country?: string;
}

function App() {
  const [keyInformations, setKeyInformations] = useState<IKeyInformations>()
  
  useEffect(()=>{
    QueryWeatherApiByCoords(cords.latitude, cords.longitude).then(
      response => {
        setKeyInformations({
          temp: response.main.temp,
          cityName: response.name,
          country: response.sys.country
        })
      }
    )
  }, [])


  return (
    <>
      <GlobalStyle/>
      <WeatherContext.Provider value={test}>
      <main>
        <SearchBar placeholder="Pesquisar"/>

        <CardWithKeyInformations 
          temp={keyInformations?.temp}
          cityName={keyInformations?.cityName}
          country={keyInformations?.country}
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
