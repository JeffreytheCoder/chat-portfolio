import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Badge } from '@mui/material';
import { Popover } from '@mui/material';
import Link from 'next/link';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

function LinksBar() {
  return (
    <>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar src="/avatar.jpg" sx={{ width: 50, height: 50 }} />
      </StyledBadge>
      <a
        href="https://www.linkedin.com/in/jeffrey-zepeng-yu/"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton>
          <LinkedInIcon sx={{ color: grey[700], width: 30, height: 30 }} />
        </IconButton>
      </a>
      <a
        href="https://github.com/JeffreytheCoder"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton>
          <GitHubIcon sx={{ color: grey[700], width: 30, height: 30 }} />
        </IconButton>
      </a>
      <a
        href="https://www.instagram.com/jeffreyzepeng/"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton>
          <InstagramIcon sx={{ color: grey[700], width: 30, height: 30 }} />
        </IconButton>
      </a>
    </>
  );
}

export default LinksBar;
