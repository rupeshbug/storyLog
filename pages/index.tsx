import { Typography } from '@mui/material';
import Head from 'next/head';
import HomeBanner from '../components/home/HomeBanner';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Story Log</title>
        <meta
          name="description"
          content="Dipesh Chaulagain - Personal Blog/Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeBanner />
    </div>
  );
}
