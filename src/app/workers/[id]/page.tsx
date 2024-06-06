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
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.workerAvatarContainer}>
          <img
            src={data.avatar}
            alt="Description of the image"
            className={styles.workerAvatar}
          />
        </div>

        <div className={styles.mainInfo}>
          <h2 className={styles.title}>
            {data.first_name} {data.last_name}
          </h2>
          <p className={styles.subtitle}>{data.email}</p>
        </div>
      </div>
    </main>
  );
}
