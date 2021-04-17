import axios from 'axios'
import { Storage } from './storage.service'

const getToken = _ => {
  let user = Storage.getJSON('user')
  console.log('AA', user)
  return user?.token || null
}

export const HTTP = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  headers: {
    'x-access-token': getToken()
  }
})

// export const HTTP = {
//   baseUrl: process.env.REACT_APP_HOST,

//   getToken() {
//     let user = AuthService.getUser()
//     return user?.token || null
//   },

//   authHeader() {
//     return {
//       'x-access-token': this.getToken()
//     }
//   },

//   async sendResponse(response) {
//     if (!response.ok) {
//       throw response
//     }
//     return await response.json()
//   },

//   async get(endpoint) {
//     const response = await fetch(this.getUrl(endpoint), {
//       mode: 'no-cors',
//       method: 'GET',
//       headers: {
//         ...this.authHeader()
//       }
//     })
//     return await this.sendResponse(response)
//   },

//   async post(endpoint, data = {}) {
//     const response = await fetch(this.getUrl(endpoint), {
//       mode: 'no-cors',
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json; charset=UTF-8',
//         ...this.authHeader()
//       }
//     })
//     return await this.sendResponse(response)
//   },

//   async delete(endpoint, data) {
//     const response = await fetch(this.getUrl(endpoint), {
//       mode: 'no-cors',
//       method: 'DELETE',
//       headers: {
//         ...this.authHeader()
//       }
//     })
//     return await this.sendResponse(response)
//   },

//   async put(endpoint, data = {}) {
//     const response = await fetch(this.getUrl(endpoint), {
//       mode: 'no-cors',
//       method: 'PUT',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//         ...this.authHeader()
//       }
//     })
//     return await this.sendResponse(response)
//   },

//   getUrl(endpoint) {
//     return `${this.baseUrl}${endpoint}`
//   }
// }
