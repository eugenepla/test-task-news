import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

export default function ContainedButton({
  onClick,
  color,
  title
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        onClick={onClick}
        variant="contained"
        color={color}
      >
        {title}
      </Button>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
     // margin: theme.spacing(1),
    },
  },
}));
