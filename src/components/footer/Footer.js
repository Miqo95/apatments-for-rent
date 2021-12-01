import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import SmsIcon from "@mui/icons-material/Sms";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AdbIcon from "@mui/icons-material/Adb";

const useStyles = makeStyles(() => {
  return {
    divRoot: {
      backgroundColor: "#2C2C2C",
    },
    gItemTop: {
      backgroundColor: "#2C2C2C !important",
      color: "white !important",
    },
    button: {
      fontSize: "16px !important",
      margin: "15px !important",
      color: "white !important",
      "&:hover": {
        color: "#15A64A !important",
        cursor: "pointer",
      },
    },
    footerCenter: {
      display: "flex",
      justifyContent: "center",
      color: "white",
    },
    footerCentreChild: {
      width: "17%",
    },
    icon: {
      width: "50px !important",
    },
    lincIcon: {
      padding: 20,
      display: "flex",
      justifyContent: "center",
    },
    finFut: {
      width: "40%",
      fontSize: 30,
      fontWeight: "bold",
      color: "#616161",
      margin: "auto",
    },
  };
});

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.divRoot}>
        <Box sx={{ textAlign: "center", padding: "30px 0px" }}>
          <Button className={classes.button} component={Link} to="/">
            HOME
          </Button>

          <Button className={classes.button} component={Link} to="/about">
            ABOUT US
          </Button>
          <Button className={classes.button} component={Link} to="/menu">
            MENU
          </Button>
          <Button className={classes.button} component={Link} to="/delivery">
            DELIVERY
          </Button>
          <Button className={classes.button} component={Link} to="/gallery">
            GALLERY
          </Button>
          <Button className={classes.button} component={Link} to="/contact">
            CONTACT
          </Button>
        </Box>
        <div className={classes.footerCenter}>
          <div className={classes.footerCentreChild}>
            <p>
              <CallIcon className={classes.icon} />
              011-81-88-88 81-88
            </p>
          </div>
          <div className={classes.footerCentreChild}>
            <div>
              <p>
                <AddLocationIcon className={classes.icon} />
                32, Tumanyan str.
              </p>
            </div>
            <div>
              <p>
                <AddLocationIcon className={classes.icon} />
                50/50, Komitas ave.
              </p>
            </div>
            <div>
              <p>
                <AddLocationIcon className={classes.icon} />
                34/3, Arshakunyats ave. (''Yerevan Mall'', Food court)
              </p>
            </div>
            <div>
              <p>
                <AddLocationIcon className={classes.icon} />
                27/2 Tigran Petrosyan str. Davtashen district
              </p>
            </div>
            <div>
              <p>
                <AddLocationIcon className={classes.icon} />
                Gai 16 Ave. (Mega Mall Food Court)
              </p>
            </div>
          </div>
          <div className={classes.footerCentreChild}>
            <p>
              <SmsIcon className={classes.icon} />
              info@tshaurma.com
            </p>
          </div>
        </div>
      </div>
      <div className={classes.lincIcon}>
        <YouTubeIcon style={{ color: "red", width: 50, cursor: "pointer" }} />
        <FacebookIcon
          style={{ color: "#216AB4", width: 50, cursor: "pointer" }}
        />
        <TwitterIcon
          style={{ color: "#44B4E5", width: 50, cursor: "pointer" }}
        />
        <InstagramIcon
          style={{ color: "#C537A5", width: 50, cursor: "pointer" }}
        />
        <AdbIcon style={{ color: "#1E892F", width: 50, cursor: "pointer" }} />
      </div>
      <p style={{ textAlign: "center" }}>
        COPYRIGHT © 2016 - 2019 Tumanyan Shaurma. All rights reserved. Powered
        by
      </p>
      <p className={classes.finFut}>X-TECH</p>
    </div>
  );
}
