import React from 'react'

const Input = ({ id, label, onChange, ...props }) => (
  <div className="form-group">
    <label htmlFor={id || ''}>{label}</label>
    <input onChange={onChange} id={id || ''} className="form-control" {...props} />
  </div>
)

export default Input