import { Box, Container, Typography } from '@mui/material';
import BlogCard from '../blog/BlogCard';

const RecentBlogs = ({ posts }: any) => {
  return (
    <Box>
      <Container>
        <Typography gutterBottom variant="h5" paddingTop="2rem">
          I Love ❤️ To Write What I Learn
        </Typography>
        <Typography
          marginBottom="3rem"
          variant="subtitle2"
          color="textSecondary"
        >
          My Recent Blogs
        </Typography>
        <Box
          paddingBottom="2rem"
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
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default RecentBlogs;
