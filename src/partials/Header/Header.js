import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'

import MenuIcon from '@mui/icons-material/Menu'

import useStyles from './Header.style'

// JSS - Javascript Stylesheet


const Header = () => {
    const classes = useStyles()

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    My App
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
  }
  
  export default Header