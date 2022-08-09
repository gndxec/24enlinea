
import React, { useEffect, useState } from 'react'
import RoomIcon from '@material-ui/icons/Room';
import { Container, Typography, Box, Grid, Card, CardHeader, CardContent, Button, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Link as RouterLink } from 'react-router-dom';
export const AutoSupport = () => {
   
    return (
        <Container maxWidth="lg">
            <Box p={1}>
            </Box>
            <Typography variant="h2" component="h1"><strong>Auto Soporte</strong> </Typography>
            <Typography>Se podrian detectar errores que requieren una visita tecnica, en caso de ser necesaria seleccione un Numero
                al cualnos podremos comunicar.
            </Typography>

            <Box py={4}>
                <FormControl component="fieldset">
                    {/* <FormLabel component="legend">Gender</FormLabel> */}
                    <RadioGroup aria-label="gender" name="gender1" >
                        <FormControlLabel value="042475990" control={<Radio />} label="042475990" />
                        <FormControlLabel value="0981822843" control={<Radio />} label="0981822843" />
                        <FormControlLabel value="0981254630" control={<Radio />} label="0981254630" />

                    </RadioGroup>
                </FormControl>
            </Box>
            <Box display="flex">
                <Box pr={3}>
                    <Button variant='contained' component={RouterLink}  to="/dashboard/soporte-tecnico/">Atras</Button>
                </Box>
                <Button variant='contained' color="primary">Iniciar auto soporte</Button>
            </Box>
        </Container>
    )
}