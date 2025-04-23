import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.container}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            🍄 Start Your Adventure! 
          </Link>
        </div>
      </div>
      <div className={styles.marioElements}>
        <div className={styles.cloud} style={{left: '5%', top: '20%'}}></div>
        <div className={styles.cloud} style={{left: '25%', top: '10%'}}></div>
        <div className={styles.cloud} style={{right: '15%', top: '25%'}}></div>
        <div className={styles.cloud} style={{right: '35%', top: '15%'}}></div>
        <div className={styles.block} style={{left: '20%', top: '40%'}}>?</div>
        <div className={styles.block} style={{right: '25%', top: '35%'}}>?</div>
        <div className={styles.marioPipe} style={{left: '10%'}}></div>
        <div className={styles.marioPipe} style={{right: '10%'}}></div>
        <div className={styles.ground}></div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
