import React from 'react';
import clsx from 'clsx'
import PropTypes from 'prop-types';
import {CssBaseline, Divider, Drawer, Avatar, List, ListItem, BottomNavigation, BottomNavigationAction,
	ListSubheader, ListItemIcon, ListItemText, Typography} 
	from '@material-ui/core'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import NotesOutlinedIcon from '@material-ui/icons/NotesOutlined';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import FingerprintOutlinedIcon from '@material-ui/icons/FingerprintOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';

import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import SkyePassTheme from '../theme'


const drawerWidth = 240;

const generate_style = (theme) => ({
  root: {
		display: 'flex',
	},
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
		"-webkit-app-region": "drag",
    width: drawerWidth,
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.secondary.light,
		fontFamily: theme.typography.fontFamily
  },
  drawerHeader: {
		"-webkit-app-region": "drag",
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-begin',
		marginTop: 20,
		marginBottom: -20
  },
	orange: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500],
			width: 30,
			height: 30,
			fontSize: "1rem"
	},
	subheader: {
		color: theme.palette.secondary.light,
		fontSize: 12,
		marginBottom: -15,
		fontFamily: theme.typography.fontFamily
	},
	listIcons: {
		color: theme.palette.secondary.light
	}, 
	listText: {
		fontWeight: "bold",
		fontSize: 18,
		fontFamily: theme.typography.fontFamily
	},
	nav: {
		width: drawerWidth,
		position: "fixed",
		bottom: 0,
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.secondary.light
	},
	navButton: {
		color: theme.palette.secondary.light,
		
	}
})


const useStyles = makeStyles(generate_style(SkyePassTheme));

export default function AppSideMenu(){
  const classes = useStyles();

	const [value, setValue] = React.useState('recents');
  const [selectedIndex, setSelectedIndex] = React.useState(1);
	const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

	const mainCategories = [
		{Icon: NotesOutlinedIcon, Text: "All Items"}, 
		{Icon: FingerprintOutlinedIcon, Text: "Passwords"},
		{Icon: NoteOutlinedIcon, Text: "Secure Notes"}, 
		{Icon: CreditCardOutlinedIcon, Text: "Credit Cards"}
	]

	const appCategories = [
		{Icon: NotesOutlinedIcon, Text: "Polkadot Wallet"}, 
		{Icon: FingerprintOutlinedIcon, Text: "Eth Wallet"},
		{Icon: NoteOutlinedIcon, Text: "SSH Login Tool"}, 
	]


  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={true}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
						<Avatar className={classes.orange}>N</Avatar>
        </div>
        <List subheader={<ListSubheader className={classes.subheader}>Categories</ListSubheader>}>
          {mainCategories.map((Item, index) => {
							return <ListItem button key={index}
								selected={selectedIndex === index}
								onClick={(event) => handleListItemClick(event, index)}>
								<ListItemIcon className={classes.listIcons}>
									<Item.Icon /></ListItemIcon>
								<ListItemText disableTypography={true} className={classes.listText} primary={Item.Text}/>
							</ListItem>
						})}
        </List>

				<List subheader={<ListSubheader className={classes.subheader}>Apps</ListSubheader>}>
					{appCategories.map((Item, index) => {
							return <ListItem button key={index}
								selected={selectedIndex === index + mainCategories.length}
								onClick={(event) => handleListItemClick(event, index + mainCategories.length)}>
								<ListItemIcon className={classes.listIcons}>
									<Item.Icon /></ListItemIcon>
								<ListItemText disableTypography={true} className={classes.listText} primary={Item.Text}/>
							</ListItem>
						})}
        </List>
				<BottomNavigation value={value} onChange={handleChange} className={classes.nav}>
					<BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} className={classes.navButton}/>
					<BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} className={classes.navButton}/>
					<BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} className={classes.navButton} />
				</BottomNavigation>
      </Drawer>
    </div>
  );
}
