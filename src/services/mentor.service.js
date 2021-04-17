import { HTTP } from './http.service'

const store = data => {
  return HTTP.post('/mentors', data)
}

const list = (params = {}) => {
  return HTTP.get('/mentors')
}

const show = mentorId => {
  return HTTP.get(`/mentors/${mentorId}`)
}

const destory = mentorId => {
  return HTTP.delete(`/mentors/${mentorId}`)
}

const update = (mentorId, mentorDetails) => {
  return HTTP.put(`/mentors/${mentorId}`, mentorDetails)
}

export const MentorService = {
  store,
  list,
  show,
  update,
  destory
}