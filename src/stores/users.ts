import { create } from "zustand";
import { devtools } from "zustand/middleware";

import usersService from "../services/users";
import { User } from "../models/User";

interface UsersState {
  users: User[];
  isLoading: boolean;
  error: string;

  getUsers: () => Promise<void>;
}

export const useUsers = create<UsersState>()(
  devtools(
    (set) => ({
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
    }),
    {
      name: "users-storage",
    }
  )
);
