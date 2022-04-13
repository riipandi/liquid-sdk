import Liquid from '../index';
import { getRequest } from '../utils/fetcher';

class Account {
  constructor(private readonly service: Liquid) {}
  private readonly config = this.service.getConfig();

  async getBalance(): Promise<any> {
    return await getRequest('/account/balance', this.config);
  }

  async getPrices(): Promise<any> {
    return await getRequest('/account/prices', this.config);
  }

  async getTransactions(): Promise<any> {
    return await getRequest('/account/transactions', this.config);
  }

  async getTransactionDetail(id: string): Promise<any> {
    return await getRequest(`/account/transactions/${id}`, this.config);
  }
}

export default Account;
