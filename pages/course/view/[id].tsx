import arrayMove from 'array-move';
import React, { useEffect, useState } from 'react';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc';
import ChapterAddForm from '../../../components/forms/chapter-add-form';

import Layout from '../../../components/layout';
import { ICourse } from '../../../contracts/ICourse';
import ChapterService from '../../../services/chapter.service';
import CourseService from '../../../services/course.service';

const DragHandle = SortableHandle(() => <i className="bi bi-arrows-move"></i>);

const SortableChapter = SortableElement(({ chapter }) => {
  return (
    <div key={chapter.id}>
      <div className="d-flex p-2 my-2 border">
        <DragHandle /> <span className="ps-2">{chapter.name}</span>
      </div>
    </div>
  );
});

const SortableCourse = SortableContainer(({ chapters }) => {
  return (
    <div className="block">
      {chapters.map((chapter, index) => {
        return (
          <SortableChapter chapter={chapter} key={chapter.id} index={index} />
        );
      })}
    </div>
  );
});

const CourseViewPage = ({ id }) => {
  useEffect(() => {
    getCourseDetails(id);
  }, []);
  const [course, setCourse] = useState<ICourse>(null);
  const [sorted, setSorted] = useState(false);
  const getCourseDetails = async (id) => {
    const resp = await CourseService.getCourseById(id);
    setCourse(resp.data.data);
  };
  const addNewChapter = (chapter) => {
    const newCourse = course;
    newCourse.chapters.unshift(chapter);
    setCourse({ ...newCourse });
  };
  const handleSort = ({ oldIndex, newIndex }) => {
    setSorted(true);
    const newCourse = course;
    arrayMove.mutate(newCourse.chapters, oldIndex, newIndex);
    setCourse({ ...newCourse });
  };
  const updateSort = async () => {
    const sequence = [];
    course.chapters.map((chapter, index) => {
      sequence.push({ id: chapter.id, weight: index });
    });
    console.log('sequence', sequence);
    const postData = { course_id: id, sequence };
    const response = await ChapterService.updateChapterSequence(postData);
    response.status === 204 ? setSorted(false) : null;
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
            <div className="block">
              <h3>
                Chapters{' '}
                {sorted && (
                  <span>
                    <button
                      className="btn btn-sm btn-success float-end"
                      onClick={updateSort}
                    >
                      Update
                    </button>
                  </span>
                )}
              </h3>
            </div>
            {course && course.chapters.length > 0 && (
              <SortableCourse
                chapters={course.chapters}
                onSortEnd={handleSort}
                useDragHandle
              />
            )}
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
