import { FC } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, ThemeProvider as MUIThemeProvider } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/macro';

import './styles/index.css';
import { useMUITheme } from './config';

export const App: FC = () => {
  const { theme, toggleTheme } = useMUITheme();

  return (
    <>
      <CssBaseline enableColorScheme />
      <MUIThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <main id="app">
            <Button
              fullWidth
              type="button"
              size="large"
              variant="contained"
              color="success"
              onClick={toggleTheme}
            >
              123
            </Button>
            <Button
              fullWidth
              type="button"
              size="large"
              variant="contained"
              color="secondary"
            >
              123
            </Button>
            <Button fullWidth type="button" size="large" variant="outlined">
              123
            </Button>
            <Button fullWidth type="button" size="large" variant="text">
              123
            </Button>
          </main>
        </StyledThemeProvider>
      </MUIThemeProvider>
    </>
  );
};
