import React from 'react';
import CourseList from '../../../components/courses/couse-list';
import CourseAddForm from '../../../components/forms/course-add-form';
import Layout from '../../../components/layout';

const CourseAddPage = () => {
  return (
    <Layout pageTitle="My courses">
      <div className="d-flex flex-column justify-content-center mb-3">
        <h1>My courses</h1>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <div className="row">
          <div className="col-4">
            <CourseAddForm />
          </div>
          <div className="col-7 offset-md-1">
            <h3>Course list</h3>
            <CourseList />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseAddPage;
