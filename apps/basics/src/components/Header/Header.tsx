import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../Button/Button';
// import wording from '../../api/api-wording/wording.json';
// import Theme from "../../theme";

import { Logo } from '../../assets/index';

import './header.css';

interface HeaderProps {
    user?: () => void;
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccounts?: () => void;
}

const HeaderContainer = styled.div`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 20px;
    display: flex;
    align-items: center;
    background-color: ${props => `${props.theme.colors.primary}`};
    justify-content: space-between;
`;

export const Header = (props: HeaderProps) => (
  <header>
    <HeaderContainer>
      <div>
        <Logo />
        <h1>titulo</h1>
      </div>
      <div>
        {/* {true ? <LogoutButtons /> : <LoginButtons />} */}
      </div>
    </HeaderContainer>
  </header>
);
