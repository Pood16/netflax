import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Error({error}) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">{error}</Alert>
    </Stack>
  );
}