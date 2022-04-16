import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import Link from 'next/link';

const BlogCard = ({
  title,
  category,
  date,
  categoryImage,
  thumbnail,
  description,
  postId,
}: any) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={category}
        subheader={new Date(date).toLocaleDateString(undefined, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
        avatar={
          <Avatar sx={{ objectFit: 'contain' }} src={categoryImage}>
            R
          </Avatar>
        }
        action={
          <Avatar
            color="secondary"
            sx={{ width: 24, height: 24, backgroundColor: '#ff8a65' }}
          >
            1
          </Avatar>
        }
      />
      <CardMedia
        sx={{ objectFit: 'contain' }}
        component="img"
        height="150"
        src={thumbnail}
        alt="thumbnail"
      />
      <CardContent>
        <Typography variant="subtitle1" marginBottom="1rem">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link passHref href={`/post/${postId}`}>
          <Button size="small">Read More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
