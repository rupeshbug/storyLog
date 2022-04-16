import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ReactTypingEffect from 'react-typing-effect';

const HomeBanner = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('./images/cover.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <Box minHeight="90vh" display="flex" alignItems="center">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              fontFamily="Satisfy, cursive"
              sx={{ marginBottom: '1rem' }}
              align="center"
              variant="h5"
              fontWeight="bold"
              color="textSecondary"
            >
              Hey Its me
            </Typography>
            <Typography
              fontWeight="medium"
              letterSpacing={2}
              align="center"
              variant="h5"
              marginBottom="0.5rem"
            >
              DIPESH CHAULAGAIN
            </Typography>
            {/* <Typography
              color="textSecondary"
              sx={{ marginBottom: '0.6rem' }}
              align="center"
            >
              Full Stack Developer
            </Typography> */}
            <ReactTypingEffect
              eraseSpeed={50}
              eraseDelay={100}
              speed={150}
              typingDelay={100}
              text={[
                'Full Stack Developer',
                'Creative Thinker',
                'Perpetual Learner',
              ]}
              displayTextRenderer={(text: any, i: any) => {
                return (
                  <>
                    {text.split('').map((char: any, i: any) => {
                      const key = `${i}`;
                      return (
                        <Typography
                          fontWeight="medium"
                          fontSize="1.2rem"
                          variant="caption"
                          key={key}
                          style={i % 2 === 0 ? { color: '#fb8c00' } : {}}
                        >
                          {char}
                        </Typography>
                      );
                    })}
                  </>
                );
              }}
            />
            <span
              style={{
                display: 'inline-block',
                width: '80px',
                height: '10px',
                margin: 'auto',
                borderRadius: '5px',
                backgroundColor: '#e67035',
                marginBottom: '0.6rem',
                marginTop: '0.5rem',
              }}
            ></span>
            <Typography
              sx={{ marginBottom: '1rem' }}
              letterSpacing={2}
              align="center"
              variant="h5"
              color="textSecondary"
              fontFamily="Satisfy, cursive"
              fontWeight="bold"
            >
              Welcome To
            </Typography>
            <Typography
              sx={{ marginBottom: '1rem', color: '#fb8c00' }}
              letterSpacing={3}
              align="center"
              variant="h4"
              fontWeight="medium"
            >
              STORY LOG
            </Typography>
            <Button size="small" variant="outlined">
              More About Me
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeBanner;
