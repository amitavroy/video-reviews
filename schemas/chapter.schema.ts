import * as Yup from 'yup';

export const ChapterCreateSchema = Yup.object().shape({
  name: Yup.string()
    .required('Chapter name is required')
    .min(3, 'Chapter name is too small.'),
  description: Yup.string()
    .required('Description is required.')
    .min(5, 'Should be atleast 5 characters'),
});
