# next-my-site
Next.js × TypeScript の勉強を目的とした、自己紹介&ブログサイトです。
## ディレクトリ構造
```
.
├── 📁app/
│   └── 📁api/
│       ├── 📁contact/
│       │   └── route.ts --- ContactフォームのAPIエンドポイント
│       ├── 📁blog/
│       │   ├── 📁[slug]/
│       │   │   ├── page.tsx --- 各ブログ記事のページ
│       │   │   └── 📁page
│       │   └── page.tsx --- ブログ一覧ページ/
│       │       └── 📁[pagination]/
│       │           └── page.tsx --- ページネーションされたブログ一覧ページ
│       ├── 📁components/
│       │   ├── footer.tsx --- フッターコンポーネント
│       │   ├── header.tsx --- ヘッダーコンポーネント
│       │   ├── pagination.tsx --- ページネーションコンポーネント
│       │   └── prevNext.tsx --- 前後の記事へのリンクコンポーネント
│       ├── 📁contact/
│       │   ├── 📁components/
│       │   │   └── metadata.tsx --- Contactページのメタデータ
│       │   └── page.tsx --- Contactページ
間違えました
│       ├── 📁styles/
│       │   ├── all.css --- 全体のスタイル
│       │   ├── blog.css --- ブログページのスタイル
│       │   ├── common.css --- 共通スタイル
│       │   ├── contact.css --- Contactページのスタイル
│       │   ├── index.css --- トップページのスタイル
│       │   └── singleBlog.css --- 各ブログ記事ページのスタイル
│       ├── 📁utils/
│       │   └── mdQueries.tsx --- ブログデータを取得するユーティリティ関数
│       ├── .DS_Store
│       ├── favicon.ico
│       ├── layout.tsx --- ルートレイアウトコンポーネント
│       ├── not-found.tsx --- 404ページ
│       └── page.tsx --- トップページ
├── 📁data/
│   └── 省略 --- ブログデータ(Markdown)
└── 📁public/
    └── 📁image/ 
        └── 省略 --- 素材(svg,png,jpg)
```
## 作成者
河西 玄太