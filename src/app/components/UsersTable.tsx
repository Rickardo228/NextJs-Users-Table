"use client";

import { useEffect, useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  gridExpandedRowCountSelector,
  gridFilteredSortedRowIdsSelector,
  useGridApiRef,
} from "@mui/x-data-grid";
import AddUserButton from "./AddUsersButton";
import RemoveUserButton from "./RemoveUserButton";
import { Users } from "@/api/types";

// Todo - enable multiple sorts - implement custom sorting prior to passing users into DataGrid (or upgrade to data-grid pro!)
// Todo - optimise bundle size - assess DataGrid options / imports or build custom Table implementation

export default function UsersTable({ users: initialUsers }: { users: Users }) {
  const [users, setUsers] = useState(initialUsers);
  const [userCount, setUserCount] = useState(initialUsers.length);
  const apiRef = useGridApiRef();

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "company", headerName: "Company", flex: 1 },
    { field: "added", headerName: "Added", flex: 1 },
    {
      field: "actions",
      headerName: "",
      width: 50,
      renderCell: (params) => {
        return <RemoveUserButton id={params.row.id} setUsers={setUsers} />; // Todo - use React.Context for users, so I can access setUsers in RemoveUserButton and define columns elsewhere
      },
      sortable: false,
      filterable: false,
    },
  ];

  return (
    <div className="h-[400px] w-full">
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 100 },
          },
        }}
        onStateChange={() => {
          setUserCount(gridExpandedRowCountSelector(apiRef)); // Todo - Potential optimisation - move setUserCount into a subcomponent to prevent re-rendering the entire table
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
        apiRef={apiRef}
      />
      {/* Todo - Add pagination controls to account for DataGrid 100 row page size */}
      <div className="mt-4 text-sm">
        <span>Number of users:</span>
        <span className="ml-1">{userCount}</span>
      </div>
    </div>
  );
}
