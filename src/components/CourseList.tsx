import React from 'react'
import { useCourseStore } from '../store/course'

const CourseList = () => {
  const { courses, removeCourse } = useCourseStore((state) => ({
    courses: state.courses,
    removeCourse: state.removeCourse,
  }))
  return (
    <>
      <ul>
        {courses.map((course, i) => {
          return (
            <React.Fragment key={i}>
              <li className='course-item'>
                <span>{course.title}</span>
                <button
                  className='delete btn'
                  onClick={() => removeCourse(course.id)}
                >
                  Delete Course
                </button>
              </li>
            </React.Fragment>
          )
        })}
      </ul>
    </>
  )
}

export default CourseList
