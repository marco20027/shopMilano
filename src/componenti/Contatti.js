import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="https://shop-milano.vercel.app/Home">
          shopMilano
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

 function Contatti(){
  const defaultProps = {
    center: {
      lat: 45.274068,
      lng: 9.093420
    },
    zoom: 11
  };

  return (
    <>
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <CssBaseline />
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        Contatti
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {'Email : support@shopmilano.com'}<br></br><br></br>
        {'Telefono : +39 3469652261'}
      </Typography><br></br>
      <Typography variant="h3" component="h4" gutterBottom>
        Dove siamo ?
      </Typography>
      <Typography variant="h6" component="h3" gutterBottom>
        {'Venici a trovare !'}<br></br><br></br>
      </Typography>
      <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Via%20lessona%209%20milano%20Milan+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </Container>

    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          shopMilano
        </Typography>
        <Copyright />
      </Container>
    </Box>
  </Box>
  </>

  );
}
export default Contatti