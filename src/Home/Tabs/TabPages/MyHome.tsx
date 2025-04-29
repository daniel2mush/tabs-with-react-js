import React from "react";
import Card from "../../../components/Card";

export interface CardInterface {
  image: string;
  title: string;
  text: string;
  buttonText: string;
}

const HomeCardContent: CardInterface = {
  image: "https://dummyimage.com/400x300",
  title: "Amazing Card",
  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  buttonText: "Learn more",
};

const HomeData = Array.from({ length: 25 }, (_, index) => {
  return (
    <Card
      image={HomeCardContent.image}
      title={HomeCardContent.title}
      text={HomeCardContent.text}
      buttonText={HomeCardContent.buttonText}
      key={index}
    />
  );
});

const MyHome = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  ml-[2rem] gap-3 mt-5">
      {HomeData.map((item) => {
        return item;
      })}
    </div>
  );
};

export default MyHome;
