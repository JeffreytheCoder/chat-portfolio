import React, { useEffect, useState } from 'react';
import styles from '../styles/Options.module.css';

const Options = ({ getOptions, actionProvider }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(getOptions(actionProvider));
  }, []);

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

export default Options;
