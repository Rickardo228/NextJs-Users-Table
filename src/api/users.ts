"use server";
import { Users, User } from "./types";

export const getUsers = async (): Promise<Users> => {
  "use server";
  const response = await fetch("https://zglinski.com/trex/users.json");
  const users: Users = await response.json();

  // Assign a unique id to each user as original data doesn't include one
  const usersWithId = users.map((user, index) => ({
    ...user,
    id: index, // Todo - consider a more robust approach / store id in original JSON
  }));

  return usersWithId;
};

export const addUser = async (user: User): Promise<void> => {
  "use server";
  // Todo - Make API call

  return;
};

export const removeUser = async (userId: number): Promise<void> => {
  "use server";
  // Todo - Make API call
  return;
};
