import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

window.onload = function(){
  ReactDOM.render(
    (
      <Router>
        <Routes />
      </Router>
    ),
    document.getElementById('app')
  )
}
