import { SDKConfig } from './config';
import Account from './account';
import Reseller from './reseller';

class LiquidSDK {
  config: SDKConfig;
  constructor(config: SDKConfig) {
    this.config = config;
  }

  getConfig(): SDKConfig {
    return this.config;
  }
}

export { Account, Reseller };

export default LiquidSDK;
