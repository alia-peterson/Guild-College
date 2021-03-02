import React, { Component } from 'react'
import Header from '../Header/Header'
import Courses from '../Courses/Courses'
import StudentInfo from '../StudentInfo/StudentInfo'
import allCourses from '../data/course-data'
import currentStudent from '../data/student-data'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      courses: [],
      student: {}
    }
  }

  addCourse = (event) => {
    const thisCourseId = event.target.closest('article').id
    const thisCourse = this.state.courses.find(course => {
      return course.id === thisCourseId
    })

    if (!this.state.student.courses.includes(thisCourse)) {
      const updatedStudent = this.state.student
      updatedStudent.courses.push(thisCourse)
      this.setState({ student: updatedStudent })
    }
  }

  removeCourse = (event) => {
    const thisCourseId = event.target.closest('article').id
    const updatedCourses = this.state.student.courses.filter(course => {
      return course.id !== thisCourseId
    })

    const updatedStudent = this.state.student
    updatedStudent.courses = updatedCourses
    this.setState({ student: updatedStudent })
  }

  componentDidMount = () => {
    this.setState({ courses: allCourses, student: currentStudent })
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <div className='main'>
          <StudentInfo
            student={this.state.student}
            removeCourse={this.removeCourse}
            />
          <Courses
            courses={this.state.courses}
            addCourse={this.addCourse}
            />
        </div>
      </div>
    )
  }
}
