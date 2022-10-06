import { Wrapper, KeyInformations, ImageWrapper } from './styles'

import { IKeyInformations } from '../App/App'

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
          <h2>Sensação térmica: {informations.feelsLike}º</h2>
          <p>{informations.situation}</p>
          <p>Máxima: {informations.max}º</p>
          <p>Minima: {informations.min}º</p>
          <p>Humidade: {informations.humidity}%</p>
          <p>Vento: {informations.wind}m/s</p>
        </KeyInformations>
        <ImageWrapper>
          <img src="https://www.shareicon.net/data/2016/06/27/787432_cloud_512x512.png" />
        </ImageWrapper>
      </div>
    </Wrapper>
  )
}

export default CardWithkeyInformations