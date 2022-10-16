import { IKeyInformations } from '../App/App'
import { InformationTape } from '../InformationTape/InformationTape'

import KeyInformations from '../KeyInformations'

interface CardWithkeyInformationsProps{
  informations: IKeyInformations;
}

function CardWithkeyInformations({informations}:CardWithkeyInformationsProps){

  console.log(informations)

  const validInformations = informations.cityName !== null?
    <KeyInformations informations={informations}/>:
    <InformationTape noanimate>Cidade não encontrada</InformationTape>

  return(
    validInformations
  )
}

export default CardWithkeyInformations