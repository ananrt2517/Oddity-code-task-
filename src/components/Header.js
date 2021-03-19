import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
  },
  link: {
    color: 'white',
    listStyle: 'none',
    textDecoration: 'none',
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Oddity code task
            </Typography>
            <Button color="inherit">
              <Link to="/" className={classes.link}>
                Landing
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}
