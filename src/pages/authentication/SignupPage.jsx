import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/img/logo_violeta.png'
import Alert from '@mui/material/Alert';
import { CircularProgress, Typography, Container, Box, Button, Grid, Link } from '@material-ui/core';
import InputValidation from '../../components/utils/InputValidation';
import { signup } from '../../redux/actions/userActions';
import { EmailSelectionVerification } from '../../components/EmailSelectionVerification';
import { clientEmails } from '../../redux/actions/authActions';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    wrapper: {
        //margin: theme.spacing(1),
        position: 'relative',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

export const SignupPage = () => {
    const classes = useStyles();

    let history = useHistory();
    
    const [stepper, setStepper] = useState(1)

    const [cedula, setCedula] = useState({ campo: '0963874730', valido: true })

    const [message, setMessage] = useState('')
    const [password, setPassword] = useState({ campo: '', valido: null })
    const [confirmPassword, setConfirmPassword] = useState({ campo: '', valido: null })
    const [userEmails, setUserEmails] = useState([])

    const userSignup = useSelector(state => state.userSignup)
    const { signup } = userSignup

    const dispatch = useDispatch()

    useEffect(() =>{
       

    },[])

    const apiEmails = (cedula) => {
        //Obtenemos los correos que tiene el cliente
        dispatch(clientEmails(cedula))
        setStepper(2)

    }

    const validationPassword = () => {
        if (password.campo.length > 0) {
            if (password.campo !== confirmPassword.campo) {
                setConfirmPassword((prevState) => {
                    return { ...prevState, valido: false }
                });
            } else {
                setConfirmPassword((prevState) => {
                    return { ...prevState, valido: true }
                });
            }
        }
    }
    return (
        <Container>
            <Grid
                container
                component="main"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={12} sm={8} md={5} elevation={6}>
                    {stepper == 1 ?
                        < Box py={5}>
                            <Grid item xs={4} style={{ textAlign: "center" }}>
                                <img width={150} src={logo} />
                            </Grid>
                            <Box py={1}>
                                <Typography >Activar cuenta</Typography>
                                {message && <Alert severity="warning">{message}</Alert>}

                            </Box>
                            {/*  <form onSubmit={submitHandler} className={classes.form}>
                              {error && <AlertMessage variant='error'>{error}</AlertMessage>} */}
                            <Box>
                                <InputValidation
                                    estado={cedula}
                                    cambiarEstado={setCedula}
                                    type="number"
                                    label="Numero de cedula"
                                    name="email"
                                    helperText="Sólo correos asociados a la institución '@ups.edu.ec'"
                                //patterns={/^[a-zA-Z0-9_.+-]+@+(est\.)?(ups.edu.ec)/}
                                />
                            </Box>
                            <Box pb={1}>
                                <InputValidation
                                    estado={password}
                                    cambiarEstado={setPassword}
                                    type="password"
                                    label="Contraseña"
                                    name="password"
                                    helperText="Minimo 8 caracteres."
                                    patterns={/^.{8,30}$/}
                                />
                            </Box>
                            <Box pb={1}>
                                <InputValidation
                                    estado={confirmPassword}
                                    cambiarEstado={setConfirmPassword}
                                    type="password"
                                    label="Confirmar contraseña"
                                    name="confirmPassword"
                                    helperText="Las contraseñas no coinciden."
                                    funcion={validationPassword}
                                />
                            </Box>
                            {/* <Typography variant="caption" gutterBottom>
                                    Al hacer clic en Crear cuenta, indicas que has leído y aceptas los Términos del servicio y el Aviso de privacidad.
                                </Typography> */}
                            <Box display="flex" flexDirection="row-reverse">
                                <Button
                                    variant="contained"
                                    style={{ textTransform: 'capitalize' }}
                                    color="primary"
                                    onClick={() => apiEmails(cedula.campo)}
                                >Siguiente</Button>
                            </Box>
                            <Link component={RouterLink} to={'/accounts/login/'}>¿Ya tienes una cuenta?</Link>
                            {/* </form> */}
                        </Box>
                        :
                        <EmailSelectionVerification cedula={cedula.campo} userEmails={userEmails} password={password.campo} />
                    }
                </Grid>
            </Grid>
        </Container >
    )
}

