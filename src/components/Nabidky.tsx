import { DataGridPremium, GridToolbarContainer, GridToolbarExport, GridColumns, GridRowsProp } from "@mui/x-data-grid-premium";

const Nabidky = () => {

  const CustomToolBar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  const rows: GridRowsProp = [
    {
      id: 1,
      cisloNabidky: 'NAB-2-2021-7012',
      poptavajiciSubjekt: 'Dopravni podnik Hlavniho mesta Praha',
      IC: '00177041',
      zpracovatelNabidky: 'Dopravni podnik Hlavniho mesta Praha',
      stredisko: '70012',
      nabidkovaCena: '100 000 000',
      vytvoreno: '13. 08. 1987',
      rozpracovano: '30. 12. 1999',
      prezkum: '30. 12. 1999',
      schvalena: '30. 12. 1999',
      odevzdano: '30. 12. 1999',
      stavObjednavky: 'Storno / důvod',
    },]

  const columns: GridColumns = [
    { field: 'cisloNabidky', headerName: 'Číslo nabídky', width: 170, editable: true },
    { field: 'poptavajiciSubjekt', headerName: 'Poptávající subjekt', width: 300, editable: true },
    { field: 'IC', headerName: 'IČ', type: 'number', editable: true },
    { field: 'zpracovatelNabidky', headerName: 'Zpracovatel nabídky',width:300, editable: true },
    { field: 'stredisko', headerName: 'Středisko', type: 'string', width: 80, editable: true },
    { field: 'nabidkovaCena', headerName: 'Nabídková cena', type: 'string', width: 130, editable: true },
    { field: 'vytvoreno', headerName: 'Vytvořeno', type: 'number', width: 130, editable: true },
    { field: 'rozpracovano', headerName: 'Rozpracováno', type: 'number', width: 130,editable: true },
    { field: 'prezkum', headerName: 'Přezkum', type: 'number', editable: true, width: 130 },
    { field: 'schvalena', headerName: 'Schválená', type: 'number', editable: true,width: 130 },
    { field: 'odevzdano', headerName: 'Odevzdáno', type: 'number', editable: true,width: 130 },
    { field: 'stavObjednavky', headerName: 'Stav objednávky', type: 'number', editable: true,width: 130 },
  ]
    
  return (
    <div style={{width: '100%', textAlign:'center'}}>
  <h1>Nabidky</h1>
  <div>
    <h2>Poptávky po realizaci</h2>
  <DataGridPremium autoHeight={true} rows={rows} columns={columns} components={{
    Toolbar: CustomToolBar,
  }} initialState={{ pinnedColumns: { left: ['cisloNabidky'], right: ['stavObjednavky'] } }} />
  </div>
  </div>
  );
};

export default Nabidky;
