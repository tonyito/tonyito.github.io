import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: '#f4f4f4',
    maxWidth: 345,
    minWidth: 320,
    padding: theme.spacing(1),
    disableRipple: true
  },
  media: {
    height: 160
  }
}));

const CardContainer = ({
  jpn,
  title,
  content,
  imageSource,
  url
}: {
  jpn: boolean;
  title: string;
  content: string;
  imageSource: string;
  url: string;
}) => {
  const classes = useStyles();
  return (
    <>
      {!jpn && (
        <Grid item xs>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={imageSource}
              title='Project'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {title}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small' color='primary' href={url}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default CardContainer;
