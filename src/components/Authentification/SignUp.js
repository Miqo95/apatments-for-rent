import React from "react";
import "../../App.css";
import Grid from "@mui/material/Grid";
import { Button, Paper, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "@mui/material";

const useStyles = makeStyles({
  paperStyle: {
    padding: "20px",
    width: "70%",
    margin: "110px auto",
  },
  headerStyle: {
    margin: 0,
    backgroundColor: "#DDDDDD",
    fontWeight: 100,
  },
  avatarStyle: {
    backgroundColor: "#1bbd7e !important",
  },
  marginTop: {
    marginTop: 5,
  },
  btnSubmit: {
    backgroundColor: "#EB2F2F !important",
    fontSize: "18px !important",
    padding: "2% 7% !important",
  },
});

export default function SignUp() {
  const classes = useStyles();
  return (
    <Grid>
      <Paper elevation={20} className={classes.paperStyle}>
        <Grid align="center">
          <h3 className={classes.headerStyle}>REGISTRATION</h3>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter your name"
            className={classes.Textfield}
          />
          <TextField fullWidth label="Email" />

          <TextField fullWidth label="Password" />
          <TextField fullWidth label="Confirm Password" />

          <div style={{ textAlign: "center" }}>
            <Button
              type="submit"
              variant="contained"
              className={classes.btnSubmit}
              component={Link}
              to={"/"}
            >
              Register
            </Button>
          </div>
        </form>
      </Paper>
    </Grid>
  );
}
