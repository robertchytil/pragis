import { BottomNavigation, BottomNavigationAction, Box, Link } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
  root: {
    paddingTop: 20,
    '& ul': {
      margin: 0,
      padding: 0,
      ' & li': {
        listStyleType: 'none',

        fontSize: 14,
        margin: 3,
      },
    },
  },
  footerLink: {
    color: '#2d3c37',
  },
});

const OkdazyNaVerejneRejstriky1 = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <h3>Odkazy na veřejné rejstříky</h3>
      <ul>
        <li>
          <Link href="#" className={classes.footerLink}>
            Justice
          </Link>
        </li>
        <li>
          <Link href="#" className={classes.footerLink}>
            Nespolehlivy platce DPH
          </Link>
        </li>
        <li>
          <Link href="#" className={classes.footerLink}>
            ARES
          </Link>
        </li>
        <li>
          <Link href="#" className={classes.footerLink}>
            Insolvenční rejstřík
          </Link>
        </li>
      </ul>
    </Box>
  );
};

const OkdazyNaVerejneRejstriky2 = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <h3>&nbsp;</h3>
      <ul>
        <li>
          <Link href="#" className={classes.footerLink}>
            Nespolehlivy platce DPH
          </Link>
        </li>
        <li>
          <Link href="#" className={classes.footerLink}>
            ARES
          </Link>
        </li>
        <li>
          <Link href="#" className={classes.footerLink}>
            Rejstřík trestů právnických osob
          </Link>
        </li>
        <li>
          <Link href="#" className={classes.footerLink}>
            Rejstřík osob se zákazem plnění veřejných zakázek
          </Link>
        </li>
      </ul>
    </Box>
  );
};

const OdkazyNaInterniSystemy = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <h3>Odkazy na interní systémy</h3>
      <ul>
        <li>
          <Link href="#" className={classes.footerLink}>
            Kvalifikace
          </Link>
        </li>
        <li>
          <Link href="#" className={classes.footerLink}>
            [seznam odkazu v nastaveni aplikace ]
          </Link>
        </li>
      </ul>
    </Box>
  );
};

const Footer = () => {
  return (
    <BottomNavigation>
      <BottomNavigationAction component={OkdazyNaVerejneRejstriky1} />
      <BottomNavigationAction component={OkdazyNaVerejneRejstriky2} />
      <BottomNavigationAction component={OdkazyNaInterniSystemy} />
    </BottomNavigation>
  );
};

export default Footer;
