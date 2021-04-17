import React from 'react'

const TaskInput = ({ mentor, index, length, removeTask, onChange }) => (
  <div key={index} className="col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="input-group mb-3">
      <input value={mentor} onChange={e => onChange(e, index)} required type="text" name="tasks" id="tasks" className="form-control" placeholder={`Task ${index + 1}`} />
      {length > 1 &&
        <div className="input-group-append">
          <button onClick={() => removeTask(index)} className="btn btn-outline-danger" type="button">&times;</button>
        </div>}
    </div>
  </div>
)

export default TaskInput