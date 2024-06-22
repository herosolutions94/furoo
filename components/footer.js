import Image from "next/image";
import Link from "next/link"
import React from 'react'

export default function Footer() {
  const data = {
    list_02: [
      {
        id: 1,
        text: "Home",
        link: "/",
      },
      {
        id: 2,
        text: "About Us",
        link: "/about",
      },
      {
        id: 3,
        text: "Pricing",
        link: "/pricing",
      },
      {
        id: 4,
        text: "Webinar",
        link: "/webinar",
      },
      {
        id: 9,
        text: "Contact Us",
        link: "/contact",
      }
    ],
    
    
  }
    return (
      <footer>
          <div className="contain">
            <div className="flex_row main_row row">
              <div className="col-xl-3">
                <div className="in_col">
                  <div className="logo">
                  <img src="/images/logo.svg" alt="" />
                  </div>
                  <p>By offering a range of pricing plans and flexible billing options, our platform ensures that SMEs and self-employed individuals can find a plan that fits their budget and business needs.</p>
                  
                </div>
              </div>
              <div className="col-lg mid_col">
                <div className="in_col">
                  <h4>
                  Useful Links
                  </h4>
                  <ul className="list">
                    {data.list_02.map((val) => {
                      return (
                        <li key={val.id}>
                          <Link href={val.link}>{val.text}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="in_col">
                  <h4>
                  Contact Info
                  </h4>
                  <ul className="contact_lst">
                    <li>
                      <Link href="/#">
                        <Image src="/images/map.svg" width={100} height={100} alt="address" />
                        <span>Lorance Road 542B, Tailstoi Town 5248 MT, Wordwide Country</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <Image src="/images/email.svg" width={100} height={100} alt="email" />
                        <span>furoo@gmail.com</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <Image src="/images/phone.svg" width={100} height={100} alt="phone" />
                        <span>(734) 219-86796</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="in_col">
                  <h4>
                  Join Our Mailing List
                  </h4>
                  <div className="subscribe">
                    <p>Stay up to date with the latest news and deals!</p>
                    <form>
                      <input type="text" className="input" name="" placeholder={"@ email address"}/>
                      <button type="submit" className="site_btn">SUBMIT</button>
                    </form>
                  </div>
                </div>

                <div className="social_logon">
                  <h4>Follow Us |</h4>
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
           
            
          </div>
          <div className="copyright">
              <div className="contain">
                <p className="text-center">
                Copyright © 2024 Furoo, Inc
                </p>
              </div>
            </div>
        </footer>
    )
  }