import * as Yup from 'yup';

export const StoryCreateSchema = Yup.object().shape({
  name: Yup.string()
    .required('Course name is required')
    .min(3, 'Course name is too small.'),
  description: Yup.string()
    .required('Description is required.')
    .min(5, 'Should be atleast 5 characters'),
});
