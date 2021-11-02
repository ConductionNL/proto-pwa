import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import makeStyles from '@mui/styles/makeStyles';
import {useRouter} from 'next/router';
import {Paper} from "@mui/material";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import {Login} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  footerStyle: {
    marginTop: 50
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer  className={classes.footerStyle}>

    </footer>
  );
}
