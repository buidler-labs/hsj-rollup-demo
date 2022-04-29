## Bundling Strato with Rollup
![HSJ Usage Recording](./hsj-rollup-recording.gif)

### Strato plays well with rollup 
We even [have a dedicated plugin to prove this](https://github.com/buidler-labs/hedera-strato-rollup)! Yet, what happens if you already have a bundler in place that's not necessarily rollup (eg. [webpack](https://webpack.js.org/) -- for which [we have a ticket to support](https://github.com/buidler-labs/hedera-strato-js/issues/26) eventually) and you don't want to or even can't change it? 

This repo is meant to demo exactly this scenario: It bundles strato via rollup with it's internals (eg. solidity files that you put inside the `contracts` folder) into an `hedera-strato.js` bundle which gets imported in a demo page alongside the actual `app.mjs` logic that makes use of it. Both of the JS files are [imported via `type='module'` mechanics](./dist/index.html).

### What next?
For more info, please check [our official docs on bundling](https://hsj-docs.buidlerlabs.com/markdown/guides/bundling) and be sure to [join our Discord channel](https://discord.gg/4mYCre869F) for any Strato-related talks.

## DIY-ing
Before running, have a `.env` file defined (see [.env.sample](.env.sample)) with a minimum of network credentials to be able to run this locally. Then just

```
$ npm install
$ npm run build
$ npm start
```
and of you go!