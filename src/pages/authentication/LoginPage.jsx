import React, { useState, useRef, useEffect } from 'react';
import { Typography, Grid, Container, Box, TextField, Button } from '@material-ui/core';
import InputValidation from '../../components/utils/InputValidation';
import logo from '../../assets/img/logo_violeta.png'
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Alert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/userActions'
import moment from 'moment';
import { auth, db, firebase } from '../../firebase'
export const LoginPage = () => {
    const [email, setEmail] = useState({ campo: '0963874730', valido: true })
    const [password, setPassword] = useState({ campo: '', valido: null })
    const userLogin = useSelector(state => state.userLogin)
    const { error: errorCreate } = userLogin
    const dispatch = useDispatch()
    useEffect(() => {
        test()
    }, [])
    const submitHandler = (e) => {
        e.preventDefault()
        try {

            if (email.valido === true && password.valido) {
                dispatch(login({
                    'dni': email.campo,
                    'password': password.campo,
                }))
            }

        } catch (error) {
        }
    }
    const test = () => {
        var current = new Date();
        //De la fecha actual le sumamos 2 dia y 
        //le enviamos la notificacion 2 dias antes de su fecha corte
        var startfulldate = moment(new Date(current.getTime() + 172800000)).format("YYYY-MM-DD")
        let ref = db.collection("users").where('fecha_corte', '==', startfulldate).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                
                const data = doc.data()
                console.log('cedula: ', data.displayName,  ' token: ', data.token)
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    }
    const updateUser = (e) => {
        const user = auth.currentUser;

        user.updateProfile({
            displayName: "0920552551",
            //photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
            // Update successful
            console.log('actualizado')
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    return (
        <Container >
            <Grid
                container
                component="main"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={12} sm={8} md={5} elevation={6}>
                    <Box pt={5}>
                        <Grid item xs={4} style={{ textAlign: "center" }}>
                            <img width={150} src={logo} />
                        </Grid>
                        {/* <Typography color="textSecondary" variant="caption" display="block" >Sebastian Mite</Typography> */}
                        {errorCreate &&
                            <Box py={2}>
                                <Alert severity="error">
                                    {errorCreate.code == 'auth/wrong-password' && 'La contraseña no es válida.'}
                                    {errorCreate.code == 'auth/too-many-requests' && 'El acceso a esta cuenta se ha deshabilitado temporalmente... configurando su contraseña o puede volver a intentarlo más tarde.'}
                                    {errorCreate.code == 'auth/user-not-found' && 'No existe registro de usuario correspondiente a este identificador.'}
                                    {errorCreate.code == 'not-found-client' && errorCreate.message}
                                </Alert>
                            </Box>
                        }
                        <form onSubmit={submitHandler}>
                            <Box pt={2} pb={1}>
                                <InputValidation
                                    estado={email}
                                    cambiarEstado={setEmail}
                                    type="number"
                                    label="Numero de cedula"
                                    name="email"
                                //helperText="Sólo correos asociados a la institución '@ups.edu.ec'."
                                //patterns={/^[a-zA-Z0-9_.+-]+@+(est\.)?(ups.edu.ec)/}
                                //disabled={loading}
                                />
                            </Box>
                            <Box pb={1}>
                                <InputValidation
                                    estado={password}
                                    cambiarEstado={setPassword}
                                    type="password"
                                    label="Contraseña"
                                    name="password"
                                    helperText="Minimo 8 caracteres"
                                    patterns={/^.{8,30}$/}
                                //disabled={loading}
                                />
                            </Box>
                            <Box pb={3}>
                                <Button variant="contained" fullWidth disableElevation disabled={!email.campo || !password.campo} type="submit" color="primary">
                                    Iniciar sesión
                                </Button>
                            </Box>
                        </form>
                        <button onClick={updateUser}>Hola</button>
                        <Grid container>
                            <Grid item xs>
                                <Link component={RouterLink} variant="body2" to='/accounts/password/reset/'>
                                    ¿Has olvidado tu contraseña?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link component={RouterLink} variant="body2" to={'/accounts/signup/'}>
                                    {"¿No tienes una cuenta? "}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}