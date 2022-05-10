import React from 'react';
import styled from 'styled-components';

import wording from '../../api/api-wording/wording.json';
import { Logo } from '../../assets/index';

const HeaderContainer = styled.div`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: ${props => `${props.theme.spacing.small}`};
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${props => `${props.theme.colors.primary}`};
    @media (min-width: ${props => `${props.theme.breakpoints.lg}`}) {
      background: red;
    }
`;
const Brand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Header = () => (
  <header>
    <HeaderContainer>
      <Brand>
        <Logo />
        <h1>{wording.header.title}</h1>
      </Brand>
      <div>
      </div>
    </HeaderContainer>
  </header>
);
