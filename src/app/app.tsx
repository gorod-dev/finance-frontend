import { FC } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/macro';
import { Routing } from '@/pages';
import { useMUITheme } from './config';

import './styles/index.css';

export const App: FC = () => {
  const { theme } = useMUITheme();

  return (
    <>
      <CssBaseline enableColorScheme />
      <MUIThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <Routing />
        </StyledThemeProvider>
      </MUIThemeProvider>
    </>
  );
};
