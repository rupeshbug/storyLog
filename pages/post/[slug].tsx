import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
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
  console.log('details', post);

  return (
    <Container>
      <Box marginTop="3rem">
        <Typography gutterBottom variant="h5">
          {post.fields.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom color="textSecondary">
          {post.fields.author[0]}
          {' , '}
          {new Date(post.fields.dateCreated).toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Typography>
        <Typography color="textSecondary">13 min read</Typography>
      </Box>
    </Container>
  );
};

export default PostDetails;
