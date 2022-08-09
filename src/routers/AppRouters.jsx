import React, { useEffect, useState } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import PublicRoute  from './PublicRoute';
import PrivateRoute  from './PrivateRoute';
import { auth } from '../firebase'
import { Navbar } from '../components/appbar/Navbar';
//import RestoreScroll from '../components/utils/RestoreScroll';
import CssBaseline from "@material-ui/core/CssBaseline";
import { TechnicalSupportPage } from '../pages/TechnicalSupportPage';
import { DashboardPage } from '../pages/DashboardPage';
import { LoginPage } from '../pages/authentication/LoginPage';
import { SignupPage } from '../pages/authentication/SignupPage';
import { DomainTransfer } from '../pages/DomainTransfer';
import { AddressChange } from '../pages/AddressChange';
import { AutoSupport } from '../pages/technical_support/AutoSupport';
import { userDetails } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmarContratoPage } from '../pages/ConfirmarContratoPage';
export const AppRouter = () => {
    const dispatch = useDispatch()
    const [checking, setChecking] = useState(true);
    const [isAuth, setIsAuth] = useState(false)
    let theme = createTheme({
        palette: {
            //     type: "dark",
            background: {
                default: '#fff',
                paper: '#fff',
            },
            primary: {
                main: '#672780'
            },
            secondary: {
                main: '#672780',
            },
            //   },
            // typography: {
            //     button: {
            //         textTransform: "none"
            //     }
        }
    });
    theme = responsiveFontSizes(theme);
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            //Detectamos si el usuario esta logeado
            if (user) {
              //  console.log//'Sesion iniciada', user)
              // dispatch(userDetails({ dni: user.displayName})) 
                console.log('user', user)
                //console.log('Sesion iniciada', user)
                setIsAuth(true)
            } else {
                setIsAuth(false)
            }
            setChecking(false);
        });
    }, [setIsAuth, setChecking])
    //Tenemos una ruta que obtiene como parametro un id
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                 {/* <Navbar /> */}
                <Switch>
                    <Route path="/ventas/confirmar-contrato/" component={ConfirmarContratoPage} />
                    <PublicRoute path="/accounts/login/" component={LoginPage} isAuth={isAuth} />
                    <PublicRoute path="/accounts/signup/" component={SignupPage} isAuth={isAuth} />
                    <PrivateRoute path="/dashboard/home/" component={DashboardPage} isAuth={true}/>
                    <PrivateRoute path="/dashboard/soporte-tecnico/autosoporte/" component={AutoSupport} isAuth={true}/>
                    <PrivateRoute path="/dashboard/soporte-tecnico/" component={TechnicalSupportPage} isAuth={true} />
                    <PrivateRoute path="/dashboard/traspaso-dominio/" component={DomainTransfer} isAuth={true}/>
                    <PrivateRoute path="/dashboard/cambio-de-domicilio/" component={AddressChange} isAuth={isAuth} />
                </Switch>
                {/*<RestoreScroll />*/}
            </ThemeProvider>
        </Router>
    )
}