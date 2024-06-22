import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Integration from "@/components/integration";

export default function Pricing() {
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
                    <p>By offering a range of pricing plans and flexible billing options, our platform ensures that SMEs and self-employed individuals can find a plan that fits their budget and business needs.</p>
                </div>
                <div className="flex">
                    <div className="col">
                        <div className="inner">
                            <div className="icon">
                                <div className="inner_icon">
                                    <Image src="/images/rocket.png" alt="" width={200} height={200} />
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
                                <Link href="" className="site_btn color2">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner">
                            <div className="icon">
                                <div className="inner_icon">
                                    <Image src="/images/rocket.png" alt="" width={200} height={200} />
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
                                <Link href="" className="site_btn color2">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner">
                            <div className="icon">
                                <div className="inner_icon">
                                    <Image src="/images/rocket.png" alt="" width={200} height={200} />
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
                                <Link href="" className="site_btn color2">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Integration />
      </main>
</>
);
}
