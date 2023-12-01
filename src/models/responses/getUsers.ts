import { User } from "../User";

export interface GetUsersRes {
  success: boolean;
  total_pages: number;
  total_users: number;
  count: number;
  page: number;
  links: {
    next_url: string | null;
    prev_url: string | null;
  };
  users: User[];
}
