import { Container, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import client from '../utils/contentfulClient';
import { PlagiarismOutlined } from '@mui/icons-material';
import { useState } from 'react';
import CategoryDrawer from '../components/blog/CategoryDrawer';

export async function getServerSideProps() {
  let data = await client.getEntries({
    content_type: 'category',
  });

  return {
    props: {
      categories: data.items,
    },
  };
}

const Blogs = ({ categories }: any) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
      {
        <CategoryDrawer
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          categories={categories}
        />
      }
    </Container>
  );
};

export default Blogs;
