# Liqu.id Domain SDK (Unofficial)

## Example usage

```ts
import LiquidSDK, { Account } from 'liquid-sdk';

const rcamp = new LiquidSDK({
    resellerId: 'xxx',
    apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    apiUrl: 'https://api.domainsas.com/v1',
});

const account = new Account(rcamp);

const { data: balance } = account.getBalance();

console.log(balance);
```
