import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Radio, RadioGroup, FormControlLabel, Grid, Button, Box } from '@material-ui/core';
import { signup } from '../redux/actions/authActions';
import logo from '../assets/img/logo_violeta.png'
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Alert, AlertTitle  } from '@material-ui/lab';
export const EmailSelectionVerification = ({ userEmails, cedula, password }) => {

    const dispatch = useDispatch()
    const [emailIndex, setValue] = useState();

    const clientEmails = useSelector(state => state.clientEmails)
    const { loading: loadingCreate, success: successCreate, emails, error } = clientEmails

    const userSignup = useSelector(state => state.userSignup)
    const { error: errorCreate } = userSignup


    //useEffect

    const submitHandler = () => {
        const email = emails[emailIndex].correo
        
        dispatch(signup({
            'cedula': cedula,
            'password': password,
            'email': email,
            'email_index': emailIndex
        }))

    }

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value)
    };

    const hideemail = (user_email) => {
        var avg, splitted, part1, part2;
        splitted = user_email.split("@");
        part1 = splitted[0];
        avg = part1.length / 2;
        part1 = part1.substring(0, (part1.length - avg));
        part2 = splitted[1];
        return part1 + "***@" + part2;
    }

    return (
        <Box pt={5}>
            <Grid item xs={4} style={{ textAlign: "center" }}>
                <img width={150} src={logo} />
            </Grid>
            {errorCreate &&
                <Box py={4}>
                    <Alert severity="error">
                        {errorCreate.code == 'auth/email-already-in-use' && 'La dirección de correo electrónico ya está en uso por otra cuenta.'}
                        {errorCreate.code == 'auth/invalid-email' && 'La dirección de correo electrónico no es valida, contacte con soporte Telf.: 097 937 0118.'}
                    </Alert>
                </Box>}
            <Box pt={2}>
                <Typography>Seleccione uno de los correos electronicos que tenga acceso para enviar su activacion de cuenta.</Typography>
            </Box>
            <Box py={4}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Correo electrónico</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={emailIndex} onChange={handleChange}>
                        {emails && emails.map((item, index) => (
                            <FormControlLabel key={index} value={`${index}`} control={<Radio />} label={hideemail(item.correo)} />
                        ))}
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box py={2}>
                <Typography variant="caption" display="block" color="initial">Hemos ocultado su correo electronico con * (ateristicos) para proteger sus datos.</Typography>
                <Typography variant="caption" display="block" color="initial">Si no tienes acceso a los correos mostrados, contacte con soporte Telf.: 097 937 0118</Typography>
            </Box>
            <Box display="flex" flexDirection="row-reverse">
                <Button></Button>
                <Button color="primary" disabled={!emailIndex} onClick={() => submitHandler()} style={{ textTransform: 'capitalize' }} variant="contained">Enviar codigo</Button>
            </Box>
        </Box>
    )
}