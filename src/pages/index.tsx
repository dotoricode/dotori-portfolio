import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={translate({message: 'Dotori Portfolio'})}
      description={translate({message: 'Docusaurus + GitHub Pages'})}
    >
      <main style={{padding: '4rem 1.5rem', textAlign: 'center'}}>
        <h1>
          <Translate>Dotori Portfolio</Translate>
        </h1>
        <p>
          <Translate>Starter template for deploying a portfolio with Docusaurus on GitHub Pages.</Translate>
        </p>
        <p>
          <Link className="button button--primary button--lg" to="/intro">
            <Translate>Open intro page</Translate>
          </Link>
        </p>
      </main>
    </Layout>
  );
}
