import { Container, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import client from '../../utils/contentfulClient';
import { PlagiarismOutlined } from '@mui/icons-material';
import { useState } from 'react';
import CategoryDrawer from '../../components/blog/CategoryDrawer';
import BlogCard from '../../components/blog/BlogCard';

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

  return (
    <Container>
      <Box marginTop="2rem">
        <Button
          startIcon={<PlagiarismOutlined />}
          onClick={() => setDrawerOpen(true)}
          variant="outlined"
          size="small"
        >
          Browse Categories
        </Button>

        <Typography sx={{ marginY: '2rem' }} variant="h5">
          Recent Posts
        </Typography>
        <Box
          marginBottom="2rem"
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {posts.map((post: any, i: any) => (
            <BlogCard
              key={i}
              title={post.fields.title}
              author={post.fields.author}
              category={post.fields.category[0].fields.name}
              date={post.fields.dateCreated}
              categoryImage={
                post.fields.category[0].fields.banner.fields.file.url
              }
              thumbnail={post.fields.thumbnail.fields.file.url}
              description={post.fields.description}
              postId={post.sys.id}
              articleNumber={post.fields.articleNum}
            />
          ))}
        </Box>
      </Box>
      {<CategoryDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />}
    </Container>
  );
};

export default Blogs;
