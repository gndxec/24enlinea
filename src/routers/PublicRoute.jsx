import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PublicRoute({ isAuth, component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>
                (isAuth)
                    ? (<Redirect to="/dashboard/soporte-tecnico/" />)
                    : (<Component {...props} />)
            }
        />
    )
}

export default PublicRoute
