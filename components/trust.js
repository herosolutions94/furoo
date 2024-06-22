import Link from "next/link";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

export default function Trust() {
  const trusted = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    prevArrow: (
      <img
        className="slick-arrow"
        src="/images/arrow-left.svg"
        alt="Previous"
      />
    ),
    nextArrow: (
      <img className="slick-arrow" src="/images/arrow-right-right.svg" alt="Next" />
    ),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [
    {
      id: 1,
      image: "/images/logo1.png",
    },
    {
      id: 2,
      image: "/images/logo2.png",
    },
    {
      id: 3,
      image: "/images/logo3.png",
    },
    {
      id: 4,
      image: "/images/logo4.png",
    },
    {
      id: 5,
      image: "/images/logo5.png",
    }
  ];
  return (
    <>
      <section className="trusted_companies_sec">
            <div className="contain">
                <div className="cntnt text-center">
                    <div className="sec_heading">
                        <h2>Trusted by 150+ companies</h2>
                    </div>
                    <p>By providing robust features, user-friendly design, seamless integration, reliable support, affordable pricing, and top-notch security, we have earned the trust of over 150 companies.</p>
                </div>
                <Slider {...trusted} className="trusted_slider slick-carousel">
                  {data.map((val)=>{
                    return(
                      <div className="item" key={val.id}>
                        <div className="inner">
                            <Image src={val.image} width={500} height={500} alt="" />
                        </div>
                      </div>
                    );
                  })}
                   
                </Slider>
            </div>
        </section>
    </>
  );
}
