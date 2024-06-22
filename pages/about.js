import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import Job from "@/components/job";
import Trust from "@/components/trust";
import Testimonials from "@/components/testimonials";

export default function About() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
          <img className="slick-arrow" src="/images/arrow-right.svg" alt="Next" />
        ),
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
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
      const testi = [
        {
          id: 1,
          image: "images/testi.png",
          comment:
            " “People now recognise that having a good performance conversation means that something happens as a result. “With Landingfolio, the design team can now build design which identifies employees’ career aspirations and goals and from which we approach managers and check to see what is happening.”",
          name: "Albert Flores",
          designation: "Product Manager at Jomanar",
        },
        {
          id: 2,
          image: "images/testi.png",
          comment:
            " “People now recognise that having a good performance conversation means that something happens as a result. “With Landingfolio, the design team can now build design which identifies employees’ career aspirations and goals and from which we approach managers and check to see what is happening.”",
          name: "Albert Flores",
          designation: "Product Manager at Jomanar",
        },
      ];
      
    
    const job = [
        {
            id:"job1",
            icon:"/images/job1.png",
            title:"Junior FULL stack of Front-end webdeveloper ",
            location:"Brussels",
            type:"Full Time",
            money:"50-55k",
            time:"29 min ago",
            description:"Mollit in laborum tempoDe corona-crisis hakt grondig in op onze jarenlange gewoontes. Plots is het als KMO-bedrijf niet meer evident om fysiek af te spreken met je boekhoudkantoor."
        },
        {
            id:"job2",
            icon:"/images/job1.png",
            title:"Junior FULL stack of Front-end webdeveloper ",
            location:"Brussels",
            type:"Full Time",
            money:"50-55k",
            time:"29 min ago",
            description:"Mollit in laborum tempoDe corona-crisis hakt grondig in op onze jarenlange gewoontes. Plots is het als KMO-bedrijf niet meer evident om fysiek af te spreken met je boekhoudkantoor."
        },
        {
            id:"job3",
            icon:"/images/job1.png",
            title:"Junior FULL stack of Front-end webdeveloper ",
            location:"Brussels",
            type:"Full Time",
            money:"50-55k",
            time:"29 min ago",
            description:"Mollit in laborum tempoDe corona-crisis hakt grondig in op onze jarenlange gewoontes. Plots is het als KMO-bedrijf niet meer evident om fysiek af te spreken met je boekhoudkantoor."
        }
    ]
  return (
    <>
      <main>
        <section className="about_banner">
            <div className="contain">
                <div className="cntnt text-center">
                    <h1>About Us</h1>
                    <p>
                        <Link href="/">Home</Link>
                        <span>{">"}</span>
                        <span>About Us</span>
                    </p>
                </div>
            </div>
        </section>
        <section className="mission_vision_sec">
            <div className="contain">
                <div className="flex">
                    <div className="colL">
                        <div className="sec_heading">
                            <h2>Empowering Entrepreneurs with Smart Accounting</h2>
                        </div>
                        <p>At FUROO , we are dedicated to providing small and medium-sized enterprises (SMEs) and self-employed individuals with the best pre-accountancy platform. </p>
                        <div className="mission_vision_flex">
                            <div className="col">
                                <h4>Our Vision</h4>
                                <p>We envision a world where every business, regardless of its size, has access to powerful financial tools that enable growth and success.</p>
                            </div>
                            <div className="col">
                                <h4>Our Mission</h4>
                                <p>Our mission is to revolutionize the way businesses manage their finances. By offering a user-friendly, and affordable accounting platform</p>
                            </div>
                        </div>
                        <div className="btn_blk">
                            <Link href="/contact" className="site_btn color">Contact Us</Link>
                        </div>
                    </div>
                    <div className="colR">
                        <div className="image">
                            <Image src="/images/mission-vision.png" width={500} height={600} alt="mission"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="counter_sec">
            <div className="contain">
                <div className="flex">
                    <div className="col">
                        <div className="inner">
                            <h1>25K+</h1>
                            <p>Completed Cases</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner">
                            <h1>17+</h1>
                            <p>Our Office</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner">
                            <h1>86+</h1>
                            <p>Skilled People</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner">
                            <h1>28K+</h1>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="history_sec">
            <div className="contain">
                <div className="flex">
                    <div className="colL">
                        <div className="image">
                            <Image src="/images/history.png" width={500} height={600} alt="history" />
                        </div>
                    </div>
                    <div className="colR">
                        <div className="sec_heading">
                            <h2>Our History</h2>
                        </div>
                        <p>Our company was founded on the belief that entrepreneurship is the key to driving innovation, creating jobs, and driving economic growth. We understand the challenges and obstacles that entrepreneurs face, and we are committed to providing the resources, support, and guidance needed to help them succeed.</p>
                        <p>With years of experience in the business world, our team has a deep understanding of what it takes to build and grow a successful business. We have worked with a wide range of entrepreneurs from various industries, helping them navigate the complexities of starting and running a business.</p>
                        <div className="btn_blk">
                            <Link href="/contact" className="site_btn color">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="team_section">
            <div className="contain">
                <div className="cntnt text-center">
                    <div className="sec_heading">
                        <h2>Meet our experts</h2>
                    </div>
                    <p>We invite you to get to know us better and experience firsthand the dedication and expertise that drives FUROO.</p>
                </div>
                <Slider {...settings} className="team_slider slick-carousel">
                    <div className="item">
                        <div className="inner">
                            <div className="img_icon">
                                <Image src="/images/team1.png" width={300} height={300} alt=""/>
                            </div>
                            <h4>Steav Joe</h4>
                            <p>CEO & Co-Founder</p>
                            <div className="social_logon">
                                <Link href="/" target="_blank" rel="noreferrer">
                                    <img src="/images/facebook.svg" alt="" />
                                </Link>
                                <Link href="/" target="_blank" rel="noreferrer">
                                    <img src="/images/twitter.svg" alt="" />
                                </Link>
                                <Link href="/" target="_blank" rel="noreferrer">
                                    <img src="/images/instagram.svg" alt="" />
                                </Link>
                                <Link href="/" target="_blank" rel="noreferrer">
                                    <img src="/images/linkedin.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="inner">
                            <div className="img_icon">
                                <Image src="/images/team2.png" width={300} height={300} alt=""/>
                            </div>
                            <h4>Mark Dele</h4>
                            <p>Co-Founder</p>
                            <div className="social_logon">
                                <Link href="/" target="_blank" rel="noreferrer">
                                    <img src="/images/facebook.svg" alt="" />
                                </Link>
                                <Link href="/" target="_blank" rel="noreferrer">
                                    <img src="/images/twitter.svg" alt="" />
                                </Link>
                                <Link href="/" target="_blank" rel="noreferrer">
                                    <img src="/images/instagram.svg" alt="" />
                                </Link>
                                <Link href="/" target="_blank" rel="noreferrer">
                                    <img src="/images/linkedin.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="inner">
                            <div className="img_icon">
                                <Image src="/images/team3.png" width={300} height={300} alt=""/>
                            </div>
                            <h4>Jolley Sihe</h4>
                            <p>Marketing & Sales</p>
                            <div className="social_logon">
                                <Link href="/" target="_blank" rel="noreferrer">
                                    <img src="/images/facebook.svg" alt="" />
                                </Link>
                                <Link href="/" target="_blank" rel="noreferrer">
                                    <img src="/images/twitter.svg" alt="" />
                                </Link>
                                <Link href="/" target="_blank" rel="noreferrer">
                                    <img src="/images/instagram.svg" alt="" />
                                </Link>
                                <Link href="/" target="_blank" rel="noreferrer">
                                    <img src="/images/linkedin.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
        <section className="job_list_sec">
            <div className="contain">
                <div className="cntnt">
                    <h2>Job Seeker Resources</h2>
                    <div className="btn_blk">
                        <Link href="/" className="site_btn">View All Jobs</Link>
                    </div>
                </div>
                <Job data={job}/>
                <div className="btn_blk text-center">
                    <div className="btn_blk">
                        <Link href="/contact" className="site_btn color">Apply Now</Link>
                    </div>
                </div>
            </div>
        </section>
        <Trust />
        <section className="choose_sec">
            <div className="contain">
                <div className="flex">
                <div className="colL">
                    <div className="image">
                        <Image src="/images/choose.png" width={400} height={600} alt="" />
                    </div>
                </div>
                <div className="colR">
                    <div className="sec_heading">
                        <h2>Why Choose Us?</h2>
                    </div>
                    <p>At FUROO , we are dedicated to providing small and medium-sized enterprises (SMEs) and self-employed individuals with the best pre-accountancy platform. </p>
                    <div className="inner_flex">
                        <div className="col">
                            <h4>Robust Security</h4>
                            <p>We take the security of your financial data seriously. Our platform employs advanced encryption methods</p>
                            <div className="mini_br"></div>
                            <h4>Affordable Pricing Plans</h4>
                            <p>We offer a variety of pricing plans to accommodate different business sizes and budgets.</p>
                            <div className="mini_br"></div>
                            <h4>Exceptional Customer Support</h4>
                            <p>Our dedicated support team is always ready to assist you with any questions or issues.</p>
                        </div>
                        <div className="col">
                            <div className="inner">
                                <h4>Continuous Innovation</h4>
                                <p>We are committed to continuously improving and updating our platform to keep pace with the latest industry trends and technological advancements. Our goal is to provide you with the most up-to-date tools to help you succeed.</p>
                            </div>
                        </div>
                    </div>
                    <div className="btn_blk">
                        <div className="btn_blk">
                           <Link href="/contact" className="site_btn color">Contact Us</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section className="sec_testi">
          <div className="contain">
            <div className="flex">
              <div className="cols col1">
                <div className="inner">
                  <div className="sec_heading">
                    <h6>TESTIMONIALs</h6>
                    <h2>What People Say About Us</h2>
                  </div>
                  <div className="content">
                    <p>
                      These testimonials highlight how our platform helps small
                      businesses and self-employed individuals streamline their
                      financial management, save time, and achieve better
                      business insights.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cols col2">
                <div className="inside">
                  <Testimonials data={testi} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
</>
);
}
