import React from 'react'
import NoMentors from './NoMentors'
import MentorItem from './MentorItem'

const MentorList = ({ mentors, editMentor, deleteMentor }) => {
  return (
    <div className="table-responsive mt-3">
      <table className="table table-bordered table-small">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Added On</th>
            <th>Actions</th>
          </tr>
          {!mentors.length && <NoMentors />}
          {
            mentors.map(mentor => (
              <MentorItem key={mentor._id} mentor={mentor} editMentor={editMentor} deleteMentor={deleteMentor} />
            ))
          }
        </thead>
      </table>
    </div>
  )
}
export default MentorList