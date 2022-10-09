import { Wrapper, KeyInformations, ImageWrapper } from './styles'

import { IKeyInformations } from '../App/App'

import { Wind, ArrowUp, ArrowDown, Drop } from 'phosphor-react'

interface CardWithkeyInformationsProps{
  informations: IKeyInformations;
}


function CardWithkeyInformations({informations}:CardWithkeyInformationsProps){
  return(
    <Wrapper>
      <h1>{informations.cityName} - {informations.country}</h1>
      <div>
        <KeyInformations>
          <h1>{informations.temp}º</h1>
          <h2>
            Sensação térmica: {informations.feelsLike}º
          </h2>
          <p>
            {informations.situation}
          </p>
          <p>
            <ArrowUp
              weight='bold'
              size={20}
            />
            {informations.max}º
          </p>
          <p>
            <ArrowDown
              weight='bold'
              size={20}
            />
            {informations.min}º
          </p>
          <p>
            <Drop
              weight='bold'
              size={20}
            />
            {informations.humidity}%
          </p>
          <p>
            <Wind
              weight='bold'
              size={20}
            />
            {informations.wind}m/s 
          </p>
        </KeyInformations>
        <ImageWrapper>
          <img src="https://www.shareicon.net/data/2016/06/27/787432_cloud_512x512.png" />
        </ImageWrapper>
      </div>
    </Wrapper>
  )
}

export default CardWithkeyInformations