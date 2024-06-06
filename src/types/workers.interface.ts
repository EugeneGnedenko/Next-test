export interface IWorker {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface Support {
  url: string;
  text: string;
}

export interface IAllWorkerRes {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IWorker[];
  support: Support;
}

export interface IWorkerByIdRes {
  data: IWorker;
  support: Support;
}
