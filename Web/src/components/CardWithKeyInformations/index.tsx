import { useContext} from 'react'

import { Wrapper, KeyInformations, ImageWrapper } from './styles'

import { WeatherContext, IKeyInformations } from '../App/App'


function CardWithkeyInformations(props:IKeyInformations){
  const teste = useContext(WeatherContext)

  return(
    <Wrapper>
      <h1>{props.cityName} - {props.country}</h1>
      <div>
        <KeyInformations>
          <h1>{props.temp}º</h1>
          <p>info {teste}</p>
          <p>info....</p>
          <p>info....</p>
          <p>info....</p>
        </KeyInformations>
        <ImageWrapper>
          <img src="https://www.shareicon.net/data/2016/06/27/787432_cloud_512x512.png" />
        </ImageWrapper>
      </div>
    </Wrapper>
  )
}

export default CardWithkeyInformations