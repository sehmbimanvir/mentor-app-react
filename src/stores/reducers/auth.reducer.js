import { AuthService } from '../../services/auth.service'

const user = AuthService.getUser()
const initialState = user ? { user, loggedIn: true } : {}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        loggingIn: true,
      }

    case 'LOGIN_SUCCESS':
      return {
        loggedIn: true,
        user: action.user
      }

    case 'LOGIN_FAILED':
      return {
        invalid: true
      }

    default:
      return state

  }
}