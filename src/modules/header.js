import React from 'react';
import { makeStyles } from '@mui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';

import { USER_GITHUB_URL } from '../config'

const Header = ({}) => {
  const styles = useStyles();

  return (
    <>
      <div className={styles.userInfoContainer}>
        <p className={styles.developerName}>EUGENE PLAKHOTNIKOV</p>
        <a target="_blank"
          rel="noreferrer" 
          href={USER_GITHUB_URL}>  
          <GitHubIcon fontSize='large' />
        </a>
      </div>
    </>
  );
};

const useStyles = makeStyles(() => ({
    userInfoContainer: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    developerName: {
        paddingRight: '10px',
        fontFamily: 'canada-type-gibson',
        fontSize: '20px',
        fontWeight: 600,
        color: 'blue'
    }
}));

export default Header;
