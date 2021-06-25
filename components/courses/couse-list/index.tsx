import React, { Fragment, useEffect, useState } from 'react';
import CourseService from '../../../services/course.service';
import CourseItem from '../course-item';

const CourseList = () => {
  const [published, setPublished] = useState([]);
  const [unPublished, setUnPublished] = useState([]);
  useEffect(() => {
    fetchMyCourses();
  }, []);
  const fetchMyCourses = async () => {
    const resp = await CourseService.getMyCourses();
    const { published, unpublished } = resp.data.data;
    setPublished(published);
    setUnPublished(unpublished);
  };
  return (
    <React.Fragment>
      {unPublished.length > 0 && (
        <div>
          <p>
            <strong>My unpublished courses</strong>
          </p>
          <ol className="list-group list-group-numbered mb-5">
            {unPublished.map((course, index) => {
              return React.Children.toArray(<CourseItem course={course} />);
            })}
          </ol>
        </div>
      )}

      {published.length > 0 && (
        <div>
          <p>
            <strong>My published courses</strong>
          </p>
          <ol className="list-group list-group-numbered">
            {published.map((course, index) => {
              return React.Children.toArray(<CourseItem course={course} />);
            })}
          </ol>
        </div>
      )}
    </React.Fragment>
  );
};
export default CourseList;
