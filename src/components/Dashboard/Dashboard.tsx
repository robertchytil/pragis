import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Paper } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LogoPragis from '../../assets/pragis_logo.svg';
import { mainListItems, secondaryListItems } from '../ListItems';
import Footer from './Footer';
import Navbar from './Navbar';

const drawerWidth = 340;

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: '#00875A',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '11px',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    // transition: theme.transitions.create('width', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
  },
  appBarSpacer: {
    minHeight: 65,
    minWidth: 600,
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    // transition: theme.transitions.create('width', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
    width: 10, //theme.spacing(7),
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing(9),
    // },
  },
  content: {
    // content which is class of main needs to be flex and column direction
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    padding: 30,
    backgroundColor: '#00000008',
    minHeight: '70vh',
  },
  paper: {
    padding: 5,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
});

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(true);
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar open={open} setDrawerOpen={handleDrawerOpen} />
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <img src={LogoPragis} alt="logo pragis" width={150} />
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={false} className={classes.container} sx={{ p: 0, m: 0 }}  style={{paddingLeft: open?350:30}}>
          <Grid container={true} spacing={2}>
            <Grid item={true} xs={12}>
              <Paper className={classes.paper}>
                <Outlet />
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </main>
    </div>
  );
}
