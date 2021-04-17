import React from 'react'
import { connect } from 'react-redux'
import { Switch } from 'react-router-dom'
import {
  PrivateRoute,
  GuestRoute
} from './middlewares'
import Login from './pages/auth/Login'
import Home from './pages/Home'
import Navbar from './components/UI/Navbar'
import AddMentor from './pages/mentor/Add'

const App = ({ loggedIn }) => {
  return (
    <div id="app">
      {loggedIn && <Navbar />}
      <div className="container">
        <Switch>
          <PrivateRoute path="/" exact component={Home}></PrivateRoute>
          <PrivateRoute path="/mentors/add" component={AddMentor} />
          <PrivateRoute path="/mentors/:mentorId" exact component={AddMentor} />
          <GuestRoute path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
})

export default connect(mapStateToProps)(App)
