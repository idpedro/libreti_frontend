import React, {
  useCallback,
  useState,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import { Label } from './styles';

interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {}

const Toggle: React.ForwardRefRenderFunction<HTMLInputElement, ToggleProps> = (
  props,
  ref
) => {
  const [state, setState] = useState<boolean>(false);
  const toggleState = useCallback(() => {
    setState(!state);
  }, [state, setState]);
  return (
    <Label onClick={toggleState}>
      <input ref={ref} type="checkbox" name="" id="" defaultChecked={state} />
      <span></span>
    </Label>
  );
};

export default forwardRef(Toggle);
