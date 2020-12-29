import styled from 'styled-components';
export {ButtonLink} from '../../../styles/Buttons';
export { Settings, User, Exit ,OfficeBuilding as BranchesIcon,Group as GroupIcon} from '../../../styles/icons';

export const ButtonList = styled.div`
  display: flex;
  padding: 0.5rem;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  &>:last-child(){
    align-self:flex-end

  }
`;


