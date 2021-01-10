import React, {
  useCallback,
  useState,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import { Label } from './styles';

interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {}

const Toggle: React.ForwardRefRenderFunction<HTMLInputElement, ToggleProps> = (
  { checked, ...props },
  ref
) => {
  const [state, setState] = useState<boolean>(checked ? true : false);
  const toggleState = useCallback(() => {
    setState(!state);
  }, [state, setState]);
  return (
    <Label onClick={toggleState} data-state={state}>
      <input ref={ref} type="checkbox" defaultChecked={state} {...props} />
      <span></span>
    </Label>
  );
};

export default forwardRef(Toggle);
