import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from './containers/App'
import Home from './containers/Home'

export default class Routes extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <App>
        <Switch>
          <Route path='/' component={ Home } />
        </Switch>
      </App>
    )
  }
}
