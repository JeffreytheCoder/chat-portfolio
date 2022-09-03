import React from 'react';
import ExperienceCard from '../molecules/ExperienceCard';

const experiences = [
  {
    name: 'Paramount',
    position: 'Software Engineer Intern',
    date: 'Jun 2022 - Aug 2022',
    imgSrc: 'paramount.png',
    works: [
      'Delivered internal tool for video content team to create multiple TV series by using React to parse, validate, and upload spreadsheets and show real-time reports for uploads, accelerating workflow to push new content on Paramount+',
      'Enhanced live sports CMS to search, create and update multiple seasons and series by implementing GraphQL endpoints using NodeJS and autocomplete form using React, laying out groundworks for future season page',
      'Refactored React components into a library documented with Storybook, reused by 5+ streaming team projects',
    ],
  },
  {
    name: 'Done.',
    position: 'Software Engineer Intern',
    date: 'Feb 2021 - May 2021',
    imgSrc: 'done.jpeg',
    works: [
      'Reconstructed Typeform to native surveys using React & Golang, providing customization & user-targeted data',
      'Scheduled end-to-end tests on production server using CronJob and configured emails notifications with Python SendGrid to developers working remote, reducing failure detection time and potential user issues',
      'Fetched data from MySQL to Retool and built admin-friendly GUI for operation team to modify user data efficiently',
    ],
  },
  {
    name: 'TechFin.AI',
    position: 'Frontend Developer Intern',
    date: 'Jul 2020 - Oct 2020',
    imgSrc: 'techfin.png',
    works: [
      'Built an alpha evaluation site using Vue.js from scratch, allowing 20+ Quant developers to edit Python scripts in-browser while synchronizing to server, run with history datasets and illustrate graphical reports for download',
      'Visualized real-time assets performance with ECharts and ensured synchronization of real-time data using Vuex',
      'Implemented dynamic authorization using Axios interceptor and Vue-router, improving security for trading platform',
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
