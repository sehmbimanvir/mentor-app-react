import { HTTP } from './http.service'
import { Storage } from './storage.service'

const userKeyPrefix = 'user'

const login = (email, password) => {
  return HTTP.post('/auth/login', {
    email, password
  }).then(response => {
    Storage.setJSON(userKeyPrefix, response.data.data)
    return response
  })
}

const logout = () => {
  return HTTP.post('/auth/logout', {}).then(() => {
    Storage.remove(userKeyPrefix)
  })
}

const getUser = () => {
  return Storage.getJSON(userKeyPrefix)
}

export const AuthService = {
  login,
  logout,
  getUser
}