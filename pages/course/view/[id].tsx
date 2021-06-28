import React, { useEffect, useState } from 'react';
import ChapterAddForm from '../../../components/forms/chapter-add-form';

import Layout from '../../../components/layout';
import { ICourse } from '../../../contracts/ICourse';
import CourseService from '../../../services/course.service';

const CourseViewPage = ({ id }) => {
  useEffect(() => {
    getCourseDetails(id);
  }, []);
  const [course, setCourse] = useState<ICourse>(null);
  const getCourseDetails = async (id) => {
    const resp = await CourseService.getCourseById(id);
    setCourse(resp.data.data);
  };
  const addNewChapter = (chapter) => {
    const newCourse = course;
    newCourse.chapters.unshift(chapter);
    setCourse({ ...newCourse });
  };
  return (
    <Layout pageTitle="My courses">
      <div className="d-flex flex-column justify-content-center mb-3">
        {/* <h1>Manage {course.name}</h1> */}
      </div>
      <div className="d-flex flex-column justify-content-center">
        <div className="row">
          <div className="col-4">
            <h3>Chapters add</h3>
            <ChapterAddForm courseId={id} addNewChapter={addNewChapter} />
          </div>
          <div className="col-7 offset-md-1">
            <h3>Chapters</h3>
            {course &&
              course.chapters.map((chapter, index) => {
                return <div key={index}>{chapter.name}</div>;
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default CourseViewPage;

export async function getServerSideProps({ params, req, res }) {
  const { id } = params;
  return {
    props: { id },
  };
}
