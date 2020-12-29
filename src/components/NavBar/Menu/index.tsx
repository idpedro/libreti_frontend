import React from 'react';
import {
  ButtonList,
  ButtonLink,
  Settings,
  User,
  Exit,
  BranchesIcon,
  GroupIcon,
} from './styles'
import { Colors } from '../../../styles/GlobalStyles';

const ButtonConfig: React.FC = () => {
  return (
    <ButtonLink to="/settings" background="#F7C325" color="#2a2a2a">
      <Settings />
      <span>{'Configurações'}</span>
    </ButtonLink>
  );
};

const ButtonUsers: React.FC = () => {
  return (
    <ButtonLink to="/groups">
      <User />
      <span> {'Usuarios'}</span>
    </ButtonLink>
  );
};

const ButtonGroups: React.FC = () => {
  return (
    <ButtonLink to="/settings">
      <GroupIcon/>
      <span>{'Grupos'}</span>
    </ButtonLink>
  );
};

const ButtonBranches: React.FC = () => {
  return (
    <ButtonLink to="/settings">
      <BranchesIcon />
      <span>{'Filiais'}</span>
    </ButtonLink>
  );
};
const ButtonLogout: React.FC = () => {
  return (
    <ButtonLink to="/logout" background={Colors.danger}>
      <Exit />
    </ButtonLink>
  );
};

const admin = true;

const Menu: React.FC = () => {
  if (admin) {
    return (
      <>
        <ButtonList>
          <ButtonConfig />
          <ButtonUsers />
          <ButtonGroups />
          <ButtonBranches />
          <ButtonLogout />
        </ButtonList>
      </>
    );
  }
  return (
    <ButtonList>
      <ButtonLogout />
    </ButtonList>
  );
};

export default Menu;
