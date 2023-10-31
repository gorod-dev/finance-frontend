import { Box, Button, TextField } from '@mui/material';
import { FormikProps } from 'formik';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthFormValues } from '../model/types';

export const AuthForm: FC<{
  formik: FormikProps<AuthFormValues>;
}> = ({ formik }) => {
  const { t } = useTranslation('auth');

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box mb={2}>
        <TextField
          id="login"
          name="login"
          label={t('Login')}
          type="text"
          color="secondary"
          fullWidth
          error={!!formik.errors.login}
          helperText={formik.errors.login}
          onChange={formik.handleChange}
        />
      </Box>
      <Box mb={2}>
        <TextField
          id="password"
          name="password"
          label={t('Password')}
          type="password"
          color="secondary"
          fullWidth
          error={!!formik.errors.password}
          helperText={formik.errors.password}
          onChange={formik.handleChange}
        />
      </Box>
      <Button type="submit" color="secondary" variant="contained" fullWidth>
        {t('Submit')}
      </Button>
    </form>
  );
};
