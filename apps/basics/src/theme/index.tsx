import React, { JSXElementConstructor } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        powderWhite: "#FFFDF9",
        primary: '#FFFDF9',
        persianGreen: "#06B49A",
        lightBlue: "#AFDBD2",
        onyx: "#36313D"
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    },
    spacing: {
        small: "1em",
        medium: "2em",
        large: "3em",
    }
};

const Theme = ({children}:any):any => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);


export default Theme;