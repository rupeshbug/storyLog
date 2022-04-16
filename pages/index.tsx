import Head from 'next/head';
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
      <RecentBlogs posts={posts} />
    </div>
  );
}
