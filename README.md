 プロジェクト概要

  プロジェクト名: stripe-app (AI Creator Studio)

  概要:
  AI画像生成・編集ツールのSaaSアプリケーション。クレジット制のサブスクリプションモデルで、画像生成、背景削除、画像圧縮などの機能を提
  供。

  主要機能:
  1. 画像生成 - AIによる画像生成
  2. 背景削除 - 画像から背景を自動削除
  3. 画像圧縮 - 画像ファイルの最適化

  技術スタック:

  フロントエンド

  - Next.js 15.3.4 (App Router使用)
  - React 19.0.0
  - TypeScript 5
  - Tailwind CSS 4 (PostCSS使用)

  バックエンド・インフラ

  - Clerk - 認証システム
  - Stripe - 決済・サブスクリプション管理
  - Prisma 5.22.0 - ORM
  - TiDB Cloud - データベース (MySQL互換)

  プロジェクト構造

  src/
  ├── app/           # Next.js App Router
  │   ├── (auth)/    # 認証関連ページ
  │   ├── (dashboard)/ # ダッシュボード
  │   ├── (landing)/ # ランディングページ
  │   └── api/       # APIエンドポイント
  ├── components/    # UIコンポーネント
  ├── config/        # 設定ファイル
  ├── actions/       # Server Actions
  ├── lib/           # ユーティリティ
  └── types/         # TypeScript型定義

  サブスクリプションプラン

  - Free: 5クレジット (デフォルト)
  - Starter: ¥1,000/月 - 50クレジット
  - Pro: ¥2,000/月 - 120クレジット
  - Enterprise: ¥5,000/月 - 300クレジット