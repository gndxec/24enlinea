import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../assets/img/logo_violeta.png'
import Box from '@material-ui/core/Box';
import { Link as RouterLink } from 'react-router-dom';
import { auth } from '../../firebase';
import { useLocation } from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuUser from './MenuUser';
import { useSelector } from 'react-redux';


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
       // padding: theme.spacing(3),
    },
}));

export const Navbar = (props) => {



    const location = useLocation();
    const classes = useStyles();

    const { window } = props;


    const [email, setEmail] = useState();

    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                setEmail(userAuth.email)

            }
        });
    }, [])

    const logoutHandler = () => {
        auth.signOut()
    }

    const drawer = (
        <div style={{ padding: 12 }}>
            <div className={classes.toolbar} />
            <List>
                <ListItem style={{ borderRadius: 12, margin: "0px 0px 4px" }} component={RouterLink} to="/dashboard/home/" selected={location.pathname === '/dashboard/home/'} button>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Inicio" />
                </ListItem>
                <ListItem style={{ borderRadius: 12, margin: "0px 0px 4px" }} component={RouterLink} to="/dashboard/soporte-tecnico/" selected={location.pathname === '/dashboard/soporte-tecnico/'} button>
                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                    <ListItemText primary="Soporte Técnico" />
                </ListItem>
                <ListItem style={{ borderRadius: 12, margin: "0px 0px 4px" }} component={RouterLink} to="/dashboard/contratar/" selected={location.pathname === '/dashboard/contratar/'} button>
                    <ListItemIcon><LanguageIcon /></ListItemIcon>
                    <ListItemText primary="Contratar" />
                </ListItem>
                <ListItem style={{ borderRadius: 12, margin: "0px 0px 4px" }} component={RouterLink} to="/dashboard/traspaso-dominio/" selected={location.pathname === '/dashboard/traspaso-dominio/'} button>
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                    <ListItemText primary="Traspaso de Dominio" />
                </ListItem>
                <ListItem style={{ borderRadius: 12, margin: "0px 0px 4px" }} component={RouterLink} to="/dashboard/cambio-de-domicilio/" selected={location.pathname === '/dashboard/cambio-de-domicilio/'} button>
                    <ListItemIcon><HomeWorkIcon /></ListItemIcon>
                    <ListItemText primary="Cambio de Domicilio" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem component={RouterLink} to="/dashboard/cambio-de-plan/" selected={location.pathname === '/dashboard/cambio-de-plan/'} button>
                    <ListItemIcon><TrendingUpIcon /></ListItemIcon>
                    <ListItemText primary="Cambio de Plan" />
                </ListItem>
                <ListItem button component={RouterLink}  to="/dashboard/suspension-de-servicio/" selected={location.pathname === '/dashboard/suspension-de-servicio/'}>
                    <ListItemIcon><ClearIcon /></ListItemIcon>
                    <ListItemText primary="Suspension de Servicio" />
                </ListItem>
                <ListItem button component={RouterLink}  to="/dashboard/migracion-de-servicio/" selected={location.pathname === '/dashboard/migracion-de-servicio/'}>
                    <ListItemIcon><AccountTreeIcon /></ListItemIcon>
                    <ListItemText primary="Migración de Servicio" />
                </ListItem>
            </List>
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <>
            <AppBar style={{ zIndex: theme.zIndex.drawer + 1 }}  color="inherit" elevation={0} position="absolute">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div style={{ flexGrow: 1 }} >
                        <Box display="flex">
                            <img width={100} src={logo}></img>
                        </Box>
                    </div>
                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>
                    <MenuUser />
                    {/* <Button onClick={logoutHandler} variant="contained" color="primary" size="small">Cerrar sesión</Button>  */}
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden lgDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <div style={{
                minHeight: 72,
                '@media(min-width:0px) and (orientation:landscape)': {
                    minHeight: 72
                },
                '@media (min-width:600px)': {
                    minHeight: 72
                }
            }}></div>
        </>

    )
}