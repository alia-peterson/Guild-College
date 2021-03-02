import React from 'react'

export default function StudentInfo({ student, removeCourse }) {
  const { id, name, email, courses } = student

  return (
    <section>
      <h2>Student Information:</h2>
      <p>Name: {name}</p>
      <p>Student ID: {id}</p>
      <p>Email: {email}</p>
      <h2>My Courses: </h2>
    </section>
  )
}
