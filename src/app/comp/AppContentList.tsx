import React from 'react';
import clsx from 'clsx'
import PropTypes from 'prop-types';
import {CssBaseline, Divider, Drawer, Avatar, List, ListItem, Grid,
	ListSubheader, ListItemIcon, ListItemText, Typography} 
	from '@material-ui/core'

	import InboxIcon from '@material-ui/icons/MoveToInbox';

import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import SkyePassTheme from '../theme'
import AppContentMain from './AppContentMain'

const mainWindowWidth = 800;

const generate_style = (theme) => ({
  root: {
		display: 'flex',
	},
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: 0,
  },
  col: {
    padding: theme.spacing(3),
		paddingTop: theme.spacing(0),
		height: window.innerHeight
  },
  left: {
      borderRight: `3px solid ${theme.palette.primary.main}`,
  }, 
  right: {

  },
	header: {
		marginBottom: 30
	}, 
	scrollable: {
		height: window.innerHeight,
		overflowY: "auto"
	},
	listItem: {
		borderBottom: `1px solid ${theme.palette.primary.main_border}`,
	},
})


const useStyles = makeStyles(generate_style(SkyePassTheme));

export default function AppContentList(){
  const classes = useStyles();
	const [state, setState] = React.useState({
    open: false
  });

	const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open: open });
  };


  return (
		<Grid container>
			<Grid item xs={4}>
				<Grid container className={classes.header}>
					<Grid item xs={8}>
						<Typography variant="h4">Passwords</Typography>
					</Grid>
					<Grid item xs={4}>
						<svg width="40" height="40" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="22.5" cy="22.5" r="21.5" stroke="#6E6E6D" stroke-opacity="0.5" stroke-width="2"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M9.58334 22.5C9.58334 15.37 15.37 9.58334 22.5 9.58334C29.63 9.58334 35.4167 15.37 35.4167 22.5C35.4167 29.63 29.63 35.4167 22.5 35.4167C15.37 35.4167 9.58334 29.63 9.58334 22.5ZM23.7917 23.7917H28.9583V21.2083H23.7917V16.0417H21.2083V21.2083H16.0417V23.7917H21.2083V28.9583H23.7917V23.7917Z" fill="#6E6E6D"/>
						</svg>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<List classNames={classes.listContainer}>
					{["Twitter", "Gmail", "Github", "Twitter", "b", "c","a", "b", "c","a", "b", "c","a", "b", "c","a", "b", "c"]
					.map((item, index) => {
						return <ListItem button className={classes.listItem} key={index} 
							onClick={() => setState({open: true})}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={item} secondary={item}/>
						</ListItem>
					})}
				</List>
				<Drawer anchor="right" open={state.open} onClose={() => setState({open: false})}>
					{AppContentMain()}
				</Drawer>
			</Grid>
		</Grid>
  );
}