import React from 'react';
import SkillCard from '../molecules/SkillCard';

const skills = [
  {
    name: 'Languages',
    skills: [
      ['JavaScript', 95],
      ['Python', 90],
      ['TypeScript', 85],
      ['HTML/CSS', 85],
      ['C++', 75],
      ['SQL', 70],
      ['Java', 65],
      ['Golang', 60],
      ['Solidity', 50],
    ],
  },
  {
    name: 'Frameworks / Tools',
    skills: [
      ['React', 95],
      ['NodeJS', 85],
      ['Vue', 80],
      ['Firebase', 80],
      ['MongoDB', 75],
      ['MySQL', 70],
      ['React Native', 60],
      ['Django', 55],
    ],
  },
];

function SkillCards({ isDetailed }) {
  return (
    <>
      {skills.map(({ name, skills }, idx) => {
        return (
          <SkillCard
            name={name}
            skills={skills}
            key={idx}
            isDetailed={isDetailed}
          />
        );
      })}
    </>
  );
}

export default SkillCards;
