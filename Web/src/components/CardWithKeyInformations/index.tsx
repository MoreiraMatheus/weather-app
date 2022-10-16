import { Wrapper, KeyInformations } from './styles'

import { IKeyInformations } from '../App/App'

import { Wind, ArrowUp, ArrowDown, Drop } from 'phosphor-react'

interface CardWithkeyInformationsProps{
  informations: IKeyInformations;
}


function CardWithkeyInformations({informations}:CardWithkeyInformationsProps){

  console.log(informations)

  const validInformations = informations.cityName !== null?
  // fragmentar o wrapper em um novo elemento
    <Wrapper>
      <h1>{informations.cityName} - <img src={`https://countryflagsapi.com/svg/${informations.country}`} alt='bandeira'/></h1>
      <div>
        <KeyInformations>
          <h1>{informations.temp}º</h1>
          <h2>
            Sensação térmica: {informations.feelsLike}º
          </h2>
          <p>
            {informations.situation}
            <img 
            src={`http://openweathermap.org/img/wn/${informations.situationIcon}.png`}
            alt='imagem do clima'
          />
          </p>
          <p>
            <ArrowUp weight='bold' size={20}/>
            {informations.max}º
          </p>
          <p>
            <ArrowDown weight='bold' size={20}/>
            {informations.min}º
          </p>
          <p>
            <Drop weight='bold' size={20}/>
            {informations.humidity}%
          </p>
          <p>
            <Wind weight='bold' size={20}/>
            {informations.wind}m/s 
          </p>
        </KeyInformations>
      </div>
    </Wrapper>:
  // criar um elemento para essa mensagem
    <h1>Cidade não encontrada</h1>

  return(
    validInformations
  )
}

export default CardWithkeyInformations