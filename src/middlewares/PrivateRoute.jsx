import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthService } from '../services/auth.service'

export const PrivateRoute = ({ ...props }) => {
    const loggedIn = AuthService.getUser()
    return loggedIn ? <Route {...props} /> : <Redirect to="/login" />
}