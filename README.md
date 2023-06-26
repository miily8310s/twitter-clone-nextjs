以下の学習用の Twitter クローンアプリ

- メールアドレス・パスワード認証機能
- 認証したユーザーによる投稿・閲覧機能
- storybook の作成

## コマンド

- `yarn dev` -> 開発環境立ち上げ
- `yarn storybook` -> storybook 立ち上げ

## 使用ライブラリ

### メイン

- next.js 13（pages）
- react 18

### store

- redux toolkit

### 認証・データ取得周り

- supabase

### テスト

- storybook
- jest/testing-library

今回は以下で分けている

- コンポーネント -> storybook/testing-library
- store/メソッド -> jest

一今回の所感として、画面を構成するコンポーネントのテストは playwright のほうが向いていそうな気がした

### storybook とテストに関する考察

- 今回のコンポーネントは test-runner を使って、jest ではなく playwright 上でテストを実行する方法で統一している。
- 理由は jest だとルーターや onClick 系のイベントで失敗するため。
- React Native 版もあるらしいがリソースがほとんどなく、要調査。

#### storybook を使ったテストで必要なライブラリ

- `@storybook/testing-library`: 作成した story の render に使用。
- `@storybook/jest`: stories ファイルで jest の関数を使えるようにする

_test-runner（playwright）で実行する場合_

- `@storybook/test-runner`: test-runner（playwright）におけるテスト実行用

_jest で実行する場合_

- `@storybook/react`: Next.js 環境で storybook を使う場合はすでに入っている。ここにテスト用の関数が内包されている。

#### play function の特徴

storybook を使ったテストは play function に記載したユーザー操作・期待値確認がそのままテストコードとして実行する。
特徴は以下の通り。

- ✅ onClick 系イベントや next/router は storybook 環境においては自動でモック化される（こちらで設定も出来る） 。
- ✅ ユーザー操作に沿ったテストコードを記載出来る
- ✅ storybook 上で文字入力といった動きを見ることが出来る。
- ❌ ピクセルチェックといった、ビジュアルリグレッションテストは不可

#### テスト環境ごとの違い

storybook を使ったテストは jest・test-runner（playwright）のいずれかを使うことになる。

- jest で行うメリット・デメリット
  - ✅ 実行が早い
  - ✅ 使い慣れた手法でかける
  - ✅ 実行時に、storybook の立ち上げは不要
  - ❌ play function に書いたルーターのテストが失敗する
- test-runner（playwright） で行うメリット・デメリット
  - ✅ ブラウザ環境で行うため、ルーターのテスト含め実行できる（Storybook で成功していれば大丈夫）
  - ❌ 実行は遅い
  - ❌ storybook をあらかじめ立ち上げる or どこかにデプロイしておく必要がある
