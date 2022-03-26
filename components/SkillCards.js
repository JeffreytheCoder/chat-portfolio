import React from 'react';
import SkillCard from './SkillCard';

const skills = [
  {
    name: 'Languages',
    skills: [
      ['JavaScript', 90],
      ['Python', 85],
      ['HTML/CSS', 85],
      ['C++', 70],
      ['TypeScript', 60],
      ['Go', 50],
      ['Java', 50],
    ],
  },
  {
    name: 'Frameworks / Tools',
    skills: [
      ['React', 90],
      ['Vue', 85],
      ['Express', 75],
      ['MongoDB', 75],
      ['React Native', 65],
      ['Firebase', 65],
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
