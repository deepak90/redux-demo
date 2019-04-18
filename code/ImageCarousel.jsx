import React from 'react';
import Carousel from 'nuka-carousel';

export default class ImageCarousel extends React.Component {
  render() {
    return (
      <Carousel autoplay={true} autoplayInterval={1500} wrapAround withoutControls autoGenerateStyleTag heightMode="current" width="500px" pauseOnHover={false}>
        <img src="./images/react.png" />
        <img src="./images/vuejs.png" />
        <img src="./images/angular.png" />
        <img src="./images/emberjs.png" />
        <img src="./images/aurelia1.png" />
        <img src="./images/squarejs.png" />
        <img src="./images/polymer.png" />
        <img src="./images/backbonejs.png" />
        <img src="./images/cyclejs.png" />
        <img src="./images/meteorjs.png" />
        <img src="./images/electronjs.png" />
      </Carousel>
    );
  }
}