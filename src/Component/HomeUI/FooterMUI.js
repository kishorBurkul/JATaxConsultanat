import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Grid, MenuItem } from '@material-ui/core';
import { Facebook, Instagram, YouTube, Telegram, Business } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  toolbar: {
    minHeight: 36,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItem: {
    padding: 0,
    marginRight: theme.spacing(4),
    color: '#fff',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  socialIcons: {
    '& > *': {
      margin: theme.spacing(0, 0.5),
      color: '#fff',
    },
  },
}));

const FooterMUI = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" color="inherit">
                J A Gaikwad & Associates
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <MenuItem className={classes.menuItem}>Home</MenuItem>
              <MenuItem className={classes.menuItem}>Services</MenuItem>
              <MenuItem className={classes.menuItem}>About Us</MenuItem>
              <MenuItem className={classes.menuItem}>Contact Us</MenuItem>
            </Grid>
            <Grid item xs={12} sm={2}>
              <MenuItem className={classes.menuItem}>Map Location</MenuItem>
            </Grid>
            <Grid item xs={12} sm={2} className={classes.socialIcons}>
              <IconButton href="https://www.facebook.com/jagaikwadandassociates">
                <Facebook />
              </IconButton>
              <IconButton href="https://www.instagram.com/jagaikwadandassociates">
                <Instagram />
              </IconButton>
              <IconButton href="https://www.youtube.com/@jagaikwadandassociates">
                <YouTube />
              </IconButton>
              <IconButton href="https://t.me/jagaikwadandassociates">
                <Telegram />
              </IconButton>
              <IconButton href="https://business.google.com/">
                <Business />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default FooterMUI;
