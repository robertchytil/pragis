import Box from '@mui/material/Box';
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGridPremium, GridToolbar, useGridApiRef, useKeepGroupedColumnsHidden } from '@mui/x-data-grid-premium';

const Konsignace = () => {
  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    visibleFields: ['commodity', 'quantity', 'filledQuantity', 'status', 'isFilled', 'unitPrice', 'unitPriceCurrency', 'subTotal', 'feeRate', 'feeAmount', 'incoTerm'],
  });
  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      ...data.initialState,
      rowGrouping: {
        ...data.initialState?.rowGrouping,
        model: ['commodity'],
      },
      sorting: {
        sortModel: [{ field: '__row_group_by_columns_group__', sort: 'asc' }],
      },
    },
  });

  return (
    <div>
      <h1>Konsignace</h1>
      <Box sx={{ height: 520, width: '100%' }}>
        <DataGridPremium {...data} apiRef={apiRef} loading={loading} disableSelectionOnClick={true} initialState={initialState} components={{ Toolbar: GridToolbar }} />
      </Box>
    </div>
  );
};

export default Konsignace;
