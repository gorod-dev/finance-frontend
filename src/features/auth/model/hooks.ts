import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { AuthScheme } from '../lib';
import { AuthFormValues } from './types';
import { useLogin } from '@/entities/auth';
import { useUserStore } from '@/entities/auth/model';

export const useLoginForm = () => {
  const setUserData = useUserStore((state) => state.setUserData);
  const { mutate } = useLogin();
  const navigate = useNavigate();

  const formik = useFormik<AuthFormValues>({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: (values) => {
      mutate(values, {
        onSuccess: ({ data }) => {
          setUserData(data?.user);
          navigate('/home');
        },
      });
    },
    validationSchema: AuthScheme,
  });

  return { formik };
};
