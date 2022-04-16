import client from '../../utils/contentfulClient';

export async function getServerSideProps() {
  let data = await client.getEntries({
    content_type: 'post',
    'sys.id': '6KL6YS3Z1VTw6rOQfxKaQl',
  });

  return {
    props: {
      posts: data.items,
    },
  };
}

const PostByCategory = ({ posts }: any) => {
  console.log('posts', posts);

  return <div>PostByCategory</div>;
};

export default PostByCategory;
