import React from 'react';
import { Search as SearchIcon } from "../../styles/icons";
import { SearchInput, SearchConteiner} from './styles';

const Search: React.FC = () => {
  return (
    <SearchConteiner>
      <SearchIcon />
      <SearchInput type='text' placeholder='buscar...' />
    </SearchConteiner>
  )
}


export default Search;
