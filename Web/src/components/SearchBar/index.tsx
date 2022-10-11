import { Input, Wrapper, SearchButton } from './styles'

interface SearchBarProps{
  updateInformations?: any;
}

function SearchBar(props:SearchBarProps){
  let CityName:string; 

  return(
    <Wrapper>
      <Input 
        onChange={e => CityName = e.target.value}
        placeholder='Pesquisar'
      />
      <SearchButton onClick={()=>props.updateInformations(CityName)}>Pesquisar</SearchButton>
    </Wrapper>
  )
}

export default SearchBar