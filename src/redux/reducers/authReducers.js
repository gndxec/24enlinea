export const clientEmailsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EMAIL_VERIFICATION_SUCCESS':
            return { loading: false, emails: action.payload }

        case 'EMAIL_VERIFICATION_FAIL':
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return { loading: true }

        case 'USER_LOGIN_SUCCESS':
            return { loading: false }

        case 'USER_LOGIN_FAIL':
            return { loading: false, error: action.payload }
        case 'USER_LOGOUT':
            return {}
        default:
            return state
    }
}

export const userSignupReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_SIGNUP_REQUEST':
            return { loading: true }

        case 'USER_SIGNUP_SUCCESS':
            return { loading: false, success: true, signup: action.payload }

        case 'USER_SIGNUP_FAIL':
            return { loading: false, error: action.payload }

        case 'USER_SIGNUP_RESET':
            return {}
        default:
            return state
    }
}