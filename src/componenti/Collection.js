import React from "react"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar } from "@mui/material";
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Checkout from '../pagamento/checkout';



function Collection() {
  const theme = createTheme();
  const magliaAcMilan = {
    prodotto: 'maglia Casa ACMILAN',
    Prezzo: '90€',
  }
  const magliaFcInter = {
    prodotto: 'maglia Casa FcInter',
    Prezzo: '90€',
  }
  const magliaJuve = {
    prodotto: 'maglia Casa JUVENTUS',
    Prezzo: '90€',
  }
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0)
  const [count3, setCount3] = React.useState(0)

  const [invisible, setInvisible] = React.useState(false);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button color="inherit" href='http://localhost:3000/Home'>Home</Button>
        </Toolbar>
      </AppBar><br></br>

      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Shop Milano
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Tutto ciò che cerchi lo trovi qui da noi !
        </Typography>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          <Grid xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'white' }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: '56.25%',
                }}
                image='http://cdn.shopify.com/s/files/1/0611/8496/6894/products/765821-A18_01_16d11171-885e-43fa-b37f-c18bcc3f4027.jpg?v=1658336871'
                alt="random" />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Maglia Ac Milan
                </Typography>
                <Typography>
                  <p> AC Milan : {magliaAcMilan.prodotto}</p><br></br>
                  <p>Prezzo : {magliaAcMilan.Prezzo}</p><br></br>
                  <Box
                    sx={{
                      color: 'action.active',
                      display: 'flex',
                      flexDirection: 'column',
                      '& > *': {
                        marginBottom: 2,
                      },
                      '& .MuiBadge-root': {
                        marginRight: 4,
                      },
                    }}
                  >
                    <div>
                      <Badge color="secondary" badgeContent={count1}>
                        <ShoppingCartIcon />
                      </Badge>
                      <ButtonGroup>
                        <Button
                          aria-label="reduce"
                          onClick={() => {
                            setCount1(Math.max(count1 - 1, 0));
                          }}
                        >
                          <RemoveIcon fontSize="small" />
                        </Button>
                        <Button
                          aria-label="increase"
                          onClick={() => {
                            setCount1(count1 + 1);
                          }}
                        >
                          <AddIcon fontSize="small" />
                        </Button>
                      </ButtonGroup>
                    </div>
                  </Box>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" >Dettaglio</Button> 
                <Button size='small' variant="contained">Paga</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'white' }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: '56.25%',
                }}
                image="https://store.inter.it/dw/image/v2/BJBQ_PRD/on/demandware.static/-/Sites-inter-master-catalog/default/dw2fccf503/images/large/22N001M0502_01.jpg?sw=1400&q=80"
                alt="random" />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Maglia Fc Merde
                </Typography>
                <Typography>
                  <p>Fc Merde : {magliaFcInter.prodotto}</p><br></br>
                  <p>Prezzo : {magliaFcInter.Prezzo}</p><br></br>
                  <Box
                    sx={{
                      color: 'action.active',
                      display: 'flex',
                      flexDirection: 'column',
                      '& > *': {
                        marginBottom: 2,
                      },
                      '& .MuiBadge-root': {
                        marginRight: 4,
                      },
                    }}
                  >
                    <div>
                      <Badge color="secondary" badgeContent={count2}>
                        <ShoppingCartIcon />
                      </Badge>
                      <ButtonGroup>
                        <Button
                          aria-label="reduce"
                          onClick={() => {
                            setCount2(Math.max(count2 - 1, 0));
                          }}
                        >
                          <RemoveIcon fontSize="small" />
                        </Button>
                        <Button
                          aria-label="increase"
                          onClick={() => {
                            setCount2(count2 + 1);
                          }}
                        >
                          <AddIcon fontSize="small" />
                        </Button>
                      </ButtonGroup>
                    </div>
                  </Box>
                </Typography>
              </CardContent>
              <CardActions>
              <Button size="small" >Dettaglio</Button> 
                <Button size='small' variant="contained">Paga</Button>              
                </CardActions>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'white' }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: '56.25%',
                }}
                image="https://store.juventus.com/data/store/product/5/54815/product.jpg"
                alt="random" />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Fc Juventus
                </Typography>
                <Typography>
                  <p>Fc Juventus : {magliaJuve.prodotto}</p><br></br>
                  <p>Prezzo : {magliaJuve.Prezzo}</p><br></br>
                  <Box
                    sx={{
                      color: 'action.active',
                      display: 'flex',
                      flexDirection: 'column',
                      '& > *': {
                        marginBottom: 2,
                      },
                      '& .MuiBadge-root': {
                        marginRight: 4,
                      },
                    }}
                  >
                    <div>
                      <Badge color="secondary" badgeContent={count3}>
                        <ShoppingCartIcon />
                      </Badge>
                      <ButtonGroup>
                        <Button
                          aria-label="reduce"
                          onClick={() => {
                            setCount3(Math.max(count3 - 1, 0));
                          }}
                        >
                          <RemoveIcon fontSize="small" />
                        </Button>
                        <Button
                          aria-label="increase"
                          onClick={() => {
                            setCount3(count3 + 1);
                          }}
                        >
                          <AddIcon fontSize="small" />
                        </Button>
                      </ButtonGroup>
                    </div>
                  </Box>
                </Typography>
              </CardContent>
              <CardActions>
              <Button size="small" >Dettaglio</Button> 
                <Button size='small' variant="contained" href='/Home/checkout'>Paga</Button>              
                </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </ThemeProvider>

  )
}
export default Collection