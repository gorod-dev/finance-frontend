import { Grid } from '@mui/material';
import { FC } from 'react';

export type PageLayout = {
  variant?: 'fullsize' | 'default';
};

export const Layout: FC<PageLayout> = ({ children, variant = 'default' }) => {
  if (variant === 'fullsize')
    return (
      <Grid
        id="fullsize-container"
        container
        item
        xs={12}
        height="100%"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Grid item xs={12} md={6}>
          {children}
        </Grid>
      </Grid>
    );

  return children as JSX.Element;
};
