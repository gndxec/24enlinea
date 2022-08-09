import React, { Fragment } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import { logout } from '../../redux/actions/userActions';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import Avatar from '@material-ui/core/Avatar';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardHeader from '@material-ui/core/CardHeader';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import HomeIcon from '@material-ui/icons/Home';
import DomainIcon from '@material-ui/icons/Domain';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import { useLocation } from 'react-router-dom'
import { logout } from '../../redux/actions/userActions';
import WorkIcon from '@material-ui/icons/Work';

import { Badge } from '@material-ui/core';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // display: 'flex'  
    },
    drawer: {

        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
        width: drawerWidth,
        flexShrink: 0,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    appBar2: {

        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,

    },
    menuButton: {
        marginRight: theme.spacing(2),

        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: {
        minHeight: 72,
        '@media(min-width:0px) and (orientation:landscape)': {
            minHeight: 72
        },
        '@media (min-width:600px)': {
            minHeight: 72
        }
    },
    cardHeader: {
        padding: "0px",
    },
    drawerPaper: {
        width: drawerWidth,

        //backgroundColor: '#101010',
        border: 'none',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    grow: {
        width: '500px',
    },
    title: {
        textDecoration: 'none'
    },
    center: {
        flexGrow: 1,
        textAlign: 'center',
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    drawerContainer: {
        overflow: 'auto',
    },
    closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
    },
    searchCenter: {
        flexGrow: 1,
        textAlign: "center"
    },

    searchWidth: {
        width: '100px'
    },

    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',

        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },

    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
        transition: theme.transitions.create('width'),
        //width: '100%',
        //[theme.breakpoints.up('md')]: {
        //  width: '20ch',
        //},
    },

    link: {
        margin: theme.spacing(1, 1.5),
    },
}));

function MenuUser(props) {

    const userDetails = useSelector(state => state.userDetails)
    const { userInfo } = userDetails


    const location = useLocation();

    //  const { userInfo } = userAuth
    const dispatch = useDispatch()
    const logoutHandler = () => {
        console.log('a')
        //setOpen(null);
        dispatch(logout())
    }
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    //Frontend
    const classes = useStyles();


    const [openTournament, setOpenTournament] = React.useState(false);

    const [openScrims, setOpenScrims] = React.useState(false);
    const [openCreators, setOpenCreators] = React.useState(false);
    const handleClickTournament = () => {
        setOpenTournament(!openTournament);

    };

    const handleClickScrims = () => {
        setOpenScrims(!openScrims);
    };
    const handleClickCreators = () => {
        setOpenCreators(!openCreators);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const { window } = props;
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const prevOpen = React.useRef(open);
    React.useEffect(() => {

        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        if (location.pathname === `/`) {
            //  console.log('en inicio')
            setOpenTournament(false);
        }
        // console.log(openTournament)
        prevOpen.current = open;
    }, [open, location]);


    const drawer = (
        <div style={{ width: '100%' }}>
            <div className={classes.toolbar} />
            <List style={{ paddingTop: '0px' }}>
                <ListItem selected={"/" === location.pathname} component={RouterLink} to="/" button >
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary='Inicio' />
                </ListItem>
                <ListItem button component={RouterLink} to="/accounts/students/">
                    <ListItemIcon><FavoriteIcon /></ListItemIcon>
                    <ListItemText primary="Estudiantes" />
                </ListItem>
                <ListItem button disabled onClick={handleClickTournament}>
                    <ListItemIcon>
                        <LocalBarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Eventos" />
                    {openTournament ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openTournament} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem selected={"/tournament/search" === location.pathname} component={RouterLink} to="/tournament/search" button className={classes.nested}>
                            <ListItemText primary="Buscar torneos" />
                        </ListItem>

                        <ListItem selected={"/tournament/create" === location.pathname} component={RouterLink} to="/tournament/create" button className={classes.nested}>
                            <ListItemText primary="Crear torneo" />
                        </ListItem>

                        <ListItem selected={"/tournament/hosted" === location.pathname} button component={RouterLink} to="/tournament/hosted" className={classes.nested}>
                            <ListItemText primary="Organizados" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button disabled onClick={handleClickScrims}>
                    <ListItemIcon>
                        <DomainIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contactos" />
                    {openScrims ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openScrims} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Buscar scrims" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Crear scrims" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Mis scrims" />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button disabled onClick={handleClickCreators}>
                    <ListItemIcon>
                        <PeopleAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Grupos" />
                    {openCreators ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openCreators} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Buscar equipos" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Crear equipos" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Mis equipos" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button disabled>
                    <ListItemIcon><WorkIcon /></ListItemIcon>
                    <ListItemText primary="Trabajos" />
                </ListItem>


            </List>

            <Divider />
            <List>
                <ListItem button disabled component={RouterLink} to='/'>

                    <ListItemText primary={`© ${new Date().getFullYear()} Sebastian Mite productions.`} />
                </ListItem>

            </List>

            <AppBar />


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <React.Fragment>
            <IconButton
                aria-label="account of current user"
                aria-haspopup="true"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                //onClick={handleToggle}
                color="inherit"
                onClick={logoutHandler}
            >
               <Avatar  /> 
            </IconButton>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (

                    <Paper elevation={1}>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                               <MenuItem onClick={handleClose} component={RouterLink} >
                                    <CardHeader className={classes.cardHeader}
                                        avatar={
                                            <Avatar

                                                aria-label="recipe"
                                                className={classes.large} />
                                        }
                                        title={
                                            <Typography className={classes.userLink} color="inherit" variant="body1"  >
                                                {userInfo.nombre}
                                            </Typography>
                                        }
                                        subheader={userInfo.correo}
                                    />
                                </MenuItem>
                                <MenuItem onClick={handleClose} component={RouterLink} to='/accounts/edit/'>
                                    <ListItemIcon>
                                        <SettingsIcon />
                                    </ListItemIcon>
                                    <Typography variant="inherit">Editar perfil</Typography>
                                </MenuItem>
                                <MenuItem onClick={logoutHandler}>
                                    <ListItemIcon>
                                        <ExitToAppIcon />
                                    </ListItemIcon>
                                    Cerrar sesión
                                </MenuItem>
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                )}
            </Popper>   
            {/*<div>
                <Button className={classes.link} color="primary" size="small" component={RouterLink} to='/login/'>Iniciar sesión</Button>
                <Button className={classes.link} color="default" size="small" component={RouterLink} to='/signup/'>Registrarse</Button>
            </div> */}
        </React.Fragment>
    )
}

export default MenuUser
