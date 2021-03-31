
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="\">
        Your Website
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
    backgroundColor:"#e4fbff"
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body2">Developers: Harshit Jajodia, Harshil Singhal, Madhur Bhattad</Typography>
          <Typography variant="body1">Team Name: Firing Guns   <InstagramIcon/> <FacebookIcon /> <TwitterIcon /></Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}