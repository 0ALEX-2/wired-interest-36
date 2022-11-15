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

let WhaleData=[
  {
    //"BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g190475-d11480931-From_Tromso_all_inclusive_Whale_and_Seabird_Safari_by_Boat_to_Skervoy-Tromso_Troms.html",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5b/47/a1/caption.jpg?w=300&h=300&s=1",
    keSJi: "From Tromso all-inclusive Whale and Seabird Safari by Boat to Skervøy",
    yyzcQ: 91,
    biGQs: "from ₹15,846 per adult",
    biGQt: ""
  },
  {
    //"BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g189970-d11457718-Classic_Whale_Watching_from_Reykjavik_The_Original-Reykjavik_Capital_Region.html",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/a9/38/78/caption.jpg?w=300&h=300&s=1",
    keSJi: "Classic Whale Watching from Reykjavik | The Original",
    yyzcQ: 914,
    biGQs: "from ₹6,460 per adult",
    biGQt: "Best Seller"
  },
  {
    //"BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g312663-d11456885-Boat_Based_Whale_Watching_from_Hermanus-Hermanus_Overstrand_Overberg_District_West.html",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5c/26/40/caption.jpg?w=300&h=300&s=1",
    keSJi: "Boat Based Whale Watching from Hermanus",
    yyzcQ: 174,
    biGQs: "from ₹5,340 per adult",
    biGQt: ""
  },
  {
    //"BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g189963-d11467588-Whale_Safari_and_Puffins_RIB_Boat_Tour_from_Husavik-Husavik_Northeast_Region.html",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/85/b8/0a/caption.jpg?w=300&h=300&s=1",
    keSJi: "Whale Safari and Puffins RIB Boat Tour from Húsavík",
    yyzcQ: 219,
    biGQs: "from ₹12,210 per adult",
    biGQt: ""
  },
  {
    //"BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g60750-d12086300-San_Diego_Whale_Watching_Cruise-San_Diego_California.html",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/bb/7e/3d/caption.jpg?w=300&h=300&s=1",
    keSJi: "San Diego Whale Watching Cruise",
    yyzcQ: "1,235",
    biGQs: "from ₹7,012 per adult",
    biGQt: "Likely To Sell Out"
  },
  {
    //"BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g255106-d11454305-Auckland_Dolphin_and_Whale_Watching_Eco_Safari_Cruise-Auckland_Central_North_Islan.html",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/69/91/55/caption.jpg?w=300&h=300&s=1",
    keSJi: "Auckland Dolphin and Whale Watching Eco-Safari Cruise",
    yyzcQ: "1,153",
    biGQs: "from ₹8,342 per adult",
    biGQt: ""
  },
  {
    //"BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g32279-d11991692-Dana_Point_Whale_Watching_and_Dolphin_Watching_Eco_Safari-Dana_Point_California.html",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/b9/e6/3a/caption.jpg?w=300&h=300&s=1",
    keSJi: "Dana Point Whale Watching and Dolphin Watching Eco-Safari",
    yyzcQ: 367,
    biGQs: "from ₹8,250 per adult",
    biGQt: "Likely To Sell Out"
  },
  {
    //"BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g255374-d14054077-Whale_Watching_in_Kaikoura_by_Boat-Kaikoura_Canterbury_Region_South_Island.html",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/a8/3b/f8/caption.jpg?w=300&h=300&s=1",
    keSJi: "Whale Watching in Kaikoura by Boat",
    yyzcQ: "2,371",
    biGQs: "from ₹8,556 per adult",
    biGQt: "Likely To Sell Out"
  },
  {
    //"BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g1407334-d15885193-Whales_and_Dolphins_Watching_Luxury_Super_Grade_Cruiser-Mirissa_Southern_Province.html",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/48/5f/b1/img-20191213-wa0002-largejpg.jpg?w=300&h=300&s=1",
    keSJi: "Whales and Dolphins Watching-Luxury Super Grade Cruiser",
    yyzcQ: 720,
    biGQs: "from ₹5,362 per adult",
    biGQt: ""
  },
  {
    //"BMQDV href": "https://www.tripadvisor.in/AttractionProductReview-g29220-d11486523-Whale_Watching_from_Lahaina_Harbor-Maui_Hawaii.html",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/e5/2d/ef/caption.jpg?w=300&h=300&s=1",
    keSJi: "Whale Watching from Lahaina Harbor",
    yyzcQ: 399,
    biGQs: "from ₹6,819 per adult",
    biGQt: ""
  }
]

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
      <div style={{textAlign:"left"}}>
      <h1>Ways to tour Kolkata (Calcutta)</h1>
      <p>Book these experiences for a close-up look at Kolkata (Calcutta).</p>
      </div>

      <Slider {...settings}>
     
        {
            KolkataData.map((ele)=>{
               return <div style={{paddingLeft:"8px"}}>
                    <div>
                        <img src={ele.image} alt="photo" width="270px" />
                    </div>
                    <div style={{textAlign:"left"}}>
                      <h3>{ele.keSJi}</h3>
                      <h4>{ele.biGQs}</h4>
                    </div>
                </div>
            })
        }
      </Slider>

      <div style={{margin:"auto",display:"flex",justifyContent:"space-between",height:"200px",marginTop:"50px",backgroundColor:"#fcc"}}>
        <div style={{width:"55%",textAlign:"left",paddingLeft:"20px"}}>
          <h2>Get out there</h2>
          <p>Best of the Best tours,attractions you won't to miss.</p>
          <button style={{fontSize:"20px",padding:"8px",borderRadius:"13px",backgroundColor:"black",color:"white"}}>See the list</button>
        </div>
        <div style={{width:"45%"}}>
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1" alt="photo" height="200px" width="100%"/>
        </div>
      </div>

      <div style={{textAlign:"left"}}>
      <h1>It’s whale-watching season</h1>
      <p>Here's how to see nature’s largest wonders up-close.</p>
      </div>
      <Slider {...settings}>
        {
            WhaleData.map((ele)=>{
               return <div >
                    <div style={{}}>
                        <img src={ele.photo} alt="photo" width="270px" />
                    </div>
                    <div style={{textAlign:"left"}}>
                      <h3>{ele.keSJi}</h3>
                      <h4>{ele.biGQs}</h4>
                    </div>
                </div>
            })
        }
      </Slider>
    </div>
  );
};
