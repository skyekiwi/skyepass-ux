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

import AppContentList from './AppContentList'
// import AppContentMain from './AppContentMain'

const generate_style = (theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: 0
  }
})
const useStyles = makeStyles(generate_style(SkyePassTheme));

export default function AppContent(){
  const classes = useStyles();
  return (
		<main className={classes.content}>
			{AppContentList()}
			{/* {AppContentMain()} */}
			{/* <div className={classes.drawerHeader} /> */}
		</main>
  );
}
