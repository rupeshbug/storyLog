import { Container, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import client from '../utils/contentfulClient';
import { PlagiarismOutlined } from '@mui/icons-material';
import { useState } from 'react';
import CategoryDrawer from '../components/blog/CategoryDrawer';

export async function getServerSideProps() {
  let data = await client.getEntries({
    content_type: 'post',
    limit: 10,
  });

  return {
    props: {
      posts: data.items,
    },
  };
}

const Blogs = ({ posts }: any) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  console.log('posts', posts);

  return (
    <Container>
      <Box marginTop="2rem">
        <Button
          startIcon={<PlagiarismOutlined />}
          onClick={() => setDrawerOpen(true)}
          variant="outlined"
        >
          Browse Categories
        </Button>

        <Typography sx={{ marginY: '2rem' }} variant="h4">
          Recent Posts
        </Typography>
      </Box>
      {<CategoryDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />}
    </Container>
  );
};

export default Blogs;
