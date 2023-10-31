import * as Yup from 'yup';
import { validationErros } from '@/shared/lib';

export const AuthScheme = Yup.object().shape({
  login: Yup.string().required(validationErros.required),
  password: Yup.string().required(validationErros.required),
});
