import Head from 'next/head';
import Footer from '../components/common/Footer';
import About from '../components/home/About';
import ContactMe from '../components/home/ContactMe';
import HomeBanner from '../components/home/HomeBanner';
import RecentBlogs from '../components/home/RecentBlogs';
import client from '../utils/contentfulClient';

export async function getServerSideProps() {
  let data = await client.getEntries({
    content_type: 'post',
    limit: 3,
  });

  return {
    props: {
      posts: data.items,
    },
  };
}

export default function Home({ posts }: any) {
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
      <About />
      <RecentBlogs posts={posts} />
      <ContactMe />
      <Footer />
    </div>
  );
}
