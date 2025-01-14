import React from 'react';
import styles from './ChevronToggle.module.css';

export const ChevronToggle: React.FC<{
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ expanded, setExpanded }) => {
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.chevronToggleContainer}>
      <button onClick={toggleExpansion} className={styles.chevronButton}>
        <svg
          className={`${styles.chevronIcon} ${expanded ? styles.rotate90 : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};
