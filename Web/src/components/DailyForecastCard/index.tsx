import Wrapper from "./styles"

interface DailyForecastCardProps{
  children: any
}

function DailyForecastCard({children}:DailyForecastCardProps){
  return(
    <Wrapper>{children}</Wrapper>
  )
}

export default DailyForecastCard