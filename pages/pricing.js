import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Integration from "@/components/integration";
import Plan from "@/components/plan";
export default function Pricing() {
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
  return (
    <>
      <main>
        <section className="about_banner">
          <div className="contain">
            <div className="cntnt text-center">
              <h1>Pricing</h1>
              <p>
                <Link href="/">Home</Link>
                <span>{">"}</span>
                <span>Pricing</span>
              </p>
            </div>
          </div>
        </section>
        <section className="pricing_sec">
          <div className="contain">
            <div className="cntnt text-center">
              <div className="sec_heaing">
                <h2>Start today with worry-free administration</h2>
              </div>
              <p>
                By offering a range of pricing plans and flexible billing
                options, our platform ensures that SMEs and self-employed
                individuals can find a plan that fits their budget and business
                needs.
              </p>
            </div>
            <Plan />
          </div>
        </section>

        <Integration data={integration} />
      </main>
    </>
  );
}
