import React, { useEffect, useState } from 'react';
import styles from '../styles/Options.module.css';

const MoodOptions = (props) => {
  // const [options, setOptions] = useState([]);

  // useEffect(() => {
  //   console.log(actionProvider);
  //   setOptions(getOptions(actionProvider));
  //   console.log(getOptions(actionProvider));
  // }, []);
  // console.log(props.actionProvider);
  const options = [
    {
      text: 'good',
      handler: () => props.actionProvider.handleGoodMood,
      id: 1,
    },
    { text: 'bad', handler: () => {}, id: 2 },
  ];

  return (
    <div className={styles.container}>
      {options.map((option) => {
        return (
          <button
            className={styles.button}
            key={option.id}
            onClick={option.handler}
          >
            {option.text}
          </button>
        );
      })}
    </div>
  );
};

export default MoodOptions;
