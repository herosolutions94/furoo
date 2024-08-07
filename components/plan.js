import Link from "next/link";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Plan() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <img className="slick-arrow" src="images/arrow-left.svg" alt="Previous" />
    ),
    nextArrow: (
      <img
        className="slick-arrow"
        src="images/arrow-right-right.svg"
        alt="Next"
      />
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider className="flex" {...settings}>
        <div className="col">
          <div className="inner">
            <div className="icon">
              <div className="inner_icon">
                <Image
                  src="/images/rocket.png"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <h4>Standard</h4>
            <p>For the basics</p>
            <h1>$15</h1>
            <ul>
              <li>All Free Plan features</li>
              <li>Bank account integration</li>
              <li>Customizable financial reports</li>
              <li>Multi-currency support</li>
              <li>Live chat support</li>
            </ul>
            <div className="btn_blk text-center">
              <Link href="" className="site_btn color2">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="inner">
            <div className="icon">
              <div className="inner_icon">
                <Image
                  src="/images/rocket.png"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <h4>Unlimited</h4>
            <p>For the professionals</p>
            <h1>$99</h1>
            <ul>
              <li>All Free Plan features</li>
              <li>Bank account integration</li>
              <li>Customizable financial reports</li>
              <li>Multi-currency support</li>
              <li>Live chat support</li>
            </ul>
            <div className="btn_blk text-center">
              <Link href="" className="site_btn color2">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="inner">
            <div className="icon">
              <div className="inner_icon">
                <Image
                  src="/images/rocket.png"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <h4>Premium</h4>
            <p>For small team</p>
            <h1>$55</h1>
            <ul>
              <li>All Free Plan features</li>
              <li>Bank account integration</li>
              <li>Customizable financial reports</li>
              <li>Multi-currency support</li>
              <li>Live chat support</li>
            </ul>
            <div className="btn_blk text-center">
              <Link href="" className="site_btn color2">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
