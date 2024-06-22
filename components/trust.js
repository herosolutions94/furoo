import Link from "next/link";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

export default function Trust({data}) {
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
  return (
    <>
      <section className="trusted_companies_sec">
            <div className="contain">
                <div className="cntnt text-center">
                    <div className="sec_heading">
                        <h2>{data.title}</h2>
                    </div>
                    <p>{data.pera}</p>
                </div>
                <Slider {...trusted} className="trusted_slider slick-carousel">
                  {data.logos.map((val)=>{
                    return(
                      <div className="item" key={val.id}>
                        <div className="inner">
                            <Image src={val.logo} width={500} height={500} alt="" />
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
