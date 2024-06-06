import { WorkersService } from "@/services/workers.service";
import styles from "./page.module.scss";

const getWorkersById = async (id: string) => {
  const { data } = await WorkersService.getById(id);

  return data;
};

interface IWorkerParams {
  id: string;
}

export default async function Workers({ params }: { params: IWorkerParams }) {
  const data = await getWorkersById(params.id as string);

  return (
    <main className="mx-auto max-w-3xl px-4 sm:pb-6 lg:max-w-7xl">
      <div className="flex flex-col md:flex-row">
        <div className={styles.workerAvatarContainer}>
          <img
            src={data.avatar}
            alt="Description of the image"
            className={styles.workerAvatar}
          />
        </div>

        <div className="mt-8 md:ml-20 md:mt-20">
          <h2 className="text-2xl md:text-5xl ">
            {data.first_name} {data.last_name}
          </h2>
          <p className="text-green-500  md:text-xl md:mt-1">{data.email}</p>
        </div>
      </div>
    </main>
  );
}
