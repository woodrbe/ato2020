import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const images = [];
  for (let i = 1; i < 28; i++) {
    const im = { original: `images/image${i}.jpg`, thumbnail: `images/image${i}a.jpg` };
    images.push(im);
  }
  return (
    <div className={classes.section}>
          <h1 className={classes.title}>Latest Photos</h1>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
              <Card carousel>
              <ImageGallery items={images} />
              </Card>
            </GridItem>
          </GridContainer>
        </div>

  );
}
