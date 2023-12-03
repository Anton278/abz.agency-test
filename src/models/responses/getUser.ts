export interface GetUserRes {
  success: true;
  user: {
    id: number;
    name: string;
    email: string;
    phone: string;
    position: string;
    position_id: number;
    photo: string;
  };
}
