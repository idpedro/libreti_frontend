import React from 'react';
import { Search as SearchIcon } from "../../styles/icons";
import { Container, SearchInput, SearchConteiner, FilterButton,Filter } from './styles';

const SearchDiv: React.FC = () => {
  return (
    <SearchConteiner>
      <SearchIcon />
      <SearchInput type='text' placeholder='buscar...' />
    </SearchConteiner>
  )
}


const Search: React.FC = () => {
  return (
    <Container>
      <SearchDiv />
      <FilterButton><Filter/><span>{"Filtrar"}</span></FilterButton>
    </Container>
  );
};

export default Search;
