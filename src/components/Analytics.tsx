import { Grid } from '@mui/material';
import Tile from './Tile';

const Analytics = () => {
  return (
    <>
      <Grid container={true} spacing={3} justifyContent="center">
        <Grid item={true}>
          <h2>Analytics</h2>
        </Grid>
      </Grid>
      <Grid container={true} spacing={2}>
        <Grid item={true} lg={2}>
          <Tile title="Smlouvy" subtitle="za mesic rijen" count={30} />
        </Grid>
        <Grid item={true} lg={2}>
          <Tile title="Objednavky" subtitle="kvartal 2/3" count={30} />
        </Grid>
        <Grid item={true} lg={2}>
          <Tile title="Smlouvy" subtitle="za mesic rijen" count={30} />
        </Grid>
        <Grid item={true} lg={2}>
          <Tile title="Objednavky" subtitle="kvartal 2/3" count={30} />
        </Grid>
        <Grid item={true} lg={2}>
          <Tile title="Smlouvy" subtitle="za mesic rijen" count={30} />
        </Grid>
        <Grid item={true} lg={2}>
          <Tile title="Objednavky" subtitle="kvartal 2/3" count={30} />
        </Grid>
      </Grid>
    </>
  );
};

export default Analytics;
