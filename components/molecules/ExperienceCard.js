import {
  Box,
  Button,
  ButtonBase,
  Card,
  IconButton,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { grey } from '@mui/material/colors';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';

function ExperienceCard({
  name,
  position,
  date,
  imgSrc,
  works,
  link,
  isDetailed,
}) {
  const [readMore, setReadMore] = useState(false);

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
        <Box
          display="flex"
          flexDirection="row"
          width="100%"
          alignItems="center"
        >
          <Typography variant="h6">{position}</Typography>
          {link && (
            <Box ml={0.2}>
              <a href={link} target="blank">
                <IconButton>
                  <LaunchRoundedIcon fontSize="small" />
                </IconButton>
              </a>
            </Box>
          )}
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          width="100%"
          alignItems="center"
          marginBottom={1}
        >
          <Typography color={grey[600]}>{name}</Typography>
          <Typography color={grey[600]} marginLeft={1}>
            {date}
          </Typography>
        </Box>
        {readMore || isDetailed ? (
          <>
            {works.map((work, idx) => {
              return (
                <Box key={idx} mb={0.5}>
                  <Typography width="95%">• {work}</Typography>
                </Box>
              );
            })}
          </>
        ) : (
          <ButtonBase
            sx={{
              width: 'fit-content',
              textTransform: 'none',
              cursor: 'pointer',
            }}
            onClick={() => setReadMore(!readMore)}
          >
            <Typography color={grey[600]}>See my work</Typography>
          </ButtonBase>
        )}
      </Box>
    </Card>
  );
}

export default ExperienceCard;
