import styled from 'styled-components/macro';

export const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    max-width: 900px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: calc(100% - 20px);
  }
`;
