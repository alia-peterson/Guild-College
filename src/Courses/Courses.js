import React from 'react'
import Card from '../Card/Card'
import './Courses.css'

export default function Courses({ courses }) {
  const allCourses = courses.map(course => {
    return <Card
      key={course.id}
      id={course.id}
      name={course.name}
      time={course.time}
      />
  })

  return (
    <section className='courses-container'>
      <h2>All Courses:</h2>
      <div>{allCourses}</div>
    </section>
  )
}
