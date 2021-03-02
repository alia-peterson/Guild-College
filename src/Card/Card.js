import React from 'react'
import './Card.css'

export default function Card({ id, name, time, addRemoveCourse, buttonText }) {
  return (
    <article className='course-card' id={id}>
      <h3>Course Name: {name}</h3>
      <p>Course ID: {id}</p>
      <p>Time: {time}</p>
      <button onClick={addRemoveCourse}>{buttonText}</button>
    </article>
  )
}
