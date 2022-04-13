import { SDKConfig } from './config';
import Account from './accounts';

class LiquidSDK {
  config: SDKConfig;
  constructor(config: SDKConfig) {
    this.config = config;
  }

  getConfig(): SDKConfig {
    return this.config;
  }
}

export { Account };

export default LiquidSDK;
