import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";

const theme = 'light';

const Theme = ({children}:any):any => (
    <ThemeProvider theme={theme !== "light" ? lightTheme : darkTheme} >{children}</ThemeProvider>
);

export default Theme;
