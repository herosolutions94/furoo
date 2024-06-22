import React from 'react'
import Link from "next/link"
export default function Feature1() {
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
      <section></section>

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

      {/* partner sec */}
      <section>
        
      </section>

    </div>
  )
}
