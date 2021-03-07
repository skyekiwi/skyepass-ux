import React from 'react';
import clsx from 'clsx'
import PropTypes from 'prop-types';
import {CssBaseline, ThemeProvider} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

import SkyePassTheme from '../theme'
import AppSideMenu from '../comp/AppSideMenu'
import AppContent from '../comp/AppContent'

const generate_style = (theme) => ({
  root: {
		display: 'flex',
	},
})
const useStyles = makeStyles(generate_style(SkyePassTheme));

export default function Main(){
  const classes = useStyles();
  return (
    <ThemeProvider theme={SkyePassTheme}>
      <div className={classes.root}>
        <CssBaseline />
        {AppSideMenu()}
        {AppContent()}
      </div>
    </ThemeProvider>
  );
}
