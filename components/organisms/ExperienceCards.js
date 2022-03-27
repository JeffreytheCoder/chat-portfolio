import React from 'react';
import ExperienceCard from '../molecules/ExperienceCard';

const experiences = [
  {
    name: 'Done.',
    position: 'Software Engineer Intern',
    date: 'Feb 2021 - Jun 2021',
    imgSrc: 'done.jpeg',
    works: [
      'Reconstructed the user feedback workflow with React and Survey.js to replace Typeform integration, allowing user-targeted feedback collections',
      'Automated CI/CD pipeline by scheduling Venom e2e tests and configured notifications with Python Sendgrid, synchronizing remote team members',
      "Increased the efficiency of operation team handling users' issues by migrating MySQL data to Retool and building admin-friendly UI interfaces",
    ],
  },
  {
    name: 'TechFin.AI',
    position: 'Frontend Developer Intern',
    date: 'Jul 2020 - Oct 2020',
    imgSrc: 'techfin.png',
    works: [
      'Built an alpha evaluation site using Vue.js from scratch, allowing 30+ engineers to edit and run Python scripts on Codemirror and synchronizing code to server',
      'Improved security of the trading platform by implementing identification of user type using Axios interceptor and Vue-router dynamic routing',
      'Communicated with UI designers and released a new company website using Nuxt.js with SSR measures, increasing organic traffic by 37% in 3 months',
      'Visualized real-time assets performance with ECharts and optimized rendering speed using Vuex state management and switching to CDN dependencies',
    ],
  },
];

function ExperienceCards({ isDetailed }) {
  return (
    <>
      {experiences.map(({ name, position, date, imgSrc, works }, idx) => {
        return (
          <ExperienceCard
            name={name}
            position={position}
            date={date}
            imgSrc={imgSrc}
            works={works}
            key={idx}
            isDetailed={isDetailed}
          />
        );
      })}
    </>
  );
}

export default ExperienceCards;
