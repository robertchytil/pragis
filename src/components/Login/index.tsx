import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Login = () => {
  return (
    <Grid container={true} spacing={2} alignItems="center" direction="column" justifyContent="center" style={{ minHeight: '100vh' }}>
      <Grid item={true} xs={0}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom={true} align="center" variant="h4" component="div">
              Login
            </Typography>
            <TextField id="login" fullWidth={true} label="Login" variant="outlined" size="medium" margin="dense" />
            <TextField fullWidth={true} id="pwd" label="Password" autoComplete="current-password" variant="outlined" size="medium" margin="dense" />
            <CardActions>
              <Button fullWidth={true} variant="contained">
                Odeslat
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
