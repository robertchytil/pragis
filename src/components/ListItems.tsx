import ApiIcon from '@mui/icons-material/Api';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeleteIcon from '@mui/icons-material/Delete';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import InventoryIcon from '@mui/icons-material/Inventory';
import LayersIcon from '@mui/icons-material/Layers';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Link } from 'react-router-dom';
export const mainListItems = (
  <div>
    <ListItem button={true}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/dashboard">
        <ListItemText primary="Dashboard" />
      </Link>
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link to="/stavebni-zakazky">
        <ListItemText primary="Stavební zakázky" />
      </Link>
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to="/smlouvy">
        <ListItemText primary="Smlouvy" />
      </Link>
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link to="/nabidky">
        <ListItemText primary="Nabídky" />
      </Link>
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <AssuredWorkloadIcon />
      </ListItemIcon>
      <Link to="/pojisteni">
        <ListItemText primary="Pojištění" />
      </Link>
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="/bankovni-zaruky">
        <ListItemText primary="Bankovní záruky" />
      </Link>
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <ApiIcon />
      </ListItemIcon>
      <Link to="/vnitropodnikove-objednavky">
        <ListItemText primary="Vnitropodnikové objednávky" />
      </Link>
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <TimelapseIcon />
      </ListItemIcon>
      <Link to="/pohledavky-v-prodleni-insolvence">
        <ListItemText primary="Pohledávky v prodlení / insolvence" />
      </Link>
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="/konsignace">
        <ListItemText primary="Konsignace" />
      </Link>
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <ImportExportIcon />
      </ListItemIcon>
      <Link to="/exporty-csu-mts">
        <ListItemText primary="Export ČSU a MTS" />
      </Link>
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <InventoryIcon />
      </ListItemIcon>
      <Link to="/evidence-smluvnich-subjektu">
        <ListItemText primary="Evidence smluvních subjektů" />
      </Link>
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="/rizena-dokumentace">
        <ListItemText primary="Řízená dokumentace" />
      </Link>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset={true}>Nastaveni</ListSubheader>
    <ListItem button={true}>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <Link to="/kos">
        <ListItemText primary="Koš" />
      </Link>
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <MiscellaneousServicesIcon />
      </ListItemIcon>
      <Link to="/nastaveni-aplikace">
        <ListItemText primary="Nastavení aplikace" />
      </Link>
    </ListItem>
  </div>
);
