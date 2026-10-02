# @nuxtjp/vuetify-layer

Nuxt 3とVuetify 3を組み合わせ、プラグイン・CSS・基本レイアウトを再利用できます。

## 利用前の確認

実装済みの範囲、必要な依存関係、検証コマンドを以下の英語説明に併記しています。操作・配備・公開は、それぞれの権限と設定を確認してから実施してください。

## 導入・使い方

以下は現行インターフェースの利用例です。ローカル成果物の参照がある場合は、必要な版の成果物を先に準備してください。パッケージの公開配布は今回の作業では行いません。

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

## English

Start a Nuxt application with Vuetify plugins, styles and a basic layout already composed.

## What you can do

- Reuse the declared Nuxt 3 and Vuetify 3 layer.
- Validate the integration through the included playground.

## Current scope

Registry publication is not performed. The development CLI retains the documented node-forge 1.4.0 High vulnerability; development HTTPS/certificate features must not be used.

Package distribution is not activated by this documentation. Use the checked-in source and the declared dependency versions; published availability must be verified separately.

## Getting started

Use `pnpm@10.29.3` and the Node.js version declared in `engines` in `package.json`. Run from this repository:

```sh
pnpm install --frozen-lockfile
pnpm lint
pnpm build
```

## Documentation and source

[Usage guide](docs/getting-started.md)

[Contributing](CONTRIBUTING.md) · [Security reporting](SECURITY.md) · [License](LICENSE) · [Attribution notices](NOTICE)
