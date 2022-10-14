import { Input, Wrapper, SearchButton } from './styles'

import { MagnifyingGlass } from 'phosphor-react'

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
      <SearchButton onClick={()=>props.updateInformations(CityName)}>
        <MagnifyingGlass 
          size={60}
        />
      </SearchButton>
    </Wrapper>
  )
}

export default SearchBar