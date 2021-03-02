import React from 'react'

export default function StudentInfo({ student }) {
  const { id, name, email } = student

  return (
    <section>
      <h2>Student Information:</h2>
      <p>Name: {name}</p>
      <p>Student ID: {id}</p>
      <p>Email: {email}</p>
    </section>
  )
}
