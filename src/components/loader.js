import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, CircularProgress } from '@material-ui/core';

export default function Loader({ loading }) {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <div className={classes.root}>
        <CircularProgress disableShrink size={60} />
      </div>
    </Backdrop>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fffff',
  },
}));
