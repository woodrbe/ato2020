import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/FloorPlan1.png";
import team2 from "assets/img/FloorPlan2.png";
import level10 from "assets/img/level10.jpg"

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>About the House</h2>
      <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                First Floor
                <br />
                <small className={classes.smallTitle}>Floorplan</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
               
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Second Floor
                <br />
                <small className={classes.smallTitle}>Floorplan</small>
              </h4>
              <CardBody>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <a href="https://www.facebook.com/Level-10-Construction-LLC-112442857051330" rel="noopener noreferrer" target="_blank">
                <img src={level10} alt="..." className={imageClasses} />
              </a>

              </GridItem>
              <h4 className={classes.cardTitle}>
                Custom Home
                <br />
                <a href="https://www.facebook.com/Level-10-Construction-LLC-112442857051330" rel="noopener noreferrer" target="_blank">
                <small className={classes.smallTitle}>Level 10 Construction, LLC</small>
                </a>
              </h4>
              <CardBody>
                <p className={classes.description}>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
               
              </CardFooter>
            </Card>
          </GridItem>
          
        </GridContainer>
      </div>
    </div>
  );
}
