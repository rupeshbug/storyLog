import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import client from '../../utils/contentfulClient';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

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

  const contentRef = useRef<any>();

  const insertContent = () => {
    const htmlString = documentToHtmlString(post.fields.content, {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => `
          <img
            alt='alternate'
            src=${node.data.target.fields.file.url}
            width=${node.data.target.fields.file.details.image.width}
            height=${node.data.target.fields.file.details.image.height}
          />
        `,
      },
    });
    contentRef.current.innerHTML = htmlString;
  };

  useEffect(() => {
    insertContent();
  }, []);

  return (
    <Container>
      <Box marginTop="3rem">
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
        <Typography marginBottom="1rem" color="textSecondary">
          13 min read
        </Typography>
        <Typography sx={{ color: 'tomato' }} gutterBottom variant="h5">
          {post.fields.title}
        </Typography>
        <Typography
          color="textSecondary"
          marginTop="0.5rem"
          variant="subtitle1"
        >
          {post.fields.description}
        </Typography>

        <Box marginY="2rem" ref={contentRef}></Box>
      </Box>
    </Container>
  );
};

export default PostDetails;
