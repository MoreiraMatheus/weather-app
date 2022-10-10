import { Input, Wrapper, SearchButton } from './styles'

function SearchBar(){
  

  return(
    <Wrapper>
      <Input placeholder='Pesquisar'/>
      <SearchButton>Pesquisar</SearchButton>
    </Wrapper>
  )
}

export default SearchBar