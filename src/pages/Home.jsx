import React, { Component } from 'react'
import Title from '../components/Title'
import LoginPage from './LoginPage'

export default class Home extends Component {
  render() {
    return (
      <div>
        <p>THis is Home Page</p>
        {/* <Title /> */}
        <LoginPage />
      </div>
    )
  }
}
