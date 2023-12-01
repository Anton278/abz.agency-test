import { api } from "../http/api";
import { GetUsersRes } from "../models/responses/getUsers";

class UsersService {
  async get(page?: number, count?: number): Promise<GetUsersRes> {
    const res = await api.get(`/users?page=${page || 1}&count=${count || 6}`);
    return res.data;
  }
}

const usersService = new UsersService();

export default usersService;
