# Nuxt Vuetify Layer

NuxtJPが管理する、日本国内向けのNuxt・Vuetify連携Layerです。パッケージ名は `@nuxtjp/vuetify-layer` です。Nuxt 3とVuetify 3の安定版を固定し、プラグイン、CSS、基本レイアウトを提供します。

## 開発と検証 / Development and verification

Node.js 22.19以降、pnpm 10.29.3を使用します。依存設定とロックファイルを同梱し、単独cloneから検証できます。

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm build
```

`.playground` はこのLayerを読み込む検証用アプリです。`pnpm dev` でローカル開発できます。

## 利用 / Consumption

レジストリ配布は未実施です。配布準備後、呼び出し元のアプリでバージョンを固定した依存として導入し、Nuxt設定の `extends` に `@nuxtjp/vuetify-layer` を指定します。ローカル検証ではcloneしたLayerのパスを呼び出し元から指定してください。

## セキュリティ確認 / Security review

開発用Nuxt CLIの間接依存 `node-forge 1.4.0` には未修正のHighの署名検証脆弱性があります。開発時のHTTPS・証明書機能は使用しません。この既知リスクを記録したうえでTransferとソース反映のみ承認されています。npm配布は行いません。

## English

A Nuxt layer maintained by NuxtJP for the Japanese package ecosystem. It integrates stable Nuxt 3 and Vuetify 3 through a plugin, styles, and base layouts. The package is independently testable with the commands above; application composition belongs to the caller. Registry distribution has not been activated. Once released, callers should use an exact versioned dependency and configure `extends` accordingly.

The development-only Nuxt CLI dependency `node-forge 1.4.0` has an unpatched High-severity signature-verification advisory. Development HTTPS and certificate features are not used. Transfer and source synchronization were approved with this residual risk recorded; npm publication remains disabled. Nuxt's CLI also reports a schema peer-version warning while the verified Nuxt 3 production build succeeds.

## License

MIT. The existing license and copyright attribution are retained; see LICENSE and NOTICE. External dependencies retain their licenses.
