import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { MentorService } from '../../services/mentor.service'
import TaskInput from '../../components/Mentor/TaskInput'
import Input from '../../components/UI/Input'

const AddMentor = () => {
  const history = useHistory()
  const [mentorDetails, setMentorDetails] = useState({
    name: '',
    email: '',
    tasks: [
      'Task 1'
    ]
  })

  let { mentorId } = useParams()

  useEffect(() => {
    if (mentorId) {
      MentorService.show(mentorId).then(({ data }) => {
        let { name, email, tasks } = data.data.mentor
        setMentorDetails({
          name, email, tasks
        })
      }).catch(() => {
        history.push('/')
      })
    }
    // eslint-disable-next-line
  }, [])

  const addTask = () => {
    let mDetails = { ...mentorDetails }
    mDetails.tasks.push('')
    setMentorDetails(mDetails)
  }

  const removeTask = index => {
    let mDetails = { ...mentorDetails }
    mDetails.tasks.splice(index, 1)
    setMentorDetails(mDetails)
  }

  const handleOnChange = (e, index = false) => {
    const { name, value } = e.target
    let mDetails = { ...mentorDetails }
    if (index === false) {
      mDetails[name] = value
    } else {
      mDetails[name][index] = value
    }
    setMentorDetails(mDetails)
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    const Action = mentorId ? MentorService.update(mentorId, mentorDetails) : MentorService.store(mentorDetails)
    Action.then(response => {
      alert(response.data.message)
      history.push('/')
    })
  }

  return (
    <>
      <div className="row mt-3">
        <div className="col-12">
          <h1 className="mt-5">{mentorId ? 'Edit' : 'Add'} Mentor</h1>
          <div className="actions justify-content-end d-flex mb-4">
            <button onClick={() => history.push('/')} className="btn btn-primary">&laquo; Back to List</button>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-12">
          <form onSubmit={handleOnSubmit} method="post">
            <Input
              required
              label="Name"
              type="text"
              id="name"
              name="name"
              value={mentorDetails.name}
              placeholder="Mentor's Name"
              onChange={handleOnChange}
            />

            <Input
              required
              label="Email"
              type="email"
              id="email"
              name="email"
              value={mentorDetails.email}
              onChange={handleOnChange}
              placeholder="Mentor's Email"
            />

            {mentorDetails.tasks.length && (
              <div className="task-details">
                <h3 className="my-4">Task Details</h3>
                <div className="row">
                  {
                    mentorDetails.tasks.map((mentor, index) => (
                      <TaskInput
                        key={index}
                        index={index}
                        length={mentorDetails.tasks.length}
                        mentor={mentor}
                        onChange={handleOnChange}
                        removeTask={removeTask}
                      />
                    ))
                  }
                </div>
                <div className="row">
                  <div className="col-12">
                    <button onClick={addTask} type="button" className="btn btn-primary">Add More</button>
                  </div>
                </div>
              </div>
            )}
            <div className="form-group mt-4 d-flex justify-content-end">
              <button className="btn btn-info mr-3">Submit</button>
              <Link to="/" className="btn btn-danger">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddMentor