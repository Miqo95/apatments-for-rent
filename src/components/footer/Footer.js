import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Button, Link, Typography } from "@mui/material";

const useStyles = makeStyles(() => {
  return {
    divRoot: {
      backgroundColor: "#2C2C2C",
      height: "100vh",
    },
    gItemTop: {
      backgroundColor: "#2C2C2C !important",
      color: "white !important",
    },
    button: {
      fontSize: "16px",
      background: "none",
      border: "none",
      margin: 15,
      paddingLeft: 20,
      paddingBottom: 15,
      color: "white",
      "&:hover": {
        color: "green",
        cursor: "pointer",
      },
    },
  };
});

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.divRoot}>
      <Box sx={{ textAlign: "center", padding: "30px 0px" }}>
        <Button className={classes.button} component={Link} to="/">
          HOME
        </Button>
        <button className={classes.button}>ABOUT US</button>
        <button className={classes.button}>MENU</button>
        <button className={classes.button}>DELIVERY</button>
        <button className={classes.button}>GALLERY</button>
        <button className={classes.button}>CONTACT</button>
      </Box>
    </div>
  );
}
