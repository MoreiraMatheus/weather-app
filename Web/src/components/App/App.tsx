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
          <DailyForecastCard>a</DailyForecastCard>
          <DailyForecastCard>a</DailyForecastCard>
          <DailyForecastCard>a</DailyForecastCard>
        </footer>
      </main>
    </>
  );
}

export default App;
