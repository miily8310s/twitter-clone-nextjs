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

### storybook とテストに関する考察

- 今回のコンポーネントは test-runner を使って、jest ではなく playwright 上でテストを実行する方法で統一している。
- 理由は jest だとルーターや onClick 系のイベントで失敗するため。

- jest で行うメリット・デメリット
  - ✅ 実行が早い
  - ✅ 使い慣れた手法でかける
  - ✅ storybook の立ち上げは不要
  - ❌ play function に書いたルーターのテストが失敗する
- test-runner（playwright） で行うメリット・デメリット
  - ✅ ブラウザ環境で行うため、ルーターのテスト含め実行できる（Storybook で成功していれば大丈夫）
  - ❌ 実行は遅い
  - ❌ storybook をあらかじめ立ち上げる or どこかにデプロイしておく必要がある
