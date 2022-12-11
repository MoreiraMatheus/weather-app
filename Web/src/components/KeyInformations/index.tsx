import { Wrapper, Data, Information } from "./styles";

import { Wind, ArrowUp, ArrowDown, Drop, Info } from "phosphor-react";

import { IKeyInformations } from "../App/App";

interface keyInformationsProps {
  informations: IKeyInformations;
}

function KeyInformations({ informations }: keyInformationsProps) {
  return (
    <Wrapper>
      <h1>
        {`${informations.cityName} - `}
        <img
          src={`https://countryflagsapi.com/svg/${informations.country}`}
          alt="bandeira"
        />
      </h1>
      <div>
        <Data>
          <h1>{informations.temp}º</h1>
          <h2>Sensação térmica: {informations.feelsLike}º</h2>
          <p>
            {informations.situation}
            <img
              src={`http://openweathermap.org/img/wn/${informations.situationIcon}.png`}
              alt="imagem do clima"
            />
          </p>
          <p>
            <ArrowUp weight="bold" size={20} />
            {informations.max}º
          </p>
          <p>
            <ArrowDown weight="bold" size={20} />
            {informations.min}º
          </p>
          <p>
            <Drop weight="bold" size={20} />
            {informations.humidity}%
          </p>
          <p>
            <Wind weight="bold" size={20} />
            {informations.wind}m/s
          </p>
        </Data>
      </div>
      <Information title="A localização pode não ser precisa">
        <Info width={'100%'} height={'100%'} weight='bold'/>
      </Information>
    </Wrapper>
  );
}

export default KeyInformations;
