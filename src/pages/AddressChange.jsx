
import React, { useEffect, useState } from 'react'
import RoomIcon from '@material-ui/icons/Room';
import { Container, Typography, Box, Grid, Card, CardHeader, CardContent, Button, Paper, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';


import soporte_tecnico from '../assets/icons/soporte_tecnico.png'
import traspaso_dominio from '../assets/icons/traspaso_dominio.png'
import cambio_domicilio from '../assets/icons/soporte_tecnico.png'
import cambio_plan from '../assets/icons/cambio_plan.png'
import migracion from '../assets/icons/migracion.png'
import img1 from '../assets/img/banners_enero1.jpg'
import img2 from '../assets/img/banners_enero2.jpg'



export const AddressChange = () => {

    //const classes = useStyles();
    const dispatch = useDispatch()
    useEffect(() => {
     
    }, [dispatch])

    return (
        <Container maxWidth="lg">
            <Box p={5}>

        
            <Typography variant="h2" component="h1"><strong>Cambio de Domicilio</strong> </Typography>
            <Typography>Solicitud de cambio de nombres de titular del servicio contratado.</Typography>
            <Card>
                <CardContent >
                    <Box pb={2}>
                        <TextField label="Nombre" variant="filled" fullWidth />
                    </Box>
                    <Box pb={2}>
                        <TextField label="Numero de identificacion" variant="filled" fullWidth />
                    </Box>
                    <Box pb={2}>
                        <TextField label="Correo electronico" variant="filled" fullWidth />
                    </Box>
                    <Box pb={2}>
                        <TextField label="Numero celular" variant="filled" fullWidth />
                    </Box>
                    <TextField label="Direccion" variant="filled" fullWidth />

                    <Box display="flex" flexDirection="row-reverse" pt={2}>
                      
                            <Button color="primary" variant="contained">Traspaso de Dominio</Button>  
                      
        
                    </Box>
                   
                </CardContent>
            </Card>
            </Box>
        </Container>
    )
}