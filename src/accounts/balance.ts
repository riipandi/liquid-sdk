import fetcher from '../utils/fetcher';

export async function getAccountBalance() {
  return await fetcher.get('/account/balance');
}
