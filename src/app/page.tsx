import { Users } from "@/api/types";
import UsersTable from "./components/UsersTable";

export default async function Page() {
  const response = await fetch("https://zglinski.com/trex/users.json");
  const users: Users = await response.json();

  // Assign a unique id to each user as original data doesn't include one
  const usersWithId = users.map((user, index) => ({
    ...user,
    id: index, // Todo - consider a more robust approach
  }));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[90%] mx-auto">
        <h1 className="text-center text-3x1 pt-5">Users Table</h1>
        <h1 className="text-center text-3x1 pt-5">by Richard Barnes</h1>
        <UsersTable users={usersWithId} />
      </div>
    </main>
  );
}
