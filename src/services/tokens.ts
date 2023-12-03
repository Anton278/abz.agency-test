import { api } from "../http/api";
import { GetTokenRes } from "../models/responses/getToken";

class TokensService {
  async create(): Promise<GetTokenRes> {
    const res = await api.get("/token");
    return res.data;
  }
}

const tokensService = new TokensService();

export default tokensService;
