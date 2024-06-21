import React, { useState, useEffect, useRef } from "react";
import Link from "next/link"
import Complete from './tab-solutions-sections/Complete';
import Customized from './tab-solutions-sections/Customized';
import Independent from './tab-solutions-sections/Independent';
import Personal from './tab-solutions-sections/Personal';
export default function Feature2() {
  const[tab , setTab] = useState(1);
  const[tabQuality , setTabQuality] = useState(9);
  const settings = {
    dots: false,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };
  const delivery_result_tabs = [
    {
      id:"1",
      title:"Independent",
    },
    {
      id:"2",
      title:"Customized",
    },
    {
      id:"3",
      title:"Personal",
    },
    {
      id:"4",
      title:"Complete",
    },
  ]
  const solutions = {
  
    Independent: {
      heading:"Only focus on receiving invoices digitally?",
      sub_heading:"Or also act as a business coach?",
      pera:"Furoo is a complete and modular solution. We look at who your customers are and how you want to position yourself as an accountant. Depending on this we model Furoo.",
      button_lbl:"Speak to a Partner Manager.",
      link:"/"
    },
    Customized: {
      heading:"Only focus on receiving invoices digitally?",
      sub_heading:"Or also act as a business coach?",
      pera:"Furoo is a complete and modular solution. We look at who your customers are and how you want to position yourself as an accountant. Depending on this we model Furoo.",
      button_lbl:"Speak to a Partner Manager.",
      link:"/"
    },
 
    Personal: {
      heading:"Only focus on receiving invoices digitally?",
      sub_heading:"Or also act as a business coach?",
      pera:"Furoo is a complete and modular solution. We look at who your customers are and how you want to position yourself as an accountant. Depending on this we model Furoo",
      button_lbl:"Speak to a Partner Manager.",
      link:"/"
    },
    Complete: {
      heading:"Only focus on receiving invoices digitally?",
      sub_heading:"Or also act as a business coach?",
      pera:"Furoo is a complete and modular solution. We look at who your customers are and how you want to position yourself as an accountant. Depending on this we model Furoo.",
      button_lbl:"Speak to a Partner Manager.",
      link:"/"
    },

  }
  return (
    <div>
      <section className='m_smbanner'>
        <div className='contain'>
<div className='text'>
    <h1>Features</h1>
    <p><Link href="">Home</Link> &gt; Feature</p>
</div>
        </div>
      </section>

      <section className='m1'>
        <div className='contain'>
          <div className='flex'>
            <div className='col'>
              <div className='image'>
                <img src="images/m1.png"></img>
              </div>
            </div>
            <div className='colr'>
             <h2>Why accountants like to work with Furoo</h2>
             <p>Use Furoo as a customer portal or offer a complete software solution to your customers.

</p>
             <form>
              <input type="email" className='input' placeholder='Become an affiliate' />
             </form>
             <div className='btn_blk'>
             <Link href="" className='site_btn'>14 days Free</Link>
             </div>
            </div>
          </div>
        </div>
      </section>

      {/* trusted section */}
      <section></section>

      <section className="delivering_result_sec">
          <div className="contain">
              <div className="">
                <h2>Four good reasons</h2>
              </div>
              <div className="result_tabs flex">
                <div className="colL">
                  {delivery_result_tabs.map((val,i) => {
                    return(
                      <div className={tab == val.id ? "latest_tabs active" : "latest_tabs"} key={i} onClick={() => setTab(val.id)}>
                        <span>{val.title}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="colR">
                  <div className="tabs_content">
                    {tab == 1 && <Complete data = {solutions.Complete}/>}
                    {tab == 2 && <Customized data = {solutions.Customized}/>}
                    {tab == 3 && <Independent data = {solutions.Independent}/>}
                    {tab == 4 && <Personal data = {solutions.Personal}/>}
             
                  </div>
                </div>
              </div>
          </div>
        </section>

      {/* partner sec */}
      <section>
        
      </section>

    </div>
  )
}