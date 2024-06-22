import React from 'react'
import Link from "next/link"
import Trust from '@/components/trust'
import Integration from '@/components/integration'
export default function Feature1() {
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

      <section className='m1'>
        <div className='contain'>
          <div className='flex'>
            <div className='col'>
              <div className='image'>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/476E6dYIE_s?si=HCif3ewlM79Bfzor"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              </div>
            </div>
            <div className='colr'>
             <h2>Why fantastic entrepreneurs choose Furoo</h2>
             <p>Manage your entire administration from one platform. Make yourself comfortable.</p>
             <form>
              <input type="email" className='input' placeholder='Email' />
             </form>
             <div className='btn_blk'>
             <Link href="" className='site_btn'>14 days Free</Link>
             </div>
            </div>
          </div>
        </div>
      </section>

      {/* trusted section */}
      <Trust data={trusted}/>

      <section className='m1'>
        <div className='contain'>
          <div className='flex'>
          <div className='col'>
          <h2>Invoices  & Quotations</h2>
            <ul>
              <li>Create professional quotes in your own corporate identity</li>
              <li>Instantly convert your quote into an invoice or order confirmation</li>
              <li>Scan purchase invoices and Furoo recognizes the data</li>
              <li>Email invoices directly to your customers</li>
              <li>Track payments & send payment reminders</li>

            </ul>
            </div>
          <div className='colr'>
         
            <div className='image image2'>
                <img src="images/m2.png"></img>
              </div>
            </div>
          
          
          </div>
        </div>
      </section>

      <section className='m1 mtt'>
        <div className='contain'>
          <div className='flex'>
          <div className='col'>
              
          <div className='image image2'>
                <img src="images/m3.png"></img>
              </div>
        
            </div>
          <div className='colr'>
          <h2>Manage relationships</h2>
            <ul>
              <li>View leads, customers & suppliers in a simple overview</li>
              <li>Complete data automatically based on a VAT number</li>
              <li>View every email, telephone call & meeting in the customer history</li>
              <li>Send newsletters with our Mailchimp integration</li>
              <li>On the go? Everything always at hand with the Furoo Mobile App</li>

            </ul>
            </div>
          
          
          </div>
        </div>
      </section>

      <section className='m1'>
        <div className='contain'>
          <div className='flex'>
          <div className='col'>
          <h2>Manage projects</h2>
            <ul>
              <li>Monitor your budget perfectly</li>
              <li>Link your purchases, achievements, quotations to a project</li>
              <li>Don't lose sight of any deadline</li>
              <li>Track employee work & link hours worked</li>
              <li>Make quick naculations</li>

            </ul>
            </div>
          <div className='colr'>
         
            <div className='image image2'>
                <img src="images/m4.png"></img>
              </div>
            </div>
          
          
          </div>
        </div>
      </section>

      <section className='m1 mtt'>
        <div className='contain'>
          <div className='flex'>
          <div className='col'>
              
          <div className='image image2'>
                <img src="images/m5.png"></img>
              </div>
        
            </div>
          <div className='colr'>
          <h2>Inventory management</h2>
            <ul>
              <li>Add items directly to your quote</li>
              <li>Add your product lists</li>
              <li>Receive a notification if the minimum stock is exceeded</li>
              <li>Send newsletters with our Mailchimp integration</li>
              <li>Manage your warehouse digitally - that's easy

</li>

            </ul>
            </div>
          
          
          </div>
        </div>
      </section>

      <section className='m1'>
        <div className='contain'>
          <div className='flex'>
          <div className='col'>
          <h2>Register time</h2>
            <ul>
              <li>Log your time without thinking with the FUROO mobile app</li>
              <li>Link hours worked to projects</li>
              <li>Invoice services immediately to the right customer</li>
              <li>No discussions afterwards with detailed performance lists</li>
              <li>Increase productivity & manage your staff better</li>

            </ul>
            </div>
          <div className='colr'>
         
            <div className='image image2'>
                <img src="images/m6.png"></img>
              </div>
            </div>
          
          
          </div>
        </div>
      </section>

      <Integration data={integration}/>

    </main>
  )
}
