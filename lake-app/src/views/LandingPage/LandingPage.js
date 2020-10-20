import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import TeamSection from "./Sections/TeamSection"


import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import SectionCarousel from "./Sections/SectionCarousel"

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Barefoot at the Lake"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "blue"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/header.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>Barefoot at the Lake.</h1>
              <h4>
                Come to vist our home on Tim's Ford Lake that sits in the shadows of the Cumberland Plateau in south-central Tennessee. The Tims Ford Lake is considered one of the most picturesque lakes in Tennessee and is regarded as one of the top bass fishing and recreational lakes in the Southeast.
              </h4>
              <br />

            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>

       <div className={classes.container}>
          <SectionCarousel />
        </div>


      </div>
      <Footer />
    </div>
  );
}
