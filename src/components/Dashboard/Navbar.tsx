import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Avatar, Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, IconButton, Popover, Stack, TextField, Toolbar, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';
import { FC, useState } from 'react';

const drawerWidth = 340;
const useStyles = makeStyles({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: '#00875A',
  },
  appBar: {
    zIndex: 1000, //theme.zIndex.drawer + 1,
    // transition: theme.transitions.create(['width', 'margin'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    // transition: theme.transitions.create(['width', 'margin'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
});

interface Props {
  open: boolean;
  setDrawerOpen: () => void;
}

const Navbar: FC<Props> = ({ open, setDrawerOpen }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClickPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const id = openPopover ? 'simple-popover' : undefined;
  const classes = useStyles();

  return (
    <AppBar
      position="absolute"
      style={
        open
          ? {
              marginLeft: drawerWidth,
              width: `calc(100% - ${drawerWidth}px)`,
            }
          : { zIndex: 1000 }
      }
    >
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={setDrawerOpen} style={!open ? { marginRight: 36 } : { display: 'none' }}>
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap={true} className={classes.title}>
          Dashboard
        </Typography>
        <form>
          <TextField
            sx={{ minWidth: 500 }}
            id="search-bar"
            className="text"
            onInput={(e?: any) => {
              //setSearchQuery(e.target.value);
            }}
            label="Hledat"
            variant="outlined"
            size="small"
            style={{ backgroundColor: 'white' }}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ fill: 'white' }} />
          </IconButton>
        </form>
        <Stack direction="row" spacing={3}>
          <IconButton onClick={handleClickPopover}>
            <Avatar alt="Robert Chytil" src="" />
          </IconButton>
          <Popover
            id={id}
            open={openPopover}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Grid container={true} justifyContent="center" direction="column" alignItems="center" sx={{ p: 5, m: 0 }}>
              <Grid item={true}>
                <Avatar alt="Robert Chytil" src="" />
              </Grid>
              <Grid item={true}>
                <Typography sx={{ p: 2 }}>
                  <Box>
                    <b>Uzivatel:</b> Robert Chytil
                  </Box>
                  <Box>
                    <b>Role:</b> Admin
                  </Box>
                  <Box>
                    <b>Avatar: </b>
                    <Button sx={{ m: 2 }} size="small" variant="contained">
                      Vybrat...
                    </Button>
                  </Box>
                </Typography>
              </Grid>
              <Grid item={true}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked={true} />} label="Push notifikace" />
                  <FormControlLabel control={<Checkbox />} label="Email notifikace" />
                </FormGroup>
              </Grid>
            </Grid>
          </Popover>
          <Link
            href="#"
            style={{ color: 'white', textDecoration: 'underline' }}
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Odhlasit
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
