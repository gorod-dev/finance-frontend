import { FC, Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/macro';
import { Routing } from '@/pages';
import { useMUITheme } from './lib';

import './styles/index.css';
import '@gorod-dev/kit-playground/dist/style.css';

export const App: FC = () => {
  const { theme } = useMUITheme();

  return (
    <Suspense fallback={<div />}>
      <CssBaseline enableColorScheme />
      <MUIThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <Routing />
        </StyledThemeProvider>
      </MUIThemeProvider>
    </Suspense>
  );
};
