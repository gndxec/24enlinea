
import { auth, db, storage, firebase } from '../../firebase';
import { Redirect } from 'react-router'


export const clientEmails = (cedula) => async (dispatch) => {
    try {
        //Consultamos la API que nos trae los datos del cliente mediante
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "token": "VzhoNEE2ZWlEdFFDUTJMaUJOS21Edz09",
            "cedula": cedula
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

                const dataJSON = JSON.parse(result)
                if (dataJSON.estado === 'error') {

                } else {
                    //Obtenemos los correos de ese cliente
                    const contracts = dataJSON.datos
                    const data = [...contracts.map(doc => {
                        return {
                            'correo': doc.correo,
                        }
                    })]
                    dispatch({
                        type: 'EMAIL_VERIFICATION_SUCCESS',
                        payload: data,
                    })
                }
            })
            .catch(error => console.log('error', error));
    } catch (error) {
        dispatch({
            type: 'EMAIL_VERIFICATION_FAIL',
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const signup = (formData) => async (dispatch) => {
    try {
        //console.log(formData, 'data')
        const data = auth.createUserWithEmailAndPassword(formData.email, formData.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log('Enviar email', userCredential)
                //Desactivado hasta que Jan lo active
                user.sendEmailVerification()


                db.collection('clients').doc(formData.cedula).set({
                    uid: formData.cedula,
                    email_index: formData.email_index,
                }).then(() => {
                    //Se realizo todo con exito
                    console.log('Se realizo consulta')
                    const user1 = firebase.auth().currentUser;
                    user1.updateProfile({
                        displayName: formData.cedula,
                    }).then(() => {


                        const message = {
                            code: 'auth/success-email',
                            message: 'Su cuenta ha sido creada exitosamente, entra en tu correo para verificar tu cuenta.'
                        }
                        

                        dispatch({
                            type: 'USER_SIGNUP_SUCCESS',
                            payload: message
                        })
                   
                        window.location.href = 'http://localhost:3000/accounts/login/'
                    }).catch((error) => {
                        // An error occurred
                        console.log('Error de actualizar datos', error)
                        // ...
                    });

                }).catch((error) => {
                    console.log('Error de base de datos', error)
                    //return res.status(200).json("No se puedo crear los logs de licencia", error)
                });


                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(error)
                dispatch({
                    type: 'USER_SIGNUP_FAIL',
                    payload: error
                })
                //console.log('Error :D')
                // ..
            });

    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}