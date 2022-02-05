// eslint-disable-next-line import/no-extraneous-dependencies
import { render, RenderOptions } from '@testing-library/react';
import { createTheme } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/macro';

const fakeTheme = createTheme();

export const renderWithTheme = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) =>
  render(
    <StyledThemeProvider theme={fakeTheme}>{ui}</StyledThemeProvider>,
    options,
  );
