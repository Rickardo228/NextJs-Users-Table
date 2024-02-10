import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { GridSlotsComponentsProps } from "@mui/x-data-grid";
import { Dispatch, SetStateAction } from "react";
import { Users } from "@/api/types";
import AddUserDialog from "./AddUserDialog";

interface IAddUserButton
  extends NonNullable<GridSlotsComponentsProps["footer"]> {
  setUsers: Dispatch<SetStateAction<Users>>;
}

function AddUserButton({ setUsers }: IAddUserButton) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
        sx={{
          justifyContent: "start",
          //   color: "inherit",
          textTransform: "none",
          width: "100%",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
          },
          borderTop: "1px solid #e5e7eb",
        }}
      >
        Add User
      </Button>
      {open && ( // Performance otimisation
        <AddUserDialog open={open} onClose={handleClose} setUsers={setUsers} />
      )}
    </>
  );
}

export default AddUserButton;
