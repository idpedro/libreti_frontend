import React from 'react';
import {Search as SearchIcon}  from "../../styles/icons";
import { Container,SearchInput,SearchConteiner} from './styles';

const Search: React.FC = () => {
  return (
    <Container>
      <SearchDiv/>
    </Container>
  );
};


const SearchDiv: React.FC =()=>{
  return(
    <SearchConteiner>
    <SearchIcon/>
    <SearchInput  type='text' placeholder='nome,id,assunto'/>
    </SearchConteiner>
  )
}

export default Search;
