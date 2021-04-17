import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthService } from '../services/auth.service'

export const GuestRoute = ({ ...props }) => {
    const loggedIn = AuthService.getUser()
    return loggedIn ? <Redirect to="/" /> : <Route {...props} />
}