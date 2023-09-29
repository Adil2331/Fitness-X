import React from 'react';
import {
  Carousel,
  DOTS_ANIMATION_TYPE,
  SLIDE_ANIMATION_TYPE,
  SlideItem,
} from 'react-native-carousel-infinity';

const data: SlideItem[] = [
  {id: '1', image: require('../assets/Card-Goals.png')},
  {id: '2', image: require('../assets/Card-Goals2.png')},
  {id: '3', image: require('../assets/Card-Goals3.png')},
  //   {id: '4', image: require('../assets/Card-Goals.png')},
];

const SLIDE_WIDTH = 280;
const SLIDE_HORIZONTAL_OFFSET = 5;
const FAKE_PER_SIDE = 3;

export const SimpleCarousel = () => {
  return (
    <Carousel
      isInfinity={false}
      startFromIndex={1}
      isAutoScroll={false}
      fakeImagePerSide={FAKE_PER_SIDE}
      images={data}
      slideHorizontalOffset={SLIDE_HORIZONTAL_OFFSET}
      slideWidth={SLIDE_WIDTH}
      slideAlign="symmetric"
      slideAnimationType={SLIDE_ANIMATION_TYPE.MOVE_UP}
      dotsAnimationType={DOTS_ANIMATION_TYPE.SCALE}
      dotStyles={false}
      slideStyles={{
        height: 500,
      }}
      containerWidth
    />
  );
};
