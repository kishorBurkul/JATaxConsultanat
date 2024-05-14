import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Collapse, Typography, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    boxShadow: theme.shadows[4],
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: theme.shadows[8],
    },
  },
  expand: {
    marginLeft: 'auto',
  },
}));

const VisionCard = ({ image, description, name }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {expanded ? description : `${description.slice(0, 100)}...`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={classes.expand}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          endIcon={<ExpandMoreIcon />}
        >
          {expanded ? 'Read less' : 'Read more'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default VisionCard;
