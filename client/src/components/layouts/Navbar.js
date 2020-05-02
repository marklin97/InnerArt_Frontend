import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { fade, makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import australia from '../../assets/images/nationalFlag/australia.png'

const useStyles = makeStyles(theme => ({
  title: {
    marginLeft: '30px',
    color: 'white',
    fontSize: '1.5vw'
  },
  navigator: {
    marginLeft: '30px',
    color: 'white',
    fontSize: '1vw'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.35)
    },
    width: '100%',
    marginLeft: '25%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 47),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 0, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
    transition: theme.transitions.create('width'),

    [theme.breakpoints.up('sm')]: {
      width: '40ch'
    }
  },
  flagIcon: {
    marginLeft: '15%'
  }
}))

const Navbar = () => {
  const classes = useStyles()
  const [input, setInput] = useState('')
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleSubmit = event => setInput(event.target.value)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <AppBar style={{ background: '#FF4500' }}>
      <Toolbar>
        <Typography className={classes.title} variant='h5'>
          Inner Art
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder='Search…'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>

        <div
          style={{
            marginLeft: '15%'
          }}
        >
          <Button
            aria-controls='simple-menu'
            aria-haspopup='true'
            className={classes.flagIcon}
            onClick={handleClick}
          >
            <img
              src={australia}
              alt='my image'
              style={{ height: '30px', width: '30px' }}
            />
          </Button>

          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <img
                src={australia}
                alt='my image'
                style={{ height: '30px', width: '30px' }}
              />
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <img
                src={australia}
                alt='my image'
                style={{ height: '30px', width: '30px' }}
              />
            </MenuItem>
          </Menu>
        </div>

        <Button className={classes.navigator}>Login</Button>
        <Button className={classes.navigator}>Sign up</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
