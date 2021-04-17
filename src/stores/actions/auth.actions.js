import { AuthService } from '../../services/auth.service'
import { history } from '../../helpers/history'

const login = (email, password) => {
  return dispatch => {
    dispatch({ type: 'LOGIN', })
    AuthService.login(email, password).then(user => {
      dispatch({
        type: 'LOGIN_SUCCESS',
        user: user.data
      })
      history.push('/')
    }).catch(err => {
      dispatch({ type: 'LOGIN_FAILED' })
    })
  }
}

const logout = () => {
  return dispatch => {
    AuthService.logout().then(() => {
      dispatch({ type: 'Logout' })
      history.push('/login')
    })
  }
}

export const UserActions = {
  login,
  logout
}