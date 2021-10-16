import React from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Landing from './components/resume/index'
import Terms from './components/terms&privacy/Terms'
import Privacy from './components/terms&privacy/Privacy'
export default function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/landing' component={Landing} />
          <Route exact path='/tandc' component={Terms} />
          <Route exact path='/privacy' component={Privacy} />
          <Redirect exact from='/' to='/landing' />
        </Switch>
      </Router>
    </div>
  )
}
