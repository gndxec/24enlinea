import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer, userDetailsReducer } from '../redux/reducers/userReducers'
import { clientEmailsReducer, userLoginReducer, userSignupReducer } from './reducers/authReducers';
//import { authReducer, userLoginReducer, userSignupReducer } from '../redux/reducers/userReducers'


//Creamos nuestro gestionador de estados
const reducer = combineReducers({

    userAuth: authReducer,
    userDetails: userDetailsReducer,
    userLogin: userLoginReducer,
    userSignup: userSignupReducer,
    clientEmails: clientEmailsReducer,
    // userLogin: userLoginReducer,
    // userSignup: userSignupReducer,

})


export const replaceItem = (collection, item) => {
    const index = collection.findIndex((entry) => entry.id === item.id);
    return [...collection.slice(0, index), item, ...collection.slice(index + 1)];
};


const middleware = [thunk]

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(...middleware)))



export default store