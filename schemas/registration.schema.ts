import * as Yup from 'yup';

export const RegistrationSchema = Yup.object().shape({
  email: Yup.string()
    .required('This field is required')
    .email('Should be a valid email'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Should be atleast 6 characters'),
  confirm: Yup.string()
    .required('You need to confirm your password')
    .oneOf([Yup.ref('password'), null], 'Both password should match'),
});
