import React from 'react'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function MoreMenu() {
  return (
    <Box>

<Box sx={{borderBottom: '1px solid rgba(48,48,48,1)'}}>
    <Link to='../'>
    <ArrowCircleLeftOutlinedIcon sx={{color: 'rgba(48,48,48,1)'}}/>

    </Link>

</Box>
    </Box>
  )
}

export default MoreMenu