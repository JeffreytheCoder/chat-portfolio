import React, { useEffect, useState } from 'react';
import styles from '../styles/Options.module.css';

const PersonalOptions = ({ getOptions, actionProvider }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    console.log(actionProvider);
    setOptions(getOptions(actionProvider));
    console.log(getOptions(actionProvider));
  }, []);
  // const options = [
  //   {
  //     text: 'good',
  //     id: 1,
  //   },
  //   { text: 'bad', handler: () => {}, id: 2 },
  // ];

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

export default PersonalOptions;
