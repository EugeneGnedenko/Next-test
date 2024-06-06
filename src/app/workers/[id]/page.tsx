import { WorkersService } from "@/services/workers.service";
import styles from "./page.module.scss";

export async function generateStaticParams() {
  const workers = await WorkersService.getAll();
  return workers.map((worker) => ({
    id: worker.id.toString(),
  }));
}

interface IWorkerParams {
  params: {
    id: string;
  };
}

export default async function Worker({ params }: IWorkerParams) {
  const data = await WorkersService.getById(params.id);

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