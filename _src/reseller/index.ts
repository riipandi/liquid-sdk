import Liquid from '../index';
import { getRequest } from '../utils/fetcher';

class Reseller {
  constructor(private readonly service: Liquid) {}
  private readonly config = this.service.getConfig();

  async getAllResellers(): Promise<any> {
    return await getRequest('/resellers', this.config);
  }

  async getResellerDetail(id: string): Promise<any> {
    return await getRequest(`/resellers/${id}`, this.config);
  }
}

export default Reseller;
