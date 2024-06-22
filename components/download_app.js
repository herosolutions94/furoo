import Link from "next/link";
import React from "react";
export default function Download_app() {
  return (
    <>
      <section className="sec_download">
        <div className="contain">
          <div className="inside">
            <div className="flex">
              <div className="col1">
                <div className="inner">
                  <div className="sec_heading">
                    <h2>Let’s download free from apple and play store</h2>
                  </div>
                  <div className="content">
                    <p>
                      Instant free download from apple and play store orem Ipsum
                      is simply dummy text of the printing.
                    </p>
                    <ul>
                      <li>
                        <Link href="">
                          <img src="images/google.svg" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <img src="images/app.svg" alt="" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="images/download.png" alt="" />
                </div>
              </div>
            </div>
            <div className="percent">
              <div className="flex">
                <div className="cols">
                  <div className="cols_inner">
                    <h2>86%</h2>
                    <p>Gets your invoices paid faster</p>
                  </div>
                </div>
                <div className="cols">
                  <div className="cols_inner">
                    <h2>91%</h2>
                    <p>Saves more than 4 hours per month</p>
                  </div>
                </div>
                <div className="cols">
                  <div className="cols_inner">
                    <h2>94%</h2>
                    <p>Gain better insight into costs & profits</p>
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
