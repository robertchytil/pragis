import { Paper } from '@mui/material';
import Link from '@mui/material/Link'; //"@material-ui/core/Link";
import Typography from '@mui/material/Typography'; //"@material-ui/core/Typography";
import { makeStyles } from '@mui/styles'; //"@material-ui/core/styles";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  paper: {
    padding: 20,
    minWidth: 200,
    textAlign: 'center',
    display: 'inline-block',
  },
  link: {
    fontSize: 13,
  },
});

interface Props {
  title: string;
  subtitle: string;
  count: number;
}

const Tile = ({ title, subtitle, count }: Props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      {/* <Title>Smlouvy za mesic rijen</Title> */}
      <Typography component="p" variant="h4">
        {count}
      </Typography>
      <Typography color="textSecondary">{title}</Typography>
      <div>
        <Link className={classes.link} color="primary" href="javascript:;">
          {subtitle}
        </Link>
      </div>
    </Paper>
  );
};

export default Tile;
