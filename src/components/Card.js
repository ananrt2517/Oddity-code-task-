import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
    '& img': {
      width: 'unset',
    },
  },
  button: {
    color: 'black',
    textDecoration: 'none',
    listStyle: 'none',
    fontWeight: 'bold',
  },
})

export default function ImgMediaCard(props) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={`img:${props.id}`}
          height="140"
          image={props.icon_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Fact
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.value}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/${props.id}`} className={classes.button}>
          Learn more
        </Link>
      </CardActions>
    </Card>
  )
}
