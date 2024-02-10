import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Dispatch, SetStateAction } from "react";

interface RemoveUserButtonProps {
  id: number;
  setUsers: Dispatch<SetStateAction<any[]>>;
}

const RemoveUserButton: React.FC<RemoveUserButtonProps> = ({
  id,
  setUsers,
}) => {
  const handleRemoveUser = () => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    // Todo - UI to confirm deletion
    <IconButton onClick={handleRemoveUser} size="small">
      <DeleteIcon fontSize="small" style={{ color: "gray" }} />
    </IconButton>
  );
};

export default RemoveUserButton;
