import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  menuPage: {
    marginTop: "110px",
  },
});

function Menu() {
  const classes = useStyles();
  return (
    <div className={classes.menuPage}>
      <img src="images/menu/jpg/1.jpg" />
      <div>fghfgnd</div>
      <div>sfgbsbs</div>
    </div>
  );
}

export default Menu;
