import { FC, Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/macro';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routing } from '@/pages';
import { useMUITheme } from './lib';

import './styles/index.css';
import '@gorod-dev/kit-playground/dist/style.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const App: FC = () => {
  const { theme } = useMUITheme();

  return (
    <Suspense fallback={<div />}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline enableColorScheme />
        <MUIThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <Routing />
          </StyledThemeProvider>
        </MUIThemeProvider>
      </QueryClientProvider>
    </Suspense>
  );
};
