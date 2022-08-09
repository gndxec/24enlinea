
import React, { useEffect, useState } from 'react'
import RoomIcon from '@material-ui/icons/Room';
import { Container, Typography, Box, Grid, Card, CardHeader, CardContent, Button, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import case_reviews from '../assets/icons/case_reviews.png'
import soporte_tecnico from '../assets/icons/soporte_tecnico.png'
import traspaso_dominio from '../assets/icons/traspaso_dominio.png'
import cambio_domicilio from '../assets/icons/soporte_tecnico.png'
import cambio_plan from '../assets/icons/cambio_plan.png'
import migracion from '../assets/icons/migracion.png'
import img1 from '../assets/img/banners_enero1.jpg'
import img2 from '../assets/img/banners_enero2.jpg'
import { Link as RouterLink } from 'react-router-dom';
import actualizar_contrato from '../assets/icons/actualizar_contrato.png'

import Carousel from 'react-material-ui-carousel'
var items = [
    {
        name: "Random Name #1",
        img: img2,
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        img: img1,
        description: "Hello World!"
    }
]



export const DashboardPage = () => {


    const dispatch = useDispatch()


    useEffect(() => {
     



    }, [dispatch])

    return (
        <Container maxWidth="lg">
            <Box p={1}>
            </Box>

            <Grid container spacing={5}>
                <Grid item md={6} xs={12}>
                    <Box
                        sx={{
                            height: '250px',
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            bgcolor: '#faedff',
                            overflow: 'hidden',
                            borderRadius: '12px',
                            boxShadow: 1,
                            fontWeight: 'bold',

                        }}
                    >
                        <CardContent>
                            <Box ml={2}>
                                <Typography variant="h5" gutterBottom>Hola, Alex Dario Rodriguez Parrales</Typography>
                            </Box>

                            <Box ml={2} display="flex">
                                <Box pr={1}>
                                    <RoomIcon />
                                </Box>
                                <Typography>SUBURBIO, CALLE NICOLAS</Typography>
                             
                            </Box>
                            <Box pl={2} pt={2}>
                            <Button color="primary" variant="contained"  >Ver facturas</Button>
                            </Box>
                        
                        </CardContent>
                        <CardHeader>

                        </CardHeader>
                    </Box>

                </Grid>
                <Grid item md={6} xs={12}>
                    <Box
                        sx={{
                            // display: 'flex',
                            //  flexDirection: { xs: 'column', md: 'row' },
                            // alignItems: 'center',
                            bgcolor: 'background.paper',
                            // overflow: 'hidden',
                            borderRadius: '12px',
                            // boxShadow: 1,
                            //  fontWeight: 'bold',
                            height: '100%',
                        }}
                    >
                        <Carousel
                            indicators={false}
                           
                        >
                            {
                                items.map((item, i) => <div><img style={{ width: '100%', borderRadius: '18px'  }} src={item.img}></img> </div>)
                            }
                        </Carousel>



                    </Box>
                </Grid>
            </Grid>
            <Box py={3}>
                <Typography variant="h5"><strong>Servicios</strong> </Typography>
            </Box>

            <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                    <Card >
                        <CardContent >
                            <Box display="flex" justifyContent="center">
                                <Box>
                                    <img src={soporte_tecnico} width={100}></img>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="center">
                                <Box>
                                    <Typography variant="h5">Soporte tecnico</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                        <CardHeader>
                        </CardHeader>
                    </Card>

                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box display="flex" justifyContent="center">
                                <Box>
                                    <img src={traspaso_dominio} width={100}></img>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="center">
                                <Box>
                                    <Typography variant="h5">Traspaso de Dominio</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                        <CardHeader>
                        </CardHeader>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box display="flex" justifyContent="center">
                                <Box>
                                    <img src={cambio_plan} width={100}></img>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="center">
                                <Box>
                                    <Typography variant="h5">Cambio de Domicilio</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                        <CardHeader>
                        </CardHeader>
                    </Card>
                </Grid>

            </Grid>
            <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box display="flex" justifyContent="center">
                                <Box>
                                    <img src={migracion} width={100}></img>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="center">
                                <Box>
                                    <Typography variant="h5">Migracion de Servicio</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                        <CardHeader>
                        </CardHeader>
                    </Card>

                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box display="flex" justifyContent="center">
                                <Box>
                                    <img src={actualizar_contrato} width={100}></img>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="center">
                                <Box>
                                    <Typography variant="h5">Actualizar Contrato</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                        <CardHeader>
                        </CardHeader>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box display="flex" justifyContent="center">
                                <Box>
                                    <img src={actualizar_contrato} width={100}></img>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="center">
                                <Box>
                                    <Typography variant="h5">Actualizar Contrato</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                        <CardHeader>
                        </CardHeader>
                    </Card>
                </Grid>

            </Grid>
            {/* <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h4" gutterBottom>Hola, Sebastian Mite Torres</Typography>
                                <Box py={1} display="flex">
                                    <RoomIcon /><Typography>SUBURBIO, CALLE NICOLAS</Typography>
                                </Box>

                            </CardContent>
                            <CardHeader>

                            </CardHeader>
                        </Card>

                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Saldo Total</Typography>
                                <Box py={1}>
                                    <Typography variant="h4">$100</Typography>
                                </Box>

                                <Button variant="contained" color="primary">
                                    Pagar ahora
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid> */}

        </Container>
    )
}