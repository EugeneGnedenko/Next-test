import WorkersList from "@/components/ui/workers-list/WorkersList";
import { WorkersService } from "@/services/workers.service";

const getAllUsers = async () => {
  const { data } = await WorkersService.getAll();

  return data;
};

export default async function Workers() {
  const data = await getAllUsers();

  return (
    <main className="mx-auto max-w-3xl px-4 sm:pb-6 lg:max-w-7xl">
      <h1 className="text-3xl font-bold">Our workers</h1>
      <WorkersList data={data} />
    </main>
  );
}
