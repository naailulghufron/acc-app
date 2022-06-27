import React from "react";
import Head from "next/head";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import useStyles from '../utils/style';

export default function Layout({ children }) {
  const classes = useStyles()
  return (
    <div>
      <Head>
        <title>Acc App</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Acc App</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>
        {children}
      </Container>
      {/* <Button className={classes.root}>Styled with Hook API</Button> */}
      <footer className={classes.footer}>
        <Typography>
          Allright Reserver By Ghufron - AppDev
        </Typography>
      </footer>
    </div>
  )
}