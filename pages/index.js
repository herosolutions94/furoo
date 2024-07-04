import React, { useState, useEffect, useRef } from "react";
import Testimonials from "@/components/testimonials";
import Link from "next/link";
import Integration from "@/components/integration";
import Download_app from "@/components/download_app";
import Plan from "@/components/plan";
import Trust from "@/components/trust";
import Faq from "@/components/faq";

export default function Home() {
  const trusted = {
    title: "Trusted by 150+ companies",
    pera: "By providing robust features, user-friendly design, seamless integration, reliable support, affordable pricing, and top-notch security, we have earned the trust of over 150 companies.",
    logos: [
      {
        id: "logo1",
        logo: "/images/logo1.png",
      },
      {
        id: "logo2",
        logo: "/images/logo2.png",
      },
      {
        id: "logo3",
        logo: "/images/logo3.png",
      },
      {
        id: "logo4",
        logo: "/images/logo4.png",
      },
      {
        id: "logo5",
        logo: "/images/logo5.png",
      },
    ],
  };
  const integration = {
    title: "Integrate Immediately with your other Workhorses",
    btn_lbl: "See All Integrations",
    btn_lnk: "/",
    logos: [
      {
        id: "integ1",
        logo: "/images/integration1.svg",
        title: "Integrate",
        pera: "Say goodby to hidden bank charges.",
      },
      {
        id: "integ2",
        logo: "/images/integration2.svg",
        title: "Integrate",
        pera: "Say goodby to hidden bank charges.",
      },
      {
        id: "integ3",
        logo: "/images/integration3.svg",
        title: "Integrate",
        pera: "Say goodby to hidden bank charges.",
      },
      {
        id: "integ4",
        logo: "/images/integration4.svg",
        title: "Integrate",
        pera: "Say goodby to hidden bank charges.",
      },
      {
        id: "integ5",
        logo: "/images/integration5.svg",
        title: "Integrate",
        pera: "Say goodby to hidden bank charges.",
      },
      {
        id: "integ6",
        logo: "/images/integration6.svg",
        title: "Integrate",
        pera: "Say goodby to hidden bank charges.",
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
  const data = [
    {
      id: "1",
      title: "How does Learn and Pass help me prepare for online tests?",
      content:
        "<p>AECOM is a leading multinational engineering firm that offers a broad range of professional services across various industries. The company offers an extensive portfolio of services that includes architecture, engineering, design, construction management, planning, environmental services, and infrastructure operations and maintenance.</p>",
    },
    {
      id: "2",
      title: "What are the common types of online tests?",
      content:
        "<p>AECOM is a leading multinational engineering firm that offers a broad range of professional services across various industries. The company offers an extensive portfolio of services that includes architecture, engineering, design, construction management, planning, environmental services, and infrastructure operations and maintenance.</p>",
    },
    {
      id: "3",
      title: "What is the best way to prepare for an online test?",
      content:
        "<p>AECOM is a leading multinational engineering firm that offers a broad range of professional services across various industries. The company offers an extensive portfolio of services that includes architecture, engineering, design, construction management, planning, environmental services, and infrastructure operations and maintenance.</p>",
    },
    {
      id: "4",
      title: "When should I sit the actual online test?",
      content:
        "<p>AECOM is a leading multinational engineering firm that offers a broad range of professional services across various industries. The company offers an extensive portfolio of services that includes architecture, engineering, design, construction management, planning, environmental services, and infrastructure operations and maintenance.</p>",
    },
    {
      id: "5",
      title: "My online test is in only a few days. What should I do?",
      content:
        "<p>AECOM is a leading multinational engineering firm that offers a broad range of professional services across various industries. The company offers an extensive portfolio of services that includes architecture, engineering, design, construction management, planning, environmental services, and infrastructure operations and maintenance.</p>",
    },
    {
      id: "6",
      title: "What is an online test?",
      content:
        "<p>AECOM is a leading multinational engineering firm that offers a broad range of professional services across various industries. The company offers an extensive portfolio of services that includes architecture, engineering, design, construction management, planning, environmental services, and infrastructure operations and maintenance.</p>",
    },
  ];
  return (
    <>
      <main>
        {/* =====banner===== */}
        <section className="banner">
          <div className="shape">
            <img src="images/banner_bg.jpg" alt="" />
          </div>
          <div className="contain">
            <div className="col1">
              <div className="inner">
                <div className="sec_heading">
                  <h1>Innovative Software Solutions for Savvy Entrepreneurs</h1>
                </div>
                <div className="sec_content">
                  <p>
                    Want to manage everything easily and clearly in one powerful
                    tool? Which can!  Great for you and your accountant! 
                  </p>
                </div>
                <ul className="cta">
                  <li>
                    <Link href="" className="site_btn color">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="site_btn">
                      Read More
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col2">
              <div className="image">
                <img src="images/11.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* ====== sec_account ==== */}
        <section className="sec_account">
          <div className="contain">
            <div className="heading_area">
              <div className="sec_heading">
                <h2>Accounting Software That Handles it All.</h2>
              </div>
              <div className="cta">
                <Link href="" className="site_btn">
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="flex flex_row">
              <div className="cols col1">
                <div className="inner">
                  <div className="small_heading">
                    <h6>Multi-Function Dashboard</h6>
                    <h3>Comprehensive Financial Management</h3>
                  </div>
                  <div className="content">
                    <p>
                      Monitor your business’s financial health with a
                      user-friendly dashboard that provides real-time insights
                      into cash flow, expenses, and revenue.
                    </p>
                    <div className="cta-1">
                      <Link href="" className="style_it">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/ac-1.svg" alt="" />
                  </div>
                  <div className="content">
                    <h5>Seamless Data Integration</h5>
                    <p>
                      Connect your bank accounts for automatic transaction
                      imports and reconciliations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/ac-2.svg" alt="" />
                  </div>
                  <div className="content">
                    <h5>Robust Reporting and Analytics</h5>
                    <p>
                      Access real-time analytics to monitor key performance
                      indicators and inform strategic planning.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/ac-3.svg" alt="" />
                  </div>
                  <div className="content">
                    <h5>User Management and Security</h5>
                    <p>
                      Assign roles and permissions to team members based on
                      their responsibilities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/ac-4.svg" alt="" />
                  </div>
                  <div className="content">
                    <h5>Dedicated Customer Support</h5>
                    <p>
                      Access support via live chat, email, or phone for any
                      questions or technical issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== sec_trust === */}
        <Trust data={trusted} />
        {/* ==== sec_plate ==== */}
        <section className="sec_plate">
          <div className="contain">
            <div className="sec_heading">
              <h2>Pre-Accountancy Platform for SMEs</h2>
              <p>
                Furoo is the pre-accountancy platform for SMEs and self-employed
                people.
              </p>
            </div>
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="images/plateform.png" alt="" />
                </div>
              </div>
              <div className="col2">
                <div className="inside">
                  <Faq data={data} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== sec_plans ===== */}
        <Plan />
        {/* ===== sec_download ===== */}
        <Download_app />
        {/* ==== sec_integrate ===== */}
        <Integration data={integration} />
        {/* ====== sec_plate === */}
        <section className="sec_plate">
          <div className="contain">
            <div className="sec_heading">
              <h2>All-in-1 Platform Designed for you</h2>
              <p>
                Join the many satisfied users who have transformed their
                accounting processes with our platform.
              </p>
            </div>
            <div className="flex">
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/gg1.png" alt="" />
                  </div>
                  <div className="content">
                    <h4>Freelancer</h4>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/gg2.png" alt="" />
                  </div>
                  <div className="content">
                    <h4>Small SMEs</h4>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/gg3.png" alt="" />
                  </div>
                  <div className="content">
                    <h4>Build</h4>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/gg4.png" alt="" />
                  </div>
                  <div className="content">
                    <h4>Production</h4>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/gg5.png" alt="" />
                  </div>
                  <div className="content">
                    <h4>Consulting firms</h4>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/gg6.png" alt="" />
                  </div>
                  <div className="content">
                    <h4>IT software</h4>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/gg7.png" alt="" />
                  </div>
                  <div className="content">
                    <h4>Horticulture</h4>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/gg2.png" alt="" />
                  </div>
                  <div className="content">
                    <h4>Wholesalers</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==== sec_testi ==== */}
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
