// import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { DataGridPremium, GridColumns, GridRowsProp, GridToolbarContainer, GridToolbarExport, GridToolbarQuickFilter } from '@mui/x-data-grid-premium';

const ExportyCsuMts = () => {
  const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];

  const columns: GridColumns = [
    { field: 'Jmeno', headerName: 'Jmeno', editable: true },
    { field: 'col2', headerName: 'Column 2', width: 150, editable: true },
    { field: 'kouzelnik', headerName: 'kouzelnici', width: 200, editable: true },
    { field: 'kouzelnik', headerName: 'kouzelnici', width: 200, editable: true },
    { field: 'kouzelnik', headerName: 'kouzelnici', width: 200, editable: true },
    { field: 'kouzelnik', headerName: 'kouzelnici', width: 200, editable: true },
    { field: 'kouzelnik', headerName: 'kouzelnici', width: 200, editable: true },
    { field: 'kouzelnik', headerName: 'kouzelnici', width: 200, editable: true },
    { field: 'kouzelnik', headerName: 'kouzelnici', width: 200, editable: true },
    { field: 'kouzelnik', headerName: 'kouzelnici', width: 200, editable: true },
    { field: 'kouzelnik', headerName: 'kouzelnici', width: 200, editable: true },
    { field: 'kouzelnik', headerName: 'kouzelnici', width: 200, editable: true },
    { field: 'kouzelnik', headerName: 'kouzelnici', width: 200, editable: true },
  ];

  const CustomToolBar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
        <GridToolbarQuickFilter />
      </GridToolbarContainer>
    );
  };

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ flexGrow: 1 }}>
        <h1>ExportyCsuMts</h1>
        <DataGridPremium
          autoHeight={true}
          initialState={{ pinnedColumns: { left: ['Jmeno'] } }}
          componentsProps={{ row: { onMouseOver: (e: any) => console.log('ROW: ', e) } }}
          rows={rows}
          columns={columns}
          components={{ Toolbar: CustomToolBar }}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default ExportyCsuMts;
