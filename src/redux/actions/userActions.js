
import axios from 'axios'
import { auth, db, storage, firebase } from '../../firebase';

export const authState = (formData) => ({
    type: 'AUTH_SUCCESS',
    payload: {
        uid: formData.uid,
        name: formData.name,
        username: formData.username,
        picture: formData.picture,
        email: formData.email,
        biography: formData.biography,
        gender: formData.gender,
        career: formData.career,
        country: formData.country,
        city: formData.city,
        sede: formData.sede,
        birthday: formData.birthday,
        looking_for: formData.looking_for,
        gender_interest: formData.gender_interest,
        notification_count: formData.notification_count,
        message_count: formData.message_count,
    }
});

export const emailSelection = (formData) => async (dispatch) => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "token": "VzhoNEE2ZWlEdFFDUTJMaUJOS21Edz09",
            "cedula": formData.dni
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://45.236.168.15/api/v1/GetClientsDetails", requestOptions)
            .then(response => response.text())
            .then(result => {
                const data1 = JSON.parse(result)
                if (data1.estado === 'error') {
                    console.log('Esta cedula no pertenece', result)
                    dispatch({
                        type: 'USER_LOGIN_REQUEST',
                        payload: 'No pertenece',
                    })
                }

                const email_ = data1.datos[0].correo
                //console.log(types_plan, 'plan')
                const sign = auth.signInWithEmailAndPassword(email_, formData.password)
                //console.log(sign.user.uid)
                const user = {
                    uid: sign.user.uid
                }
                const userDB = db.collection('users').doc(user.uid).get()
                const data = {
                    cedula: userDB.data().cedula,
                    email: userDB.data().email,
                    phone: userDB.data().phone,
                }
            })
            .catch(error => console.log('error', error));
        dispatch({
            type: 'EMAIL_SELECTION_REQUEST'
        })
    } catch (error) {
        dispatch({
            type: 'EMAIL_SELECTION_FAIL',
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const login = (formData) => async (dispatch) => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "token": "VzhoNEE2ZWlEdFFDUTJMaUJOS21Edz09",
            "cedula": formData.dni
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://45.236.168.15/api/v1/GetClientsDetails", requestOptions)
            .then(response => response.text())
            .then(result => {
                const data1 = JSON.parse(result)
                if (data1.estado === 'error') {
                    const error = {
                        code: 'not-found-client',
                        message: 'No existe el cliente con este numero de cedula'
                    }
                    dispatch({
                        type: 'USER_LOGIN_FAIL',
                        payload: error,
                    })
                    //console.log('Esta cedula no pertenece', result)
                    
                }
                const email_ = data1.datos[0].correo
                //console.log(types_plan, 'plan')
                const sign = auth.signInWithEmailAndPassword(email_, formData.password)
                    .then((userCredential) => {
                        // Signed in
                        var user = userCredential.user;
                        // ...
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(error, 'error 2')
                        dispatch({
                            type: 'USER_LOGIN_FAIL',
                            payload: error,
                        })
                        
                    });
                //console.log(sign.user.uid)
                // const user = {
                //     uid: sign.user.uid
                // }
                // const userDB = db.collection('users').doc(user.uid).get()
                // const data = {
                //     cedula: userDB.data().cedula,
                //     email: userDB.data().email,
                //     phone: userDB.data().phone,
                // }
            })
            .catch(error => console.log('error', error));
        dispatch({
            type: 'USER_LOGIN_REQUEST'
        })
        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            //payload: data
        })
    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const apiUserEmails = (formData) => async (dispatch) => {
    try {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "token": "VzhoNEE2ZWlEdFFDUTJMaUJOS21Edz09",
            "cedula": formData.cedula.campo
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://45.236.168.15/api/v1/GetClientsDetails", requestOptions)
            .then(response => response.text())
            .then(result => {
                const data1 = JSON.parse(result)

                // console.log(data1, 'a')

                if (data1.estado === 'error') {
                    console.log('Esta cedula no pertenece', result)
                    dispatch({
                        type: 'USER_LOGIN_REQUEST',
                        payload: 'No pertenece',
                    })
                }

                const email_ = data1.datos[0].correo
                const cedula_ = data1.datos[0].correo

                const data = auth.createUserWithEmailAndPassword(email_, formData.password.campo)
                    .then((userCredential) => {
                        // Signed in
                        var user = userCredential.user;
                        console.log('Hola 223', user)

                        //userCredential.sendEmailVerification()


                        db.collection('users').doc(formData.cedula.campo).set({
                            uid: formData.cedula.campo,
                            email: formData.name,
                        }).then(() => {
                            //Se realizo todo con exito

                            console.log('')
                        }).catch((error) => {
                            //return res.status(200).json("No se puedo crear los logs de licencia", error)
                        });


                        const user1 = firebase.auth().currentUser;
                        user1.updateProfile({
                            displayName: formData.cedula.campo,
                        }).then(() => {



                            //console.log('Hola entraste')



                            dispatch({
                                type: 'USER_LOGIN_SUCCESS',
                                payload: data1.datos[0]
                            })


                        }).catch((error) => {
                            // An error occurred
                            // ...
                        });
                        // ...
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // ..
                    });





            })
            .catch(error => console.log('error', error));

    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const userDetails = (formData) => async (dispatch, getState) => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "token": "VzhoNEE2ZWlEdFFDUTJMaUJOS21Edz09",
            "cedula": formData.dni
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://45.236.168.15/api/v1/GetClientsDetails", requestOptions)
            .then(response => response.text())
            .then(result => {
                const result_json = JSON.parse(result)
                const data = result_json.datos[0]
                console.log('Test', result)
                dispatch({
                    type: 'USER_DETAILS_SUCCESS',
                    payload: data
                })

            })
            .catch(error => console.log('error', error));




    } catch (error) {
        dispatch({
            type: 'USER_DETAILS_FAIL',
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const logout = () => async (dispatch) => {
    dispatch({ type: 'USER_LOGOUT' })
    dispatch({ type: 'USER_UPDATE_RESET' })
    await auth.signOut()
}