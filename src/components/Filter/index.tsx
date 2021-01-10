import React, { useCallback, useState } from 'react';
import { Container, FilterButton, FilterIcon, Select } from './styled';

interface InterfaceFilter {
  children?: JSX.Element[];
  options: string[];
  filterCallback: (selectedFilter: any) => void;
}

const Filter: React.FC<InterfaceFilter> = ({ options, filterCallback }) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[1]);
  const filterCall = useCallback(() => {
    filterCallback(selectedOption);
  }, [filterCallback, selectedOption]);
  return (
    <Container>
      <FilterButton onClick={filterCall}>
        <FilterIcon />
        <span>{'Filtrar'}</span>
      </FilterButton>
      <Select
        value={selectedOption}
        onChange={(event) => {
          setSelectedOption(event.target.value);
        }}
      >
        {options.map((option, index) => {
          return (
            <option value={option} key={option + index}>
              {option}
            </option>
          );
        })}
      </Select>
    </Container>
  );
};

export default Filter;
