import React from "react";
import "./Task1.css";

const booklist = [
  {
    title:
      "The Entrepreneur's Journey: 8 Steps from Inspiration to Global Impact",
    image:
      "https://m.media-amazon.com/images/I/71B954bx5LL._AC_UL480_FMwebp_QL65_.jpg",
    author: "Alon Braun",
    Price: "$17.06",
  },
  {
    title: "Cytherean Incident (Promenade of Tyrants Book 2)",
    image:
      "https://m.media-amazon.com/images/I/81lHF2RHCrL._AC_UL480_FMwebp_QL65_.jpg",
    author: " Promenade of Tyrants",
    Price: "$1.06",
  },
  {
    title:
      "The Entrepreneur's Journey: 8 Steps from Inspiration to Global Impact",
    image:
      "https://m.media-amazon.com/images/I/71B954bx5LL._AC_UL480_FMwebp_QL65_.jpg",
    author: "Alon Braun",
    Price: "$17.06",
  },
  {
    title: "Hook Point: How to Stand Out in a 3-Second World",
    image:
      "https://m.media-amazon.com/images/I/81NNSrEkyZL._AC_UL480_FMwebp_QL65_.jpg",
    author: "Brendan Kane",
    Price: "$2.06",
  },
];

function Task1() {
  return (
    <div className="main">
      {booklist.map((books) => {
        const { title, image, author, Price } = books;
        return <Booklayout books={books} />;
      })}
    </div>
  );
}
const Booklayout = (props) => {
  const { title, image, author, Price } = props.books;

  return (
    <div className="mainconatiner">
      <h1>{title}</h1>
      <img src={image} alt="" />
      <h2>{author}</h2>
      <h4>{Price}</h4>
    </div>
  );
};

export default Task1;
