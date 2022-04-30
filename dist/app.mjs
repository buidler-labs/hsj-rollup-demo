import { 
  ApiSession, 
  Json,
  HashPackWallet 
} from './hedera-strato-hashpack.js';

const hpAppMetaData = {
  description: "Hedera Strato HashPack Demo",
  icon: "https://www.hashpack.app/img/logo.svg",
  name: "hStratoHashPackDemo",
};

async function runWalletedApp() {
  const log = (what) => document.write(`${what}</br>`);
  const { session } = await ApiSession.default({ wallet: { type: 'Browser' } });

  session.log.on("debug", log);
  session.log.on("error", log);
  session.log.on("info", log);
  session.log.on("warn", log);

  const liveJson = await session.upload(new Json({ theAnswer: 42 }));

  document.write(`</br><b>Wallet account id used: ${session.wallet.account.id}</b>`);
  document.write(`</br><b>Json is stored at ${liveJson.id}</b>`);
  document.write(`</br><b>The answer is: ${liveJson.theAnswer}</b>`);
}

async function connectToHashPack() {
  let wallet = await HashPackWallet.getConnection(false);

  if (!wallet) {
    // No wallet-session could be recovered. Start a fresh one
    wallet = await HashPackWallet.newConnection({
      appMetadata: hpAppMetaData,
      debug: false,
      networkName: 'testnet',
    });
  }
  window["hedera"] = wallet;
}

// dApp logic flow
await connectToHashPack();
await runWalletedApp();