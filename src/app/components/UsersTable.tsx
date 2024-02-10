"use client";

import { useState } from "react";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import AddUserButton from "./AddUsersButton";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "company", headerName: "Company", flex: 1 },
  { field: "added", headerName: "Added", flex: 1 },
];

const rows = [
  {
    name: "Snow",
    email: "email@email.com",
    company: "Jon",
    added: "2021-07-01",
    id: 1,
  },
  {
    name: "Lannister",
    email: "email@email.com",
    company: "Cersei",
    added: "2021-07-01",
    id: 2,
  },
  {
    name: "Lannister",
    email: "email@email.com",
    company: "Jaime",
    added: "2021-07-01",
    id: 3,
  },
  {
    name: "Stark",
    email: "email@email.com",
    company: "Arya",
    added: "2021-07-01",
    id: 4,
  },
  {
    name: "Targaryen",
    email: "email@email.com",
    company: "Daenerys",
    added: "2021-07-01",
    id: 5,
  },
  {
    name: "Melisandre",
    email: "email@email.com",
    company: null,
    added: "2021-07-01",
    id: 6,
  },
  {
    name: "Clifford",
    email: "email@email.com",
    company: "Ferrara",
    added: "2021-07-01",
    id: 7,
  },
  {
    name: "Frances",
    email: "email@email.com",
    company: "Rossini",
    added: "2021-07-01",
    id: 8,
  },
  {
    name: "Roxie",
    email: "email@email.com",
    company: "Harvey",
    added: "2021-07-01",
    id: 9,
  },
];

// Todo - enable multiple sorts - implement custom sorting prior to passing users into DataGrid (or upgrade to data-grid pro!)
// Todo - optimise bundle size - assess DataGrid options / imports or build custom Table implementation

export default function DataTable() {
  const [users, setUsers] = useState(rows);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 100 },
          },
        }}
        disableDensitySelector={true}
        disableColumnSelector={true}
        disableRowSelectionOnClick={true}
        slots={{
          toolbar: GridToolbar,
          footer: AddUserButton,
        }}
        slotProps={{
          footer: { setUsers } as any, // Todo - use Context (or somehow extend the footer props type) to avoid this assertion
        }}
      />
      {/* Todo - Add pagination controls to account for DataGrid 100 row page size */}
    </div>
  );
}
