import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://shop-milano.vercel.app/Home">
        shopMilano
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
function SignUp() {
const [nome, setNome] = React.useState(null)
const [cognome, setCognome] = React.useState(null)
const [email, setEmail] = React.useState(null)
const [password, setPassword] = React.useState(null)

const takeNome = (event) => {
    setNome(event.target.value)
}

const takeCognome = (event) => {
    setCognome(event.target.value)
}

const takeEmail = (event) => {
    setEmail(event.target.value)
}
const takePassword = (event) => {
    setPassword(event.target.value)
}
const navigate = useNavigate();
    const registrazione = async () => {
        //const token = localStorage.getItem("token")
        if( nome && cognome && email && password){
        try {

            const response = await fetch("http://localhost:3000/registrazione", {
                 method: 'POST',
                 headers: {
                     "Content-Type": "application/json",
                     
                 },
                 body: JSON.stringify({ nome, cognome, email, password })
                
             })
             const data = await response.json()
             if(data){
                navigate('/Home/collection')
                setNome('')
                setCognome('')
                setEmail('')
                setPassword('')
                console.log(response)
             }    
         } catch (err) {
    } 
    <Alert severity='success'>Registrazione avvenuta con successo !</Alert>    
    } else {
        <Alert severity="error">Erroe!</Alert>
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
            Registrati !
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nome"
                  autoFocus
                  onChange={(event) => takeNome(event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Cognome"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(event) => takeCognome(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email "
                  name="email"
                  autoComplete="email"
                  onChange={(event) => takeEmail(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(event) => takePassword(event)}
                />

              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Desidero ricevere ispirazione, promozioni di marketing e aggiornamenti via e-mail."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={registrazione}
            >
              Registrati 
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Hai già un account ? Login !
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
export default SignUp