import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        The Viper API was designed to be noob friendly and fast!
      </>
    ),
  },
  {
    title: '99.9% Uptime',
    description: (
      <>
        The Viper API is always up and running with bugs being fixed all the time!
      </>
    ),
  },
  {
    title: 'Powered by Docusaurus',
    description: (
      <>
        The documentations is powered by Docusaurus
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
