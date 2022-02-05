import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { AuthForm, useLoginForm } from '@/features/auth';
import { Page } from '@/shared/ui';

const AuthPage: FC = () => {
  const { formik } = useLoginForm();

  return (
    <Page.Container>
      <Page.Layout variant="fullsize">
        <Paper variant="outlined">
          <Box p={3}>
            <Box mb={2}>
              <Typography variant="h5" component="div">
                Логин
              </Typography>
              <Typography component="div">Введите пароль и логин</Typography>
            </Box>
            <AuthForm formik={formik} />
          </Box>
        </Paper>
      </Page.Layout>
    </Page.Container>
  );
};

export default AuthPage;
