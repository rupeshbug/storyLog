import { Container } from '@mui/material';
import client from '../../utils/contentfulClient';

export async function getServerSideProps(ctx: any) {
  const postId = ctx.query.slug;

  let data = await client.getEntry(postId);

  return {
    props: {
      post: data,
    },
  };
}

const PostDetails = ({ post }: any) => {
  console.log('post', post);

  return (
    <Container>
      <div>Post Details</div>
    </Container>
  );
};

export default PostDetails;
