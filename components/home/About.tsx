import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MyServices from './MyServices';

const About = () => {
  return (
    <Container>
      <Box marginY="3rem">
        <Typography color="#fb8c00" gutterBottom variant="h4">
          About Me
        </Typography>
        <Typography color="textSecondary">
          Its personal and professional
        </Typography>

        <Grid marginTop="2rem" container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>1</Box>
            <Typography marginTop="2rem" fontSize="1.2rem" textAlign="justify">
              I'm a Full Stack Developer. I can create beautiful, interactive
              and fast user interfaces on frontend and backend solutions for
              your business requirements. I can also create cross platform
              native mobile apps. I am an undergrad studying computer science in
              Nepal. I have worked on various projects professionally
              individually. I am enjoy working in team and changing ideas into
              working applications.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <MyServices />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
