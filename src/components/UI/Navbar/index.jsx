import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserActions } from '../../../stores/actions/auth.actions'

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Brand</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button onClick={onLogout} className="nav-link btn-transparent">Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const mapDispatchToProps = {
  onLogout: () => UserActions.logout()
}

export default connect(null, mapDispatchToProps)(Navbar)