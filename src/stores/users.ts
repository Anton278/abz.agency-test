import { create } from "zustand";
import { devtools } from "zustand/middleware";

import usersService from "../services/users";
import { User } from "../models/User";
import { CreateUserReq } from "../models/requests/createUser";

interface UsersState {
  users: User[];
  isLoading: boolean;
  error: string;

  getUsers: () => Promise<void>;
  createUser: (token: string, user: CreateUserReq) => Promise<void>;
}

export const useUsers = create<UsersState>()(
  devtools(
    (set, get) => ({
      users: [],
      isLoading: true,
      error: "",

      getUsers: async () => {
        try {
          const res = await usersService.get();
          set({ users: res.users, isLoading: false });
        } catch (err) {
          set({ isLoading: false, error: "Failed to get users" });
        }
      },
      createUser: async (token: string, user: CreateUserReq) => {
        const res = await usersService.create(token, user);
        const registration_timestamp = Math.floor(Date.now() / 1000);
        const createdUser = await usersService.getOne(res.user_id);
        const oldUsers = get().users;
        set({
          users: [{ ...createdUser.user, registration_timestamp }, ...oldUsers],
        });
      },
    }),
    {
      name: "users-storage",
    }
  )
);
