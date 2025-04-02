// @ts-nocheck

import * as React from 'react';
import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import DGrid from "../../components/dgrid/DGrid";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Roxie0', firstName: 'Harvey0', age: 65 },
  { id: 11, lastName: 'Roxie1', firstName: 'Harvey1', age: 65 },
  { id: 12, lastName: 'Roxie2', firstName: 'Harvey2', age: 65 },
  { id: 13, lastName: 'Roxie3', firstName: 'Harvey3', age: 65 },
  { id: 14, lastName: 'Roxie4', firstName: 'Harvey4', age: 65 },
  { id: 15, lastName: 'Roxie5', firstName: 'Harvey5', age: 65 },
  { id: 16, lastName: 'Roxie6', firstName: 'Harvey6', age: 65 },
  { id: 17, lastName: 'Roxie7', firstName: 'Harvey7', age: 65 },
  { id: 18, lastName: 'Roxie8', firstName: 'Harvey8', age: 65 },
  { id: 19, lastName: 'Roxie9', firstName: 'Harvey9', age: 65 },
  { id: 20, lastName: 'Roxie10', firstName: 'Harvey10', age: 65 },
];



export default function LoadingStatPage() {

  return (
      <Box >
        <DGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 50,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection={false}
            disableRowSelectionOnClick
        />
      </Box>
  );
}