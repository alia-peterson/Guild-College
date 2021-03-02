import React from 'react'
import Card from '../Card/Card'
import './Courses.css'

export default function Courses({ courses, addCourse }) {
  const allCourses = courses.map(course => {
    return <Card
      key={course.id}
      id={course.id}
      name={course.name}
      time={course.time}
      addRemoveCourse={addCourse}
      />
  })

  return (
    <section className='courses-container'>
      <h2>All Courses:</h2>
      <div>{allCourses}</div>
    </section>
  )
}
