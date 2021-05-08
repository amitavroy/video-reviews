import Router from 'next/router';
import { Form, Formik, FormikHelpers } from 'formik';
import VideoService from '../../../services/video.service';

const VideoSubmitForm = () => {
  const handleFormSubmit = async (
    values,
    formikHelpers: FormikHelpers<any>
  ) => {
    console.log(values);
    const result = await VideoService.submitVideo({
      url: values.url,
      title: values.title,
      description: values.description,
    });

    if (result.status === 201) Router.push('/dashboard');
  };
  return (
    <div className="p-2">
      <Formik
        initialValues={{
          title: '',
          description: '',
          url: '',
        }}
        onSubmit={handleFormSubmit}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="email">Video title</label>
              <input
                type="text"
                name="title"
                value={values.title}
                placeholder="Enter your video title"
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
              />
              {errors.title && touched.title ? (
                <div className="validation-error">{errors.title}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="email">Video description</label>
              <textarea
                name="description"
                value={values.description}
                placeholder="Enter a short description of the video."
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
              ></textarea>
              {errors.description && touched.description ? (
                <div className="validation-error">{errors.description}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="email">Video URL</label>
              <input
                type="text"
                name="url"
                value={values.url}
                placeholder="Enter the Youtube link"
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
              />
              {errors.url && touched.url ? (
                <div className="validation-error">{errors.url}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <span className="me-3">
                <button className="btn btn-success mr-3">Submit</button>
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default VideoSubmitForm;
