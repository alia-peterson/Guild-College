import React from 'react'
import './Card.css'

export default function Card({ id, name, time }) {
  return (
    <section className='course-card'>
      <h3>Course Name: {name}</h3>
      <p>Course ID: {id}</p>
      <p>Time: {time}</p>
      <button>Add Class</button>
    </section>
  )
}
