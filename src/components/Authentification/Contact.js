import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  contactPage: {
    paddingTop: 30,
    paddingBottom: 50,
    marginTop: "100px",
    backgroundColor: "#333333",
    opacity: "1",
    color: "white",
    textAlign: "center",
  },
  titleH: {
    fontFamily: "serif",
    fontSize: 35,
    fontWeight: 600,
  },
  txtDiv: {
    textAlign: "left",
    width: "50%",
    margin: "auto",
  },
});

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.contactPage}>
      <h1 className={classes.titleH}>VISIT US</h1>
      <p>Visit the service center nearest you.</p>
      <div className={classes.txtDiv}>
        <p>32, Tumanyan str.</p>
        <p>50/50, Komitas ave.</p>
        <p>34/3, Arshakunyats ave. (''Yerevan Mall'', Food court)</p>
        <p>Tigran Mets ave. ("Rossia Mall", Food court)</p>
        <p>Gai 16 Ave. (Mega Mall Food Court)</p>
      </div>
    </div>
  );
}

export default Contact;
