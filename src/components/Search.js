import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { getFactsRequest } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const useStyles = makeStyles((theme) => ({
  previousSearch: {
    listStyle: 'none',
    position: 'absolute',
    top: 24,
    width: '100%',
    borderRadius: 5,
    backgroundColor: 'white',
    border: '1px solid rgba(0,0,0, 0.2)',
    padding: 0,
    zIndex: 2,
  },
  singleSearch: {
    cursor: 'pointer',
    padding: '15px',
    borderBottom: '1px solid rgba(0,0,0, 0.1)',
    color: 'rgba(0,0,0,0.6)',

    '&:hover': {
      color: 'rgba(0,0,0,0.8)',
    },
  },
  text: {
    fontSize: 40,
    padding: '30px 0 50px 0',
  },
}))

export default function Search(props) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { search } = useSelector(state => state.facts);
  const [value, setvalue] = useState(search);
  const [previousSearches, setpreviousSearches] = useState([])
  const [isFocused, setisFocused] = useState(false)

  // eslint-disable-next-line
  const handlePreviousSearches = (search) => {
    const newList = previousSearches

    if (newList.length > 9) newList.pop()

    if (search.length > 2 && search !== 0) newList.unshift(search)

    setpreviousSearches(newList)
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(getFactsRequest(value))
      handlePreviousSearches(value)
    }, 500)

    return () => clearTimeout(delayDebounceFn)
    // eslint-disable-next-line
  }, [value])

  return (
    <div>
      <div className={classes.text}>Search to see Chuck Norris jokes!</div>
      <FormControl className={`${classes.margin} ${classes.textField}`}>
        <InputLabel>Search ...</InputLabel>
        <Input
          type="text"
          value={value}
          onFocus={() => setisFocused(true)}
          onBlur={() =>
            setTimeout(() => {
              setisFocused(false)
            }, 250)
          }
          onChange={(e) => setvalue(e.target.value)}
          endAdornment={
            isFocused &&
            previousSearches.length !== 0 && (
              <ul className={classes.previousSearch}>
                {previousSearches.map((item, index) => (
                  <li
                    key={`${index}-${item}`}
                    onClick={(e) => setvalue(e.target.innerHTML)}
                    className={classes.singleSearch}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )
          }
        />
      </FormControl>
    </div>
  )
}
