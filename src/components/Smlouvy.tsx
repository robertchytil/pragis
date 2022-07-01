import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Title from './Title';

// Generate Order Data
function createData(id: any, date: any, name: any, shipTo: any, paymentMethod: any, amount: any) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  // createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  // createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  // createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

const useStyles = makeStyles({
  seeMore: {
    marginTop: 10,
  },
});

export default function Smlouvy() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Smlouvy uzavrene v tomto tydnu</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Stav</TableCell>
            <TableCell>Rámcová smlouva </TableCell>
            <TableCell>Specifikum dílčí smlouvy zakotvující ujednání odchylné od RAM </TableCell>
            <TableCell>Evidenční číslo</TableCell>
            <TableCell>Číslo smlouvy protistrany</TableCell>
            <TableCell>Holerit</TableCell>
            <TableCell>Pozice PRAGIS</TableCell>
            <TableCell>Hlavní předmět</TableCell>
            <TableCell>Vedlejší předmět</TableCell>
            <TableCell>Obsah závazku</TableCell>
            <TableCell>Uloženo v šanonu</TableCell>
            <TableCell>Číslo šanonu</TableCell>
            <TableCell>Pořadové číslo</TableCell>
            <TableCell>Divize</TableCell>
            <TableCell>Středisko</TableCell>
            <TableCell>Vyřizuje za PRAGIS a.s.</TableCell>
            <TableCell>Forma sjednání</TableCell>
            <TableCell>Forma akceptace</TableCell>
            <TableCell>Hodnota plnění - způsob</TableCell>
            <TableCell>Hodnota plnění (bez DPH)</TableCell>
            <TableCell>Kód měny</TableCell>
            <TableCell>Přenesená daňová povinnost</TableCell>
            <TableCell>* Sazba DPH</TableCell>
            <TableCell>* Částka v sazbě DPH</TableCell>
            <TableCell>* Výše DPH</TableCell>
            <TableCell>Hodnota plnění s DPH </TableCell>
            <TableCell>Poznámka</TableCell>
            <TableCell>Platnost</TableCell>
            <TableCell>Datum platnosti</TableCell>
            <TableCell>Termín plnění</TableCell>
            <TableCell>Datum účinnosti</TableCell>
            <TableCell>Účinnost - popis</TableCell>
            <TableCell>Datum účinnosti</TableCell>
            <TableCell>Výpovědní doba</TableCell>
            <TableCell>Doba trvání smlouvy v měsících</TableCell>
            <TableCell>Datum konce platnosti</TableCell>
            <TableCell>Privátní</TableCell>
            <TableCell>Středisko</TableCell>
            <TableCell>Zaměstnanci</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
