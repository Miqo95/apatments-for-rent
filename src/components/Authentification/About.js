import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  aboutPage: {
    padding: "2% 4%",
    marginTop: "110px",
    marginLeft: "70px",
  },
  aboutTitle: {
    width: "40%",
    color: "#4A4A4A",
    borderBottom: "1px #DFDFDF solid",
    paddingBottom: "1%",
  },
});

function About() {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#EEEBE8" }}>
      <div className={classes.aboutPage}>
        <h1 className={classes.aboutTitle}>About Us</h1>
        <h3 style={{ color: "#616161" }}>
          Tumanyan Shawarma was founded in 1998:
        </h3>
        <p>
          The first branch operated at the intersection of Tumanyan and Abovyan
          streets․
        </p>
        <p>
          After a short time, becoming a favorite place of Yerevan residents,
          there was a need to expand.
        </p>
        <p>
          In 2013, the second branch of "Tumanyan Shawarma" was opened in the
          Arabkir administrative district, at Komitas 50/50.
        </p>
        <p>
          In 2015, the "Grand buffet" opened on the second floor of the branch
          at 32 Tumanyan street, where salads, soups and other hot snacks are
          served.
        </p>
        <p>
          Staying true to the expansion strategy, in 2018, the fast food chain
          Tumanyan Shawarma opened another branch in the Davtashen
          administrative district.
        </p>
        <p style={{ paddingBottom: "40px" }}>
          Fast food chain "Tumanyan Shawarma" will continue its development
          program, opening new branches and constantly updating the menu.
        </p>
        <p>"Tumanyan Shawarma" -traditions that dictate advantages.</p>
      </div>
    </div>
  );
}

export default About;
