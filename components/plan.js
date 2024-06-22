import Link from "next/link";
import React from "react";
export default function Plan() {
  return (
    <>
      <section className="sec_plans">
        <div className="contain">
          <div className="sec_heading">
            <h2>Best & Simple Pricing</h2>
            <p>
              By offering a range of pricing plans and flexible billing options,
              our platform ensures that SMEs and self-employed individuals can
              find a plan that fits their budget and business needs.
            </p>
          </div>
          <div className="flex">
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/rocket.png" alt="" />
                </div>
                <div className="content">
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
                  <div className="cta">
                    <Link href="" className="site_btn blue_btn">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/rocket.png" alt="" />
                </div>
                <div className="content">
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
                  <div className="cta">
                    <Link href="" className="site_btn blue_btn">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/rocket.png" alt="" />
                </div>
                <div className="content">
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
                  <div className="cta">
                    <Link href="" className="site_btn blue_btn">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
