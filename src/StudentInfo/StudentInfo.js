import React from 'react'
import Card from '../Card/Card'

export default function StudentInfo({ student, removeCourse }) {
  const { id, name, email, courses } = student
  let studentCourses

  if (courses) {
    studentCourses = courses.map(course => {
      return <Card
        key={course.id}
        id={course.id}
        name={course.name}
        time={course.time}
        addRemoveCourse={removeCourse}
        />
    })
  } else {
    studentCourses = 'You aren\'t registered for any courses at this time.'
  }

  return (
    <section>
      <h2>Student Information:</h2>
      <p>Name: {name}</p>
      <p>Student ID: {id}</p>
      <p>Email: {email}</p>
      <h2>My Courses: </h2>
      <div>{studentCourses}</div>
    </section>
  )
}
