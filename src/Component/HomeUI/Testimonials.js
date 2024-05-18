import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  testimonialContainer: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  testimonialCard: {
    marginTop: "10px",
    width: '80%',
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
    height: '100%',
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[4],
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: theme.shadows[8],
    },
    background: 'linear-gradient(to right, #fff, #fff)',
  },
  avatar: {
    width: "100%", // Adjust avatar width
    height: "auto", // Adjust avatar height
    marginBottom: theme.spacing(2),
  },
}));

const Testimonial = ({ image, name, role ,location}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className={classes.testimonialCard}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <Avatar alt={name} src={image} className={classes.avatar} />
          </Grid>
          <Grid item>
            <Typography variant="h6" align="center" className={classes.name}>
              {name}
            </Typography>
            <Typography variant="subtitle1" align="center" className={classes.role}>
              {role}
            </Typography>
            <Typography variant="subtitle1" align="center" className={classes.location}>
              {location}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

const Testimonials = () => {
  const classes = useStyles();

  const testimonials = [
    {
      image: 'assets/homepage/jagaikwadpic.jpeg',
      name: 'Jayram A Gaikwad',
      role: 'Founder, J A Gaikwad & Associates',
      location:"Katraj , Pune "
    },
    {
      image: 'assets/homepage/jagaikwadpic.jpeg',
      name: 'Anita Gaikwad',
      role: 'Partner, J A Gaikwad & Associates',
      location:"Nangaon , Daund "

    },
    {
      image: 'assets/resize_rahuri_team.jpg',
      name: 'Abhijeet Kaware',
      role: 'Partner , J A Gaikwad & Associates',
      location:"Rahuri , Ahmednagar "

    }
  ];

  return (
    <div className={classes.testimonialContainer}>
      <Typography variant='h4' style={{ display: 'flex', justifyContent: "center", fontWeight: "bold" }}>Our Team</Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </Grid>
    </div>
  );
};

export default Testimonials;
