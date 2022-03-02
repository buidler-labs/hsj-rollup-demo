import { ApiSession, Contract } from '@buidlerlabs/hedera-strato-js';

function log(what) {
  document.write(`${what}</br>`);
}

const { session } = await ApiSession.default();

session.log.on("debug", log);
session.log.on("error", log);
session.log.on("info", log);
session.log.on("warn", log);

const helloContract = await Contract.newFrom({ path: './hello_strato.sol' });
const liveContract = await session.upload(helloContract);
const greet = await liveContract.greet();

document.write(`</br><b>${greet}</b>`);