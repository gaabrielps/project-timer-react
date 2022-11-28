import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <Button colorsOne='danger' />
      <Button colorsOne='success'/>
      <Button />


    <GlobalStyle />
    </ThemeProvider>

  )

}

