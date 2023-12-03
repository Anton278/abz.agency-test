import { create } from "zustand";
import { devtools } from "zustand/middleware";

import usersService from "../services/users";
import { User } from "../models/User";
import { CreateUserReq } from "../models/requests/createUser";

interface UsersState {
  users: User[];
  page: number;
  totalPages: number;

  getUsers: (page?: number) => Promise<void>;
  createUser: (token: string, user: CreateUserReq) => Promise<void>;
}

export const useUsers = create<UsersState>()(
  devtools(
    (set, get) => ({
      users: [],
      page: 1,
      totalPages: 1,

      getUsers: async (page) => {
        if (page) {
          set({ page });
        }
        const { users: oldUsers } = get();
        const res = await usersService.get(page);
        set({
          users: [...oldUsers, ...res.users],
          totalPages: res.total_pages,
        });
      },
      createUser: async (token: string, user: CreateUserReq) => {
        await usersService.create(token, user);
        const res = await usersService.get(1);

        set({ users: res.users, page: 1, totalPages: res.total_pages });
      },
    }),
    {
      name: "users-storage",
    }
  )
);
