import React, {useEffect} from 'react';
import {alpha} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Link from "next/link";
import {useRouter} from 'next/router';
import Button from "@mui/material/Button";
import {ChevronRight} from "@mui/icons-material";
import {Stack} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  appbar: {
    backgroundColor: '#AD9156',
    boxShadow: "none"
  },

}));

const handleLogout = (context) => {

  if (typeof window !== "undefined") {
    context.setUser(null);
    sessionStorage.setItem('user', null);

    // @ts-ignore
    window.location.href = 'http://localhost/logout';
  }
}

export default function MainMenu() {

  const router = useRouter()
  const classes = useStyles();


  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appbar}>
        <Container>
          <Stack
            sx={{minHeight: '64px'}}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="h6" color="inherit">

            </Typography>
            <Typography variant="h6" color="inherit">

            </Typography>
          </Stack>
        </Container>
      </AppBar>
    </div>
  );
}
