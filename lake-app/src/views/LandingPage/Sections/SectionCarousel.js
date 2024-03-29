import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import ImageGallery from 'react-image-gallery';


// import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();


  const images = [];
  const numOfImages = 36;
  for (let i = 1; i < numOfImages; i++) {

    const im = { original: `images/image${i}.png`, thumbnail: `images/image${i}.png`};
    images.push(im);
  }
  return (
    <div className={classes.section}>
          <h1 className={classes.title}>Photos</h1>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
              <Card carousel>
              <ImageGallery items={images} lazyLoad={true} />
              </Card>
            </GridItem>
          </GridContainer>
        </div>

  );
}
