import { useState } from 'react'
import {
    AppBar, 
    Toolbar, 
    IconButton, 
    Typography, 
    Button, 
    Drawer, 
    List,
    ListItem,
    ListItemIcon,
    ListItemText, 
} from '@material-ui/core'

import { useHistory } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import PersonIcon from '@mui/icons-material/Person'

import useStyles from './Header.style'

// JSS - Javascript Stylesheet


const Header = () => {
    const classes = useStyles()
    const history = useHistory()

    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleMenuClick = route => {
        history.push(route)
        handleToggleMenu()
    }

    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => handleToggleMenu()}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    My App
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
            <List>
                <ListItem button onClick={() => handleMenuClick('/')}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </ListItem>
                <ListItem button onClick={() => handleMenuClick('/customers')}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText>Lista de Clientes</ListItemText>
                </ListItem>
                <ListItem button onClick={() => handleMenuClick('/customers/add')}>
                    <ListItemIcon>
                        <PersonAddAltIcon />
                    </ListItemIcon>
                    <ListItemText>Cadastro de Clientes</ListItemText>
                </ListItem>
            </List>
        </Drawer>
        </>
    )
  }
  
  export default Header