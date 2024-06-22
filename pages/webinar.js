import Download_app from "@/components/download_app";
import Integration from "@/components/integration";
import Trust from "@/components/trust";
import Link from "next/link";
import React from "react";

export default function webinar() {
  const trusted = {
    title:"More than 100 accounting firms count on us",
    pera:"By providing robust features, user-friendly design, seamless integration, reliable support, affordable pricing, and top-notch security, we have earned the trust of over 150 companies.",
    logos : [
      {
        id:"logo1",
        logo:"/images/logo1.png"
      },
      {
        id:"logo2",
        logo:"/images/logo2.png"
      },
      {
        id:"logo3",
        logo:"/images/logo3.png"
      },
      {
        id:"logo4",
        logo:"/images/logo4.png"
      },
      {
        id:"logo5",
        logo:"/images/logo5.png"
      },
    ]
  }
  const integration = {
    title:"Integrate Immediately with your other Workhorses",
    btn_lbl:"See All Integrations",
    btn_lnk:"/",
    logos : [
      {
        id:"integ1",
        logo:"/images/integration1.svg",
        title:"Integrate",
        pera:"Say goodby to hidden bank charges."
      },
      {
        id:"integ2",
        logo:"/images/integration2.svg",
        title:"Integrate",
        pera:"Say goodby to hidden bank charges."
      },
      {
        id:"integ3",
        logo:"/images/integration3.svg",
        title:"Integrate",
        pera:"Say goodby to hidden bank charges."
      },
      {
        id:"integ4",
        logo:"/images/integration4.svg",
        title:"Integrate",
        pera:"Say goodby to hidden bank charges."
      },
      {
        id:"integ5",
        logo:"/images/integration5.svg",
        title:"Integrate",
        pera:"Say goodby to hidden bank charges."
      },
      {
        id:"integ6",
        logo:"/images/integration6.svg",
        title:"Integrate",
        pera:"Say goodby to hidden bank charges."
      },
    ]
  }
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
        <Trust data={trusted}/>
        <Download_app />
        <Integration data={integration}/>
      </main>
    </>
  );
}
