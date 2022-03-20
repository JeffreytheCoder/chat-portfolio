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

function SkillCard({ name, skills }) {
  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 1,
      }}
      width="100%"
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
          >
            <Grid item xs={3} md={1}>
              <Typography>{name}</Typography>
            </Grid>
            <Grid item xs={8}>
              <Box width="50%" marginLeft={2}>
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
