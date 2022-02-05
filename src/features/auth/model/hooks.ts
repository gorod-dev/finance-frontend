import { useFormik } from 'formik';
import { AuthScheme } from '../lib';
import { AuthFormValues } from './types';

export const useLoginForm = () => {
  const formik = useFormik<AuthFormValues>({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: AuthScheme,
  });

  return { formik };
};
