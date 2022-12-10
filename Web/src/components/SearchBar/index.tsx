import { Input, Wrapper, SearchButton } from './styles'

import { MagnifyingGlass } from 'phosphor-react'

interface SearchBarProps{
  updateInformations?: any;
}

function SearchBar(props:SearchBarProps){
  let CityName:string = ''; 

  return(
    <Wrapper>
      <Input 
        onChange={e => CityName = e.target.value}
        placeholder='Pesquisar'
      />
      <SearchButton onClick={
        ()=> CityName !== '' ? props.updateInformations(CityName) : alert('procure por um nome válido')
      }>
        <MagnifyingGlass 
          size={'100%'}
        />
      </SearchButton>
    </Wrapper>
  )
}

export default SearchBar