export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'AUTH_SUCCESS':
            return { loading: false, userInfo: action.payload }

        case 'AUTH_FAIL':
            return { loading: false, error: action.payload }

        case 'AUTH_LOGOUT':
            return {}
        default:
            return state
    }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case 'USER_DETAILS_REQUEST':
            return { ...state, loading: true }

        case 'USER_DETAILS_SUCCESS':
            return { loading: false, success: true, userInfo: action.payload }

        case 'USER_DETAILS_FAIL':
            return { loading: false, error: action.payload }

        case 'USER_DETAILS_RESET':
            return { user: {} }

        default:
            return state
    }
}