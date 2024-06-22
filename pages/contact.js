import Link from "next/link";
import React from "react";
export default function contact() {
  return (
    <>
      <main>
      <section className="about_banner">
            <div className="contain">
                <div className="cntnt text-center">
                    <h1>Contact Us</h1>
                    <p>
                        <Link href="/">Home</Link>
                        <span>{">"}</span>
                        <span>Contact Us</span>
                    </p>
                </div>
            </div>
        </section>
        <section id="contact_sec">
          <div className="contain">
            <div className="flex">
              <div className="col">
                <div className="inner">
                  <div className="image">
                    <img src="images/icon-map-marker.svg" alt="" />
                  </div>
                  <div className="cntnt">
                    <h5>Address</h5>
                    <p>Lorance Road 542B, Tailstoi Town</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="image">
                    <img src="images/icon-envelope-fill.svg" alt="" />
                  </div>
                  <div className="cntnt">
                    <h5>Email</h5>
                    <Link href="">abcinfo@gmail.com</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="image">
                    <img src="images/icon-phone.svg" alt="" />
                  </div>
                  <div className="cntnt">
                    <h5>Phone</h5>
                    <Link href="">(734) 219-86796</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===== */}
        <section className="contact-form">
          <div className="contain">
            <div className="sec_heading">
              <h2>We’re Here to Help You</h2>
            </div>
            <div className="inner">
              <div className="sec_head">
                <h3>Let’s Start</h3>
              </div>
              <form action="">
                <h3></h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type="text"
                        className="input"
                        required="required"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type="text"
                        className="input"
                        required="required"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type="text"
                        className="input"
                        required="required"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type="text"
                        className="input"
                        required="required"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="txtGrp">
                      <textarea
                        type="textarea"
                        className="input txtArea"
                        rows="4"
                        required="required"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="cta">
                      <button className="site_btn color">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
