import React from 'react';
import ExperienceCard from '../molecules/ExperienceCard';

const experiences = [
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
    name: 'Duo MFA passcode chrome extension',
    position: 'EasyDuo',
    date: 'Feb 2021 - Apr 2021',
    imgSrc: 'easyduo.png',
    link: 'https://chrome.google.com/webstore/detail/easy-duo-authentication/gminifhfphcinahingelhehkfagoghjk',
    works: [
      "Jailbroke Duo's Multi-factor Authentication by reverse engineering passcodes generation using HOTP algorithm",
      'Built a Chorme extension to compute and allow copying new passcodes, saving 80% of login time for 1k+ users',
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
