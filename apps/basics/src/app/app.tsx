import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import NxWelcome from './nx-welcome';

const theme = {
  colors: {
      powderWhite: "#FFFDF9",
      primary: 'green',
      persianGreen: "#06B49A",
      lightBlue: "#AFDBD2",
      onyx: "#36313D"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em"
  }
};

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <NxWelcome title="basics" />
    </ThemeProvider>
  );
}

export default App;
