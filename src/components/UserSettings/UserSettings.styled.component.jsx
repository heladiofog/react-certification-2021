/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { Switch } from '@styled-icons/entypo/Switch';
import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle';

export const UserSettingsContainer = styled.div`
  /* background-color: rgba(255, 255, 255, 0.15); */
  height: 64px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const ThemeSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const ThemeSwitch = styled(Switch)`
  height: 24px;
`;

export const LabelContainer = styled.div`
  padding: 0 20px;
`;

export const UserIcon = styled(UserCircle)`
  height: 48px;
  padding-right: 20px;
`;
