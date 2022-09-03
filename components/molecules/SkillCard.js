import {
  Box,
  Button,
  ButtonBase,
  Card,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { grey } from '@mui/material/colors';

function SkillCard({ name, skills, isDetailed }) {
  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 1,
        border: isDetailed ? 'none' : '',
      }}
      width={isDetailed ? '500px' : '100%'}
    >
      <Typography variant="h6">{name}</Typography>
      {skills.map(([name, val], idx) => {
        return (
          <Grid
            container
            display="flex"
            flexDirection="row"
            key={idx}
            width="100%"
            alignItems="center"
            sx={{ paddingTop: '3px' }}
          >
            <Grid item xs={4} md={1}>
              <Typography>{name}</Typography>
            </Grid>
            <Grid item xs={8}>
              <Box width="80%">
                <LinearProgress
                  variant="determinate"
                  value={val}
                  sx={{ borderRadius: 2 }}
                />
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Card>
  );
}

export default SkillCard;
