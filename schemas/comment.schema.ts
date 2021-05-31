import * as Yup from 'yup';

export const CommentSchema = Yup.object().shape({
  comment: Yup.string()
    .required('This field is required')
    .min(3, 'Should be atleast 3 characters'),
});
