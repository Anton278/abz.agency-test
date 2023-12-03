import { api } from "../http/api";
import { CreateUserReq } from "../models/requests/createUser";
import { CreateUserRes } from "../models/responses/createUser";
import { GetUserRes } from "../models/responses/getUser";
import { GetUsersRes } from "../models/responses/getUsers";

class UsersService {
  async get(page?: number, count?: number): Promise<GetUsersRes> {
    const res = await api.get(`/users?page=${page || 1}&count=${count || 6}`);
    return res.data;
  }

  async getOne(id: number | string): Promise<GetUserRes> {
    const res = await api.get(`/users/${id}`);
    return res.data;
  }

  async create(token: string, user: CreateUserReq): Promise<CreateUserRes> {
    const cfg = {
      headers: { Token: token, "Content-Type": "multipart/form-data" },
    };
    const res = await api.post("/users", user, cfg);
    return res.data;
  }
}

const usersService = new UsersService();

export default usersService;
