import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <Layout title="Dotori Portfolio" description="Docusaurus + GitHub Pages">
      <main style={{padding: '4rem 1.5rem', textAlign: 'center'}}>
        <h1>Dotori Portfolio</h1>
        <p>GitHub Pages 배포를 위한 Docusaurus 기본 템플릿입니다.</p>
        <p>
          <Link className="button button--primary button--lg" to="/intro">
            소개 페이지 보기
          </Link>
        </p>
      </main>
    </Layout>
  );
}
