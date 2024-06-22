import Download_app from "@/components/download_app";
import Integration from "@/components/integration";
import Trust from "@/components/trust";
import Link from "next/link";
import React from "react";

export default function webinar() {
  return (
    <>
      <main>
        <section className="about_banner">
            <div className="contain">
                <div className="cntnt text-center">
                    <h1>Webinar</h1>
                    <p>
                        <Link href="/">Home</Link>
                        <span>{">"}</span>
                        <span>Webinar</span>
                    </p>
                </div>
            </div>
        </section>
        {/* ==== sec_register === */}
        <section className="uj_register">
          <div className="contain">
            <div className="inner">
              <div className="sec_heading">
                <h3>Register for free</h3>
                <p>Webinar with our digital expert</p>
              </div>
              <form action="">
                <div className="row">
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type="text"
                        className="input"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type="text"
                        className="input"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="txtGrp">
                      <input
                        type="text"
                        className="input"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type="text"
                        className="input"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type="text"
                        className="input"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="txtGrp">
                      <select name="" id="" className="input">
                        <option value="1">Choose a Date</option>
                        <option value="2"></option>
                        <option value="3"></option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="txtGrp">
                      <div class="mini_check">
                        <input type="checkbox" id="check" />
                        <label for="">
                          I agree with the <Link href="">privacy policy</Link>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="cta">
                      <button className="site_btn color">Let’s go</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* ===== */}
        <Trust />
        <Download_app />
        <Integration />
      </main>
    </>
  );
}
