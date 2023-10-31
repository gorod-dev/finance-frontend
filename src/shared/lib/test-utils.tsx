// eslint-disable-next-line import/no-extraneous-dependencies
import { render, RenderOptions } from '@testing-library/react';
import { createTheme } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/macro';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

const fakeTheme = createTheme();
const queryClient = new QueryClient();

export const renderWithTheme = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) =>
  render(
    <StyledThemeProvider theme={fakeTheme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
      </BrowserRouter>
    </StyledThemeProvider>,
    options,
  );
