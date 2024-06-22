import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Register() {
  return (
    <main>
      <section className='logon_sec'>
        <div className='contain'>
          <div className='form_logon'>
            <form>
              <div className='logo_form'>
                <Image src="/images/logo.svg" width={300} height={200} alt='furoo'/>
              </div>
              <div className='sec_heading'>
                <h2>Sign Up</h2>
                <p>Welcome to Furoo</p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="txtGrp">
                    <input
                      type="text"
                      className="input"
                      required="required"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <input
                      type="text"
                      className="input"
                      required="required"
                      placeholder="Surname"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <input
                      type="text"
                      className="input"
                      required="required"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <input
                      type="text"
                      className="input"
                      required="required"
                      placeholder="Company Number"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <input
                      type="text"
                      className="input"
                      required="required"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <p>FUROO BV is committed to protecting and respecting your privacy, and we will only use your personal information to manage your account and provide the products and services you have requested from us. From time to time we would like to contact you about our products and services, and other content that may be of interest to you. If you agree to us contacting you, please select how you would like us to contact you below:</p>
              <div className='lbl_btn'>
                <input type='checkbox' name='agree' value="agree" id="agree"/>
                <label htmlFor='agree'>I agree to receive other communications from FUROO BV.</label>
              </div>
              <p>You can unsubscribe from these messages at any time. Please review our <Link href="">Privacy Policy</Link> for more information about how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy.</p>
              <p>By clicking submit below, you consent to FUROO BV storing and processing the personal information submitted above to provide you with the content requested.</p>
              <div className='btn_blk'>
                <button className='site_btn color block'>Sign up</button>
              </div>
              <div className='text-center'>
                <p>Already have an account? <Link href="/login">Sign in</Link></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
