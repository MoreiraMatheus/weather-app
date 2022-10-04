import { Wrapper, KeyInformations, ImageWrapper } from './styles'

function CardWithkeyInformations(){
  return(
    <Wrapper>
      <h1>Your location</h1>
      <div>
        <KeyInformations>
          <h1>00º</h1>
          <p>info....</p>
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