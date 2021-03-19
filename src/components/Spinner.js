import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}))

export default function CircularIndeterminate(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {props.isLoading && <CircularProgress />}
    </div>
  )
}
