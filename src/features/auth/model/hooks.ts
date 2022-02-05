import { useFormik } from 'formik';

export const useLoginForm = () => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { formik };
};
