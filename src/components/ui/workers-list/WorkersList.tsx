"use client";

import { IWorker } from "@/types/workers.interface";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import styles from "./WorkersList.module.scss";

interface IWorkersList {
  data: IWorker[];
}

const WorkersList: FC<IWorkersList> = ({ data }) => {
  const { push } = useRouter();

  const navigateToUser = (id: number) => {
    push(`/workers/${id}`);
  };

  return (
    <div className={styles.workers}>
      {data.map((item) => (
        <div
          className={styles.workerItem}
          key={item.id}
          onClick={() => navigateToUser(item.id)}
        >
          <img
            src={item.avatar}
            alt="Description of the image"
            className={styles.workerAvatar}
          />
          <div className="ml-10 pt-10 w-full min-w-2">
            <h2
              className={styles.workerFullName}
            >{`${item.first_name} ${item.last_name}`}</h2>
            <p className={styles.workerMail}>{item.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkersList;
