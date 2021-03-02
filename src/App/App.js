import React, { Component } from 'react'
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

  addCourse = () => {
    console.log('add')
  }

  removeCourse = () => {
    console.log('remove');
  }

  componentDidMount = () => {
    this.setState({ courses: allCourses, student: currentStudent })
  }

  render() {
    return (
      <div className='App'>
        <h1>Guild University</h1>
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
