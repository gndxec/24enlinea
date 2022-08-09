import React from 'react'
import { Route, Redirect } from 'react-router'

function PrivateRoute({ isAuth, component: Component, ...rest }) {

    return (
        <Route
            {...rest}
            render={(props) =>
                (isAuth)
                    ? (<Component {...props} />)
                    : (<Redirect to="/accounts/login/" />)
            }
        />
    )
}

export default PrivateRoute
