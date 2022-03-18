import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Chatbot from 'react-chatbot-kit';

import config from '../utility/chatbot/config';
import ActionProvider from '../utility/chatbot/ActionProvider';
import MessageParser from '../utility/chatbot/MessageParser';

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
