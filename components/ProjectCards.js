import React from 'react';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    name: 'OnCampus',
    position: 'Fullstack Developer',
    date: 'Oct 2020 - Feb 2021',
    imgSrc: 'oncampus.png',
    works: [
      'Developed and maintained a UCLA club recruitment website, OnCampus, with React and Django, having 200+ monthly active users browsing 600+ clubs',
      'Revamped MySQL schema by designing new database logic, cleaning existing data, and integrating autocomplete to standardize frontend input',
      'Accelerated the loading speed of search results by 23% by implementing search pagination to minimize API calls and integrating Cloudflare caching',
    ],
  },
  {
    name: 'VMAWalk',
    position: 'Frontend Developer',
    date: 'Mar 2020 - Jul 2020',
    imgSrc: 'vmawalk.png',
    works: [
      'Launched a course and teacher review website for Vanke Meisha Academy, registered by 200+ students to feedback on 1k+ courses and teachers',
      'Delivered faster keyword matching with clumsy course database by implementing fuzzy search and autocomplete',
      'Lead product design to development process for three devs, supervising scrum project management with Jira and code reviews on GitHub',
    ],
  },
];

function ProjectCards() {
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
          />
        );
      })}
    </>
  );
}

export default ProjectCards;
