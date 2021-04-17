import React, { useState } from 'react'
import { connect } from 'react-redux'
import { UserActions } from '../../stores/actions/auth.actions'
import Alert from '../../components/UI/Alert'
import Input from '../../components/UI/Input'

const Login = ({ onLogin, loggingIn, loggedIn, invalid }) => {

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleOnSubmit = e => {
    e.preventDefault()
    const { email, password } = credentials
    onLogin(email, password)
  }

  const handleOnChange = e => {
    const { name, value } = e.target;
    const updatedCredentials = { ...credentials }
    updatedCredentials[name] = value
    setCredentials(updatedCredentials)
  }

  return (
    <div className="row align-items-center mt-5">
      <div className="col-md-6 offset-md-3">
        <h3 className="text-center mb-3">Login</h3>
        <form onSubmit={e => handleOnSubmit(e)} autoComplete="off" action="" method="post">
          <Input
            required
            label="Email"
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleOnChange}
            placeholder="Email"
          />

          <Input
            required
            label="Password"
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleOnChange}
            placeholder="Password"
          />
          <div className="form-group">
            <button disabled={loggingIn} type="submit" className="btn btn-primary">Login</button>
          </div>
          {invalid && <Alert type="danger" message="Something went wrong" />}
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  loggingIn: state.auth.loggingIn,
  loggedIn: state.auth.loggedIn,
  invalid: state.auth.invalid
})

const mapDispatchToProps = {
  onLogin: (email, password) => UserActions.login(email, password)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)