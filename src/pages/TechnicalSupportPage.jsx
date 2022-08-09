
import React, { useEffect, useState } from 'react'

import { Container, Typography, Box, TextField, Grid, Card, CardHeader, CardContent, Button, Paper } from '@material-ui/core';
import auto_soport from '../assets/icons/auto_soport.png'
import soporte_tecnico from '../assets/icons/soporte_tecnico.png'
import traspaso_dominio from '../assets/icons/traspaso_dominio.png'
import visistas_tecnicas from '../assets/icons/visistas_tecnicas.png'
import cambio_plan from '../assets/icons/cambio_plan.png'
import cambio_contraseña from '../assets/icons/cambio_contraseña.png'
import devices_connected from '../assets/icons/devices_connected.png'
import { Link as RouterLink } from 'react-router-dom';
import connected_devices from '../assets/icons/connected_devices.png'
import case_reviews from '../assets/icons/case_reviews.png'

export const TechnicalSupportPage = () => {



    return (
        <Container>
            <Box p={5}>
                <Box pb={5}>
                    <Typography variant="h2" component="h1"><strong>Soporte Técnico</strong> </Typography>
                    <Typography variant="h6" gutterBottom>Ingrese su requerimiento y le atendemos de inmediato.</Typography>
                </Box>



                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <Card style={{ textDecoration: 'none' }} component={RouterLink} to="/dashboard/soporte-tecnico/autosoporte/">
                            <CardContent >
                                <Box display="flex" justifyContent="center">
                                    <Box>
                                        <img src={auto_soport} width={100}></img>
                                    </Box>
                                </Box>
                                <Box display="flex" justifyContent="center">
                                    <Box>
                                        <Typography variant="h5">AutoSoporte</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                            <CardHeader>
                            </CardHeader>
                        </Card>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card >
                            <CardContent>
                                <Box display="flex" justifyContent="center">
                                    <Box>
                                        <img src={visistas_tecnicas} width={100}></img>
                                    </Box>
                                </Box>
                                <Box display="flex" justifyContent="center">
                                    <Box>
                                        <Typography variant="h5">Visitas Tecnicas</Typography>
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
                                        <img src={cambio_contraseña} width={100}></img>
                                    </Box>
                                </Box>
                                <Box display="flex" justifyContent="center">
                                    <Box>
                                        <Typography variant="h5">Cambio de Clave Wifi</Typography>
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
                                        <img src={devices_connected} width={100}></img>
                                    </Box>
                                </Box>
                                <Box display="flex" justifyContent="center">
                                    <Box>
                                        <Typography variant="h5">Dipositivos Conectados</Typography>
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
                                        <img src={connected_devices} width={100}></img>
                                    </Box>
                                </Box>
                                <Box display="flex" justifyContent="center">
                                    <Box>
                                        <Typography variant="h5">Cambio del Nombre de Red</Typography>
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
                                        <img src={case_reviews} width={100}></img>
                                    </Box>
                                </Box>
                                <Box display="flex" justifyContent="center">
                                    <Box>
                                        <Typography variant="h5">Revision de Casos</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                            <CardHeader>
                            </CardHeader>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    )
}