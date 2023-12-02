import { api } from "../http/api";
import { GetPositionsRes } from "../models/responses/getPositions";

class PositionsService {
  async getAll(): Promise<GetPositionsRes> {
    const res = await api.get("/positions");
    return res.data;
  }
}

const positionsService = new PositionsService();

export default positionsService;
