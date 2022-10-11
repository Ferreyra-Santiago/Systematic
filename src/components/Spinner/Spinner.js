import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = () => {
  return (
<div className="flex justify-center content-center">
  <Box>
      <CircularProgress />
    </Box>
</div>
  );
}

export default Spinner;