import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { Users } from "@/api/types";
import { Dispatch, SetStateAction } from "react";
import { addUser } from "@/api/users";

interface AddUserDialogProps {
  open: boolean;
  onClose: () => void;
  setUsers: Dispatch<SetStateAction<Users>>;
}

const AddUserDialog: React.FC<AddUserDialogProps> = ({
  open,
  onClose,
  setUsers,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = () => {
    // Todo - Field validation - Check types and not empty
    const newUser = {
      name,
      email,
      company,
      added: new Date().toISOString().split("T")[0],
      id: Date.now(),
    }; // Todo - Use a more robust uuid lib for id
    // Todo - Store 'added' as a numerical value for greater precision (Date.now())
    setUsers((prev) => [...prev, newUser]);
    addUser(newUser);
    // Todo - Error handling
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New User</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus // Todo - Fix - if not working, develop custom useEffect implementation
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Todo - Email validation
        />
        <TextField
          margin="dense"
          id="company"
          label="Company"
          type="text"
          fullWidth
          variant="standard"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} color="primary">
          Add User
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserDialog;
