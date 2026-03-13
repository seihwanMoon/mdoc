import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <Layout title="Home" description="Obsidian 기반 공개 문서 사이트">
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">mdoc</h1>
          <p className="hero__subtitle">Obsidian으로 작성하고 Docusaurus로 배포하는 문서 사이트</p>
          <div>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              문서 보기
            </Link>
          </div>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <h2>운영 원칙</h2>
        <ul>
          <li>공개 문서만 저장소에 올립니다.</li>
          <li>문서는 docs/ 아래에서 관리합니다.</li>
          <li>Obsidian 위키링크 대신 Markdown 링크를 사용합니다.</li>
        </ul>
      </main>
    </Layout>
  );
}
