import Link from 'next/link';
import React from 'react';
import { ICourse } from '../../../contracts/ICourse';

interface Props {
  course: ICourse;
}
const CourseItem: React.FC<Props> = ({ course }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <Link href={`/course/view/${course.id}`}>
        <a>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{course.name}</div>
            {course.description}
          </div>
          <span className="badge bg-primary rounded-pill">
            {course.student_count}
          </span>
        </a>
      </Link>
    </li>
  );
};
export default CourseItem;
