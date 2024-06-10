import React, { CSSProperties } from "react";
import { Carousel } from "antd";

interface Props {
  carouselItem: CarouselItem[];
  contentStyle: CSSProperties;
}

interface CarouselItem {
  imageSource: string;
}

const CarouselItem: React.FC<Props> = ({ carouselItem, contentStyle }) => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      {carouselItem.map((item) => (
        <div>
          <img style={contentStyle} src={item.imageSource} alt="" />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselItem;
