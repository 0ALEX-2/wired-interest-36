import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

let KolkataData = [
  {
    //"BMQDV href":
      //"https://www.tripadvisor.in/AttractionProductReview-g304558-d20384426-Kolkata_Sounds_and_Sights_Private_Full_Day_City_Tour-Kolkata_Calcutta_Kolkata_Dist.html",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/3d/6b/0d/caption.jpg?w=300&h=300&s=1",
    keSJi: "Kolkata - Sounds and Sights - Private Full Day City Tour",
    yyzcQ: 35,
    biGQs: "from ₹4,800 per adult",
  },
  {
    //"BMQDV href":
     // "https://www.tripadvisor.in/AttractionProductReview-g304558-d15658580-Private_Half_Day_Kolkata_Tour-Kolkata_Calcutta_Kolkata_District_West_Bengal.html",
   image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c7/d9/ea/caption.jpg?w=300&h=300&s=1",
    keSJi: "Private Half-Day Kolkata Tour",
    yyzcQ: 25,
    biGQs: "from ₹2,557 per adult",
  },
  {
    //"BMQDV href":
      //"https://www.tripadvisor.in/AttractionProductReview-g304558-d20101471-Kolkata_Sightseeing_With_Monuments_Entrances-Kolkata_Calcutta_Kolkata_District_Wes.html",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/de/6d/73/caption.jpg?w=300&h=300&s=1",
    keSJi: "Kolkata Sightseeing With Monuments Entrances",
    yyzcQ: "0 reviews",
    biGQs: "from ₹9,680 per adult",
  },
  {
    //"BMQDV href":
      //"https://www.tripadvisor.in/AttractionProductReview-g304558-d13127277-Day_trip_from_Kolkata_to_Bishnupur_for_Terracotta_Temples_and_Silk-Kolkata_Calcutt.html",
   image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/42/4f/caption.jpg?w=300&h=300&s=1",
    keSJi: "Day trip from Kolkata to Bishnupur for Terracotta Temples and Silk",
    yyzcQ: 8,
    biGQs: "from ₹13,298 per adult",
  },
  {
    //"BMQDV href":
     // "https://www.tripadvisor.in/AttractionProductReview-g304558-d15305710-Explore_Kolkata_Private_Day_Tour_with_Lunch-Kolkata_Calcutta_Kolkata_District_West.html",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d2/41/65/caption.jpg?w=300&h=300&s=1",
    keSJi: "Explore Kolkata- Private Day Tour with Lunch",
    yyzcQ: 15,
    biGQs: "from ₹7,012 per adult",
  },
  {
    //"BMQDV href":
     // "https://www.tripadvisor.in/AttractionProductReview-g304558-d12578210-Full_Day_Custom_Private_Tour_of_Kolkata-Kolkata_Calcutta_Kolkata_District_West_Ben.html",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/54/3e/3e/caption.jpg?w=300&h=300&s=1",
    keSJi: "Full-Day Custom Private Tour of Kolkata",
    yyzcQ: 9,
    biGQs: "from ₹4,976 per adult",
  },
  {
    //"BMQDV href":
      //"https://www.tripadvisor.in/AttractionProductReview-g304558-d15136549-Private_Full_Day_Sightseeing_Tour_of_Kolkata-Kolkata_Calcutta_Kolkata_District_Wes.html",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/63/af/d6/caption.jpg?w=300&h=300&s=1",
    keSJi: "Private Full Day Sightseeing Tour of Kolkata",
    yyzcQ: 20,
    biGQs: "from ₹5,280 per adult",
  },
  {
    //"BMQDV href":
     // "https://www.tripadvisor.in/AttractionProductReview-g304558-d20666468-Jewish_Heritage_Tour_in_Kolkata-Kolkata_Calcutta_Kolkata_District_West_Bengal.html",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/45/58/16/caption.jpg?w=300&h=300&s=1",
    keSJi: "Jewish Heritage Tour in Kolkata",
    yyzcQ: 1,
    biGQs: "from ₹7,342 per adult",
  },
  {
    //"BMQDV href":
      //"https://www.tripadvisor.in/AttractionProductReview-g304558-d18956705-Gangasagar_Pilgrimage_Private_Day_Tour_from_Kolkata-Kolkata_Calcutta_Kolkata_Distr.html",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/77/d2/8f/caption.jpg?w=300&h=300&s=1",
    keSJi: "Gangasagar Pilgrimage - Private Day Tour from Kolkata",
    yyzcQ: 1,
    biGQs: "from ₹8,414 per adult",
  },
  {
    //"BMQDV href":
      //"https://www.tripadvisor.in/AttractionProductReview-g304558-d19867497-Private_Calcutta_Tour-Kolkata_Calcutta_Kolkata_District_West_Bengal.html",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/7a/ca/e2/caption.jpg?w=300&h=300&s=1",
    keSJi: "Private Calcutta Tour",
    yyzcQ: 19,
    biGQs: "from ₹4,200 per adult",
  },
];

export const KolkataUpdate = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    gap:"5px",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            gap:"5px",
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            gap:"5px",
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            gap:"5px",
          }
        }
      ]
  };
  return (
    <div style={{width:"95%",margin:"auto"}}>
      <h1>Ways to tour Kolkata (Calcutta)</h1>
      <p>Book these experiences for a close-up look at Kolkata (Calcutta).</p>

      <Slider {...settings}>
        {
            KolkataData.map((ele)=>{
               return <div>
                    <div>
                        <img src={ele.image} alt="photo" width="270px" />
                    </div>
                </div>
            })
        }
      </Slider>
    </div>
  );
};
