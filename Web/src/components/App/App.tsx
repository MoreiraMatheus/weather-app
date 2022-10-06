import GlobalStyle from "../../GlobalStyle";
import SearchBar from "../SearchBar/styles";
import DailyForecastCard from "../DailyForecastCard/styles";
import CardWithKeyInformations from "../CardWithKeyInformations";

function App() {
  return (
    <>
      <main>
        <GlobalStyle/>
        <SearchBar placeholder="Pesquisar"/>

        <CardWithKeyInformations/>

        <footer>
          <div>
            <DailyForecastCard>HJ</DailyForecastCard>
            <DailyForecastCard>AM</DailyForecastCard>
            <DailyForecastCard>DPS</DailyForecastCard>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
