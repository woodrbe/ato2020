import React from "react";
// @material-ui/core components
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

// import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';

const useStyles = makeStyles(styles);

export default function HousePlanSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );
  const [state, setState] = useState({
    selection1: {
      startDate: addDays(new Date(), 1),
      endDate: null,
      key: 'selection1'
    },
    selection2: {
      startDate: addDays(new Date(), 4),
      endDate: addDays(new Date(), 8),
      key: 'selection2'
    },
    selection3: {
      startDate: addDays(new Date(), 8),
      endDate: addDays(new Date(), 10),
      key: 'selection3',
      autoFocus: false
    }
  });

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Availability Calendar</h2>
      <div>
        <GridContainer>
        <GridItem xs={10} sm={10} md={10}>
            <Card plain>
            <DateRange

  ranges={[state.selection1]}
/>;
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
