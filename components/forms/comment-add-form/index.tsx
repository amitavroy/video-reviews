import { Form, Formik, FormikHelpers, FormikValues } from 'formik';
import React from 'react';
import { IComment } from '../../../contracts/IComment';
import { CommentSchema } from '../../../schemas/comment.schema';
import CommentService from '../../../services/comment.service';
import { ValidationMessage } from '../../validation-message';
import FormLabel from '../labels';

interface Props {
  videoId: number;
  handleCommentAdd: (comment: IComment) => void;
}

export const CommentAddForm: React.FC<Props> = ({
  videoId,
  handleCommentAdd,
}) => {
  const handleSubmit = async (
    values,
    formikHelpers: FormikHelpers<FormikValues>
  ) => {
    const resp = await CommentService.saveVideoComment({
      video_id: videoId,
      comment: values.comment,
    });
    if (resp.status === 201) {
      formikHelpers.resetForm();
      handleCommentAdd(resp.data.data);
    }
  };
  return (
    <Formik
      initialValues={{ comment: '' }}
      onSubmit={handleSubmit}
      validationSchema={CommentSchema}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div className="mb-3">
            <FormLabel id="comment" name="Add comment" />
            <textarea
              className="form-control"
              name="comment"
              value={values.comment}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            <ValidationMessage name="comment" />
          </div>
          <div className="mb-3">
            <button className="btn btn-success mr-3">Save</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
