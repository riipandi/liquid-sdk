import Liquid from '../index';
import { getRequest } from '../utils/fetcher';

class Account {
  constructor(private readonly service: Liquid) {}
  private readonly config = this.service.getConfig();

  async getBalance(): Promise<any> {
    return await getRequest('/account/balance', this.config);
  }
}

export default Account;
