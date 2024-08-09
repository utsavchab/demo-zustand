import { create } from 'zustand'

export type Course = {
  id: string
  status: 'Completed' | 'In Progress' | 'Not Started'
  title: string
  description: string
}

export type CourseStore = {
  courses: Course[]
  addCourse: (course: Course) => void
  removeCourse: (courseId: string) => void
}
const useCourseStore = create<CourseStore>((set) => ({
  courses: [],
  addCourse: (course) =>
    set((state) => ({ courses: [course, ...state.courses] })),
  removeCourse: (courseId) =>
    set((state) => ({
      courses: state.courses.filter((course) => course.id !== courseId),
    })),
}))

export { useCourseStore }
