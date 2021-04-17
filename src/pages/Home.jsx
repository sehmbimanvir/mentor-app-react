import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { MentorService } from '../services/mentor.service'
import MentorList from '../components/Mentor/MentorList'

const Home = () => {

  const [mentors, setMentors] = useState([])

  const history = useHistory()

  useEffect(() => {
    MentorService.list().then(({ data }) => {
      setMentors(data.data.mentors)
    })
  }, [])

  const onEditMentor = mentorId => {
    history.push(`/mentors/${mentorId}`)
  }

  const onDeleteMentor = mentorId => {
    let bool = window.confirm('Are you sure ?')
    if (!bool)
      return false

    MentorService.destory(mentorId).then(() => {
      let mentorIndex = mentors.findIndex(mentor => mentor._id === mentorId)
      if (mentorIndex > -1) {
        let allMentors = [...mentors]
        allMentors.splice(mentorIndex, 1)
        setMentors(allMentors)
      }
      alert('Mentor Deleted Successfully')
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="mt-5">All Mentors</h1>
          <div className="actions justify-content-end d-flex mb-4">
            <button onClick={() => history.push('/mentors/add')} className="btn btn-primary">Add Mentor</button>
          </div>
          <MentorList mentors={mentors} editMentor={onEditMentor} deleteMentor={onDeleteMentor} />
        </div>
      </div>
    </div>
  )
}

export default Home