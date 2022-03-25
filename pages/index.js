import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Chatbot from 'react-chatbot-kit';

import config from '../utility/chatbot/config';
import ActionProvider from '../utility/chatbot/ActionProvider';
import MessageParser from '../utility/chatbot/MessageParser';

import { Avatar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Badge } from '@mui/material';
import { Popover } from '@mui/material';

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

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Inbox · Jeffrey Yu</title>
        <meta
          name="description"
          content="Jeffrey Yu | Software Engineer | Personal Website "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.links}>
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
          <LinkedInIcon sx={{ color: grey[700], width: 30, height: 30 }} />
        </a>
        <a
          href="https://github.com/JeffreytheCoder"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon sx={{ color: grey[700], width: 30, height: 30 }} />
        </a>
        <a
          href="https://www.instagram.com/jeffreyzepeng/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon sx={{ color: grey[700], width: 30, height: 30 }} />
        </a>
      </div>
      <div className={styles.chatbox}>
        <Chatbot
          className={styles}
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
}
