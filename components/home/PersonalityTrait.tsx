import { LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { motion, useMotionValue } from 'framer-motion';

const PersonalityTrait = () => {
  return (
    <>
      <Box marginBottom="10px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Extroversion</Typography>
          <Typography variant="h5">70%</Typography>
        </Box>
        <LinearProgress
          sx={{ height: '15px' }}
          color="warning"
          variant="determinate"
          value={70}
        />
      </Box>
      <Box marginBottom="10px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Openess</Typography>
          <Typography variant="h5">80%</Typography>
        </Box>
        <LinearProgress
          sx={{ height: '15px' }}
          color="warning"
          variant="determinate"
          value={80}
        />
      </Box>
      <Box marginBottom="10px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Industrious</Typography>
          <Typography variant="h5">80%</Typography>
        </Box>
        <LinearProgress
          sx={{ height: '15px' }}
          color="warning"
          variant="determinate"
          value={70}
        />
      </Box>
    </>
  );
};

export default PersonalityTrait;
