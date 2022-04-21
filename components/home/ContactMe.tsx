import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

const ContactMe = () => {
  return (
    <Container>
      <Box
        marginY="3rem"
        flexWrap="wrap"
        display="flex"
        justifyContent="space-between"
      >
        <Box>Show Moon</Box>
        <Box
          sx={{ flexBasis: { xs: '100%', md: '50%' } }}
          display="flex"
          flexDirection="column"
        >
          <Typography gutterBottom variant="h5">
            Leave Me Your Message Here
          </Typography>
          <Typography gutterBottom color="textSecondary">
            I will get back to you quickly
          </Typography>
          <TextField
            sx={{ marginY: '1rem' }}
            id="standard-basic"
            label="Your Name, Company Name"
          />
          <FormControl sx={{ marginBottom: '1rem' }} fullWidth>
            <InputLabel id="demo-simple-select-label">
              {' '}
              Select Subject
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              variant="filled"
              // value={age}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Job Offer</MenuItem>
              <MenuItem value={20}>Want To Hire For A Project</MenuItem>
              <MenuItem value={30}>Consulting And Guidence</MenuItem>
              <MenuItem value={30}>Something Else ?</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="standard-textarea"
            label="Write Your Message and Queries Here"
            placeholder="I appreciate detailed messages"
            multiline
            minRows={3}
          />
          <Button sx={{ marginTop: '1rem' }} variant="outlined">
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactMe;
