import { Users } from "@/api/types";
import UsersTable from "./components/UsersTable";
import { getUsers } from "@/api/users";

export default async function Page() {
  const users: Users = await getUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[90%] mx-auto">
        <h1 className="text-center text-2xl">Users Table</h1>
        <h2 className="text-center pt-1 pb-14 text-gray-500">
          by Richard Barnes
        </h2>
        <UsersTable users={users} />
      </div>
    </main>
  );
}
