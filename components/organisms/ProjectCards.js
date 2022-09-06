import React from 'react';
import ExperienceCard from '../molecules/ExperienceCard';

const experiences = [
  {
    name: 'Medical records Decentralized App',
    position: 'MedChain',
    date: 'Feb 2022 - Apr 2022',
    imgSrc: 'medchain.jpg',
    link: 'https://devpost.com/software/medchain-k4wzry',
    works: [
      'Implemented Solitidy smart contracts to store medical records on Interplanetary File System and link to a user block on Ethureum blockchain, allowing patients to own their medical records independent from hospitals',
      'Built React website to connect with MetaMask for authentication and search on-chain records using Web3.js',
      'Won 3rd place of NextStep hackathon, sponsored by Ethereum',
    ],
  },
  {
    name: 'Survey auto-filling tool',
    position: 'UCLA CAT',
    date: 'May 2022 - Jul 2022',
    imgSrc: 'uclacat.png',
    link: 'https://github.com/MubaiHua/ucla-cat',
    works: [
      'Implemented manipulation of website actions using Python Selenium & ChromeDriver with conditional branching',
      'Automated Mac & Win distributions using Github Action and deployed CronJob on user’s OS to schedule runs',
    ],
  },
  {
    name: 'Health emergency alert for seniors',
    position: 'Cura',
    date: 'Apr 2022 - Apr 2022',
    imgSrc: 'cura.jpg',
    link: 'https://www.hackster.io/jeffreythecoder/cura-a-health-emergency-alert-for-seniors-we-care-ee08d1',
    works: [
      "Design and built a smart wrist band that detects the wearer's health emergency and sends SMS alert to emergency contacts",
      "Incorporated Twilio API into WiFi module to send SMS with wearer's location triangulated by WiFi positioning system",
      'Assured accurate fall detection by implementing three-stage change in gravitational acceleration from research results',
      'Winning project of World Wide Health track and Best Online Demo in LA Hacks 2022',
    ],
  },
  {
    name: 'UCLA dinning hall menu App',
    position: 'BruinEats',
    date: 'Feb 2022 - Apr 2022',
    imgSrc: 'bruineats.png',
    link: 'https://github.com/BruinEats/BruinEats',
    works: [
      'Managed 5-dev team, designed database schema, APIs & App structure, and led weekly sprints & code reviews',
      'Implemented web crawer using Puppeteer.js to fetch daily menu and scheduled runs using MongoDB Triggers',
      'Applied self-made MERN stack boilerplate and unifies code format using Prettier, reducing development frictions',
    ],
  },
  {
    name: 'UCLA club recruitment website',
    position: 'OnCampus',
    date: 'Oct 2020 - Jan 2021',
    imgSrc: 'oncampus.png',
    link: 'https://oncampus.us',
    works: [
      'Cleaned 800+ unorganized club tags to 30, designed new PostgreSQL schema and implemented React autocomplete form to search and create tags, improving club searching experience for 200+ monthly active users',
      'Enhanced club search with pagination using Django and React, increasing loading speed for search results',
    ],
  },
];

function ProjectCards({ isDetailed }) {
  return (
    <>
      {experiences.map(({ name, position, date, imgSrc, works, link }, idx) => {
        return (
          <ExperienceCard
            name={name}
            position={position}
            date={date}
            imgSrc={imgSrc}
            works={works}
            link={link}
            key={idx}
            isDetailed={isDetailed}
          />
        );
      })}
    </>
  );
}

export default ProjectCards;
