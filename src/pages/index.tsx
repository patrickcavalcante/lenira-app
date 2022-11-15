import React from 'react';

import Head from 'next/head';

import { Header } from '~/components/Header';

import { Summary } from '../components/Summary';
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header />
      <Summary />
    </Container>
  );
};

export default Home;
