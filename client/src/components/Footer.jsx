
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © Firing Guns '}
      <Link color="inherit" href="\">
       
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
      position: 'fixed',
      width: '100%',
        textAlign:'center',
        height: '50px',
    bottom: '0px',
    left: '0px',
    right: '0px',
    marginBottom: '0px',
    backgroundColor:"#e3f6f5"
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" color="white">Developed by: Harshil Singhal, Harshit Jajodia, Madhur Bhattad</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}