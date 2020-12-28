import React from 'react';
import { ButtonList, ButtonPreset } from './styles';
import { Settings, User, Exit } from '../../styles/icons';

const admin = true;

const Menu: React.FC = () => {
  if (admin) {
    return (
      <ButtonList>
        <ButtonConfig />
        <ButtonUsers />
        <ButtonGroups />
        <ButtonBranches />
        <ButtonLogout />
      </ButtonList>
    );
  }
  return <ButtonList><ButtonLogout /></ButtonList>;
};

const ButtonConfig: React.FC = () => {
  return (
    <ButtonPreset background="#F7C325" color="#2a2a2a">
      {' '}
      <Settings />
      <span>{'Configurações'}</span>
    </ButtonPreset>
  );
};

const ButtonUsers: React.FC = () => {
  return (
    <ButtonPreset background="#788896">
      <User />
      <span> {'Usuarios'}</span>
    </ButtonPreset>
  );
};

const ButtonGroups: React.FC = () => {
  return (
    <ButtonPreset background="#2C88D9">
      <span>{'Grupos'}</span>
    </ButtonPreset>
  );
};

const ButtonBranches: React.FC = () => {
  return (
    <ButtonPreset background="#34d19d">
      <span>{'Filiais'}</span>
    </ButtonPreset>
  );
};
const ButtonLogout: React.FC = () => {
  return (
    <ButtonPreset background="#D3455C" >
      <Exit />
    </ButtonPreset>
  );
};

export default Menu;
