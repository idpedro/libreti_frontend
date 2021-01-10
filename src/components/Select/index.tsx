import React, {
  SelectHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';
import { SelectStyled } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  optionlist: string[];
  selectedOption?: string;
}

const Select: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { optionlist, selectedOption, ...props },
  ref
) => {
  return (
    <SelectStyled ref={ref} {...props}>
      {optionlist.map((opt) => {
        if (selectedOption === opt) {
          return (
            <option key={opt} value={opt} defaultChecked>
              {opt}
            </option>
          );
        } else
          return (
            <option key={opt} value={opt}>
              {opt}
            </option>
          );
      })}
    </SelectStyled>
  );
};

export default forwardRef(Select);
