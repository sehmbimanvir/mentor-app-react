import React from 'react'

const MentorItem = ({ mentor, editMentor, deleteMentor }) => (
  <tr>
    <td>{mentor.name}</td>
    <td>{mentor.email}</td>
    <td>{mentor.createdAt}</td>
    <td>
      <button onClick={(() => editMentor(mentor._id))} className="btn btn-warning btn-sm mr-3">Edit</button>
      <button onClick={() => deleteMentor(mentor._id)} className="btn btn-danger btn-sm">Delete</button>
    </td>
  </tr>
)

export default MentorItem