import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import SignInSide from './login'
import sport from './sport.jpg'
function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="http://localhost:3000/">
                Shopping Milano
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
function Home() {
    return (
        <><Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 0.7 }}>
                        Shopping Milano
                    </Typography>
                    <nav>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Collaborazioni
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Contatti
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Supporto
                        </Link>
                    </nav>
                    <Button href='/Home/login' variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                        Login
                    </Button>
                    <Button href='#' variant='contained' sx={{ my: 1, mx: 1.5 }}>Registrati</Button>
                </Toolbar>
            </AppBar>
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>
                    Shopping Milano
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom color='#007FFF' font-size=' 1.5rem;'>
                    {'Trovi tutto ciò che vuoi a basso. '}
                    {'Calcio, Basket, Tennis, nuoto, ciclismo lo trovi qui da noi'}
                </Typography>
                <Typography variant="body1">Tutto ciò che vuoi, arriva a casa.
                    Solo a Milano</Typography>
                <img src={sport} width='100%' height='70%' />
                <Typography variant="h3" component="h2" gutterBottom>
                    Passa nella nostra sezione acquisti !
                </Typography><br></br>
                <Button variant="contained" size="large">
                    Vai alla nostra sezione acquisti
                </Button>
            </Container>

            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) => theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        Shopping Milano
                    </Typography>
                    <Copyright />
                </Container>
            </Box>
        </Box>
        </>
    )
}
export default Home
