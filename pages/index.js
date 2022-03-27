import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Chatbot from 'react-chatbot-kit';

import config from '../utility/chatbot/config';
import ActionProvider from '../utility/chatbot/ActionProvider';
import MessageParser from '../utility/chatbot/MessageParser';
import LinksBar from '../components/layouts/LinksBar';
import SectionsBar from '../components/layouts/SectionsBar';
import useWindowSize from '../hooks/useWindowSize';
import { Box } from '@mui/system';
import MobileHeader from '../components/layouts/MobileHeader';

const WebHome = () => {
  return (
    <>
      <div className={styles.links}>
        <LinksBar />
      </div>
      <div className={styles.chatbox}>
        <Chatbot
          className={styles}
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
      <div className={styles.links}>
        <SectionsBar />
      </div>
    </>
  );
};

const MobileHome = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100vw' }}>
      <MobileHeader />
      <div className={styles.chatbox}>
        <Chatbot
          className={styles}
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </Box>
  );
};

export default function Home() {
  const { width } = useWindowSize();
  console.log(width);

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
      {width > 640 ? <WebHome /> : <MobileHome />}
    </div>
  );
}
