import React from "react";
import Slideshow from "./components/Slideshow";
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./App.css";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {theme.palette.mode === 'light' && <GlobalStyles styles={{
        body: {
          backgroundColor: '#439cef',
        }
      }} />}
      <div className="App">
        <div className="slideshow-container">
          <Slideshow />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
