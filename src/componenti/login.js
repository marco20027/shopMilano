import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import  {useNavigate}  from 'react-router-dom';
import Container from '@mui/material/Container';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/Home">
       Shopping Milano
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

 function SignInSide() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const takeEmail = (event) => {
    setEmail(event.target.value)
  }
  const takePassword = (event) => {
    setPassword(event.target.value)
    console.log(password)
  }
  const navigate = useNavigate();
    const login = async () => {
        if(email == null && password == null){
            alert('inserire email e password')
            return 
        }else {
            const response = await fetch("http://localhost:3001/login", {
                 method: 'POST',
                 headers: {
                     "Content-Type": "application/json"
                 },
                 body: JSON.stringify({ email, password })
             })
             console.log(response)
             const data = await response.json();
             console.log(data)
             if (data.token) {
                 localStorage.setItem('token',data.token)
                 console.log(data.token)
                 navigate('/Home/login=success/Abbonamenti')
             } else {
                 window.alert("Email o password errata");
             }
            }
        
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => takeEmail(event)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => takePassword(event)}

            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Ricordami"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={login}
            >
             Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                 Password dimenticata?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/registrazione" variant="body2">
                  {"Non hai un account? Registrati"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
export default SignInSide