import styled from 'styled-components';
import Theme from "../theme";
import NxWelcome from './nx-welcome';

const theme = {
  colors: {
      powderWhite: "#FFFDF9",
      primary: 'grey',
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
    <Theme>
      <NxWelcome title="basics" />
    </Theme>
  );
}

export default App;
