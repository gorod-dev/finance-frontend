import { Box, Button, TextField } from '@mui/material';
import { FormikProps } from 'formik';
import { FC } from 'react';

export const AuthForm: FC<{ formik: FormikProps<any> }> = ({ formik }) => (
  <form onSubmit={formik.handleSubmit}>
    <Box mb={2}>
      <TextField
        name="login"
        label="Логин"
        type="text"
        color="secondary"
        fullWidth
      />
    </Box>
    <Box mb={2}>
      <TextField
        name="password"
        label="Пароль"
        type="password"
        color="secondary"
        fullWidth
      />
    </Box>
    <Button type="submit" color="secondary" variant="contained" fullWidth>
      Логин
    </Button>
  </form>
);
