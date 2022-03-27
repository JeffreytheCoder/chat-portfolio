import { Box, Button, ButtonBase, Card, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { grey } from '@mui/material/colors';

function BlogCard({ name, link, imgSrc, isDetailed }) {
  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 1,
        border: isDetailed ? 'none' : '',
      }}
      width="100%"
    >
      <Avatar src={`/${imgSrc}`} alt={imgSrc} sx={{ width: 50, height: 50 }} />
      <Box
        display="flex"
        flexDirection="column"
        marginLeft={2}
        width="100%"
        justifyContent="flex-start"
      >
        <Typography variant="h6">{name}</Typography>
        <ButtonBase
          sx={{
            width: 'fit-content',
            textTransform: 'none',
            cursor: 'pointer',
          }}
        >
          <a href={link} target="_blank" rel="noreferrer">
            <Typography color={grey[600]}>See my blogs</Typography>
          </a>
        </ButtonBase>
      </Box>
    </Card>
  );
}

export default BlogCard;
