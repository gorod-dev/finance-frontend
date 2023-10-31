import { Typography } from '@gorod-dev/kit-playground';
import { Paper, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AuthForm, useLoginForm } from '@/features/auth';

export const Login: React.FC = () => {
  const { formik } = useLoginForm();
  const { t } = useTranslation('auth');

  return (
    <Paper variant="outlined">
      <Box p={3}>
        <Box mb={2}>
          <Typography type="h4" as="div">
            {t('SignIn')}
          </Typography>
          <Typography as="div">{t('Type login and password')}</Typography>
        </Box>
        <AuthForm formik={formik} />
      </Box>
    </Paper>
  );
};
