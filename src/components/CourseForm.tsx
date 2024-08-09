import { useState } from 'react'
import { useCourseStore } from '../store/course'

export default function CourseForm() {
  const addCourse = useCourseStore((state) => state.addCourse)

  const [courseTitle, setCourseTitle] = useState('')

  const handleSubmit = () => {
    if (courseTitle.trim().length == 0) {
      return
    }

    addCourse({
      id: `${Math.ceil(Math.random() * 10000000)}`,
      description: '',
      title: courseTitle,
      status: 'Not Started',
    })
    setCourseTitle('')
  }

  return (
    <div className='form-container'>
      <input
        type='text'
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
        className='form-input'
      />
      <button onClick={handleSubmit} className='form-submit-btn'>
        Add course
      </button>
    </div>
  )
}
