import { Container, Typography, Box, CardContent, Card } from '@mui/material'
import React from 'react'
import logo from '../assets/img/logo_violeta.png'
export const ConfirmarContratoPage = ({ items }) => {
    return (
        <Container maxWidth='sm'>
            <Box py={5}>
                <Card variant='outlined' >
                    <CardContent>
                        <Box py={2}>
                            <img src={logo} width={100} />
                        </Box>
                        <Box>
                            <Typography variant='h6'>¡Te damos la bienvenida a Yiga5!</Typography>
                        </Box>
                        <Box py={2}
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    )
}