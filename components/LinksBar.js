import React, { useState, useRef } from 'react';
import {
  Avatar,
  IconButton,
  Typography,
  Box,
  ButtonBase,
  Button,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Badge } from '@mui/material';
import { Popover } from '@mui/material';
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

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
  const avatarRef = useRef(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handlePopoverClose = () => {
    setPopoverOpen(false);
  };

  return (
    <>
      <Box
        component={ButtonBase}
        onClick={() => setPopoverOpen(!popoverOpen)}
        ref={avatarRef}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar src="/avatar.jpg" sx={{ width: 50, height: 50 }} />
        </StyledBadge>
      </Box>

      <Popover
        open={popoverOpen}
        onClose={handlePopoverClose}
        anchorEl={avatarRef.current}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            border: 1,
            borderColor: grey[200],
            padding: 2,
            marginLeft: 2,
            borderRadius: '5%',
          },
        }}
        elevation={0}
      >
        <Box flex flexDirection="column">
          <Typography variant="h6">Jeffrey Yu</Typography>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <EmailIcon />
            <Typography
              variant="span"
              sx={{ marginLeft: '8px', marginTop: '5px' }}
            >
              jeffreyzepengyu@g.ucla.edu
            </Typography>
          </Box>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <PhoneIcon />
            <Typography
              variant="span"
              sx={{ marginLeft: '8px', marginTop: '5px' }}
            >
              213-468-2703
            </Typography>
          </Box>
          <a
            href="https://drive.google.com/file/d/1WHlytWajUt7juF6nKY5KhfabCXS_Fr1z/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Button>See my resume</Button>
          </a>
        </Box>
      </Popover>

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
