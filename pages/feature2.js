import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Complete from "../components/Complete";
import Customized from "../components/Customized";
import Independent from "../components/Independent";
import Personal from "../components/Personal";
import Trust from "@/components/trust";
import Integration from "@/components/integration";
export default function Feature2() {
  const trusted = {
    title: "More than 100 accounting firms count on us",
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
  const [tab, setTab] = useState(1);
  const [tabQuality, setTabQuality] = useState(9);
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const delivery_result_tabs = [
    {
      id: "1",
      title: "Independent",
    },
    {
      id: "2",
      title: "Customized",
    },
    {
      id: "3",
      title: "Personal",
    },
    {
      id: "4",
      title: "Complete",
    },
  ];
  const solutions = {
    Independent: {
      heading: "Only focus on receiving invoices digitally?",
      sub_heading: "Or also act as a business coach?",
      pera: "Furoo is a complete and modular solution. We look at who your customers are and how you want to position yourself as an accountant. Depending on this we model Furoo.",
      button_lbl: "Speak to a Partner Manager.",
      link: "/",
    },
    Customized: {
      heading: "Only focus on receiving invoices digitally?",
      sub_heading: "Or also act as a business coach?",
      pera: "Furoo is a complete and modular solution. We look at who your customers are and how you want to position yourself as an accountant. Depending on this we model Furoo.",
      button_lbl: "Speak to a Partner Manager.",
      link: "/",
    },

    Personal: {
      heading: "Only focus on receiving invoices digitally?",
      sub_heading: "Or also act as a business coach?",
      pera: "Furoo is a complete and modular solution. We look at who your customers are and how you want to position yourself as an accountant. Depending on this we model Furoo",
      button_lbl: "Speak to a Partner Manager.",
      link: "/",
    },
    Complete: {
      heading: "Only focus on receiving invoices digitally?",
      sub_heading: "Or also act as a business coach?",
      pera: "Furoo is a complete and modular solution. We look at who your customers are and how you want to position yourself as an accountant. Depending on this we model Furoo.",
      button_lbl: "Speak to a Partner Manager.",
      link: "/",
    },
  };
  return (
    <main>
      <section className="about_banner">
        <div className="contain">
          <div className="cntnt text-center">
            <h1>Features</h1>
            <p>
              <Link href="/">Home</Link>
              <span>{">"}</span>
              <span>Features</span>
            </p>
          </div>
        </div>
      </section>

      <section className="m1">
        <div className="contain">
          <div className="flex">
            <div className="col">
              <div className="image">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/16LtgdFsE8U?si=0Ig2Rwp-b26B8-ps"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
              </div>
            </div>
            <div className="colr">
              <h2>Why accountants like to work with Furoo</h2>
              <p>
                Use Furoo as a customer portal or offer a complete software
                solution to your customers.
              </p>
              <form>
                <input
                  type="email"
                  className="input"
                  placeholder="Become an affiliate"
                />
              </form>
              <div className="btn_blk">
                <Link href="" className="site_btn">
                  14 days Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* trusted section */}
      <Trust data={trusted} />

      <section className="delivering_result_sec">
        <div className="contain">
          <div className="text">
            <h2>Four good reasons</h2>
          </div>
          <div className="result_tabs flex">
            <div className="colL">
              {delivery_result_tabs.map((val, i) => {
                return (
                  <div
                    className={
                      tab == val.id ? "latest_tabs active" : "latest_tabs"
                    }
                    key={i}
                    onClick={() => setTab(val.id)}>
                    <span>{val.title}</span>
                  </div>
                );
              })}
            </div>
            <div className="colR">
              <div className="tabs_content">
                {tab == 1 && <Complete data={solutions.Complete} />}
                {tab == 2 && <Customized data={solutions.Customized} />}
                {tab == 3 && <Independent data={solutions.Independent} />}
                {tab == 4 && <Personal data={solutions.Personal} />}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* partner sec */}
      <Integration data={integration} />
    </main>
  );
}
