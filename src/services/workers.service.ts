import { IAllWorkerRes, IWorkerByIdRes } from "../types/workers.interface";
import axios from "axios";

const BASE_URL = "https://reqres.in/api";

export const WorkersService = {
  async getAll() {
    const { data } = await axios<IAllWorkerRes>({
      url: `${BASE_URL}/users?per_page=12`,
      method: "GET",
    });

    return data;
  },

  async getById(id: string) {
    const { data } = await axios<IWorkerByIdRes>({
      url: `${BASE_URL}/users/${id}`,
      method: "GET",
    });

    return data;
  },
};
