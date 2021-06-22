import React from 'react';
import CourseAddForm from '../../../components/forms/course-add-form';
import Layout from '../../../components/layout';

const CourseAddPage = () => {
  return (
    <Layout pageTitle="Add a new Course">
      <div className="d-flex flex-column justify-content-center">
        <div className="col-6">
          <p>This is the page.</p>
          <CourseAddForm />
        </div>
      </div>
    </Layout>
  );
};

export default CourseAddPage;
