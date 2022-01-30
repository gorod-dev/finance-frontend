import { FC } from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as TestIcon } from './assets/test.svg';

export const SApp = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
`;

export const App: FC = () => (
  <main id="app">
    <SApp>{import.meta.env.VITE_API_URL}</SApp>
    <TestIcon />
  </main>
);
