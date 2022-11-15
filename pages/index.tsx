import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Btn from './components/button';
import { Container, Grid, Navbar, Text } from '@nextui-org/react';
import ChoiceCard from './components/card';
import Nav from './components/navbar';
import QContainer from './components/qcontainer';

export default function Home() {
  return (
    <Container
      css={{
        background: 'radial-gradient(ellipse at center, #7DE048, #20C8C4)',
        height: '100vh',
      }}
    >
      {/* Navbar */}
      <Nav text='' />
      {/* MVP: prompt box */}
      <Grid.Container gap={2} justify='center'>
        <Grid xs={6}>
          <ChoiceCard text='Ask a question' emoji='❓' />
        </Grid>
        <Grid xs={6}>
          <ChoiceCard text='Answer a question' emoji='😎' />
        </Grid>
        <Btn text='GO' />
      </Grid.Container>
      <Grid.Container gap={4} justify='center'>
        <Grid xs={12}>
          <QContainer />
        </Grid>
      </Grid.Container>
      {/* Feed */}
      {/* Footer */}
    </Container>
  );
}
