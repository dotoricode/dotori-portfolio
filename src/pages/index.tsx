import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home(): JSX.Element {
  const profileImg = useBaseUrl('/img/profile-placeholder.svg');
  return (
    <Layout title="포트폴리오" description="Dotori의 개인 포트폴리오">
      <main>
        <div style={{textAlign:'center', padding:'4rem 2rem'}}>
          <img src={profileImg} alt="프로필" style={{width:'150px',height:'150px',borderRadius:'50%',border:'4px solid #5b7cfa',marginBottom:'1.5rem'}} />
          <h1 style={{fontSize:'2.5rem',fontWeight:700}}>안녕하세요, Dotori입니다 👋</h1>
          <p style={{fontSize:'1.2rem',color:'var(--ifm-color-emphasis-700)'}}>풀스택 개발자 | TypeScript & React</p>
          <p style={{maxWidth:'600px',margin:'0 auto 2rem'}}>사용자 경험을 중심으로 생각하는 개발자입니다. 문제를 해결하고 가치를 만드는 것을 즐깁니다.</p>
          <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
            <Link className="button button--primary button--lg" to="/projects">프로젝트 보기</Link>
            <Link className="button button--secondary button--lg" to="/contact">연락하기</Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
