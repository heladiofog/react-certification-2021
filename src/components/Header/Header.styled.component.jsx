/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { Menu } from '@styled-icons/boxicons-regular/Menu';

export const HeaderContainer = styled.header`
  background-color: #1c5476;
  min-height: 64px;
  width: 100%;
  display: flex;
  align-self: flex-between;
  padding: 0 24px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
`;

export const BurgerMenuContainer = styled.div`
  /* padding: 12px 20px; */
  display: flex;
  justify-content: center;
  min-width: 48px;
`;

export const BurgerMenu = styled(Menu)`
  color: ${(props) => props.color};
  margin-right: 16px;
  padding: 12px 0;
`;

export const LogoContainer = styled.div`
  background-color: rgb(67, 154, 254);
  padding: 12px 20px;
  display: flex;
  justify-content: end;
`;
