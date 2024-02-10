import { Users, User } from "./types";

export const getUsers = async (): Promise<Users> => {
  "use server";
  const users: Users = [];
  // Todo - Make API call
  return users;
};

export const addUser = async (user: User): Promise<void> => {
  "use server";
  // Todo - Make API call

  return;
};

export const removeUser = async (): Promise<void> => {
  "use server";
  // Todo - Make API call
  return;
};
