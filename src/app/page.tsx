import UsersTable from "./components/UsersTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[90%] mx-auto">
        <h1 className="text-center text-3x1 pt-5">Users Table</h1>
        <h1 className="text-center text-3x1 pt-5">by Richard Barnes</h1>
        <UsersTable />
      </div>
    </main>
  );
}
