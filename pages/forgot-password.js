import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ForgotPassword() {
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
                <h2>Forgot Password?</h2>
                <p>Enter your email address associated  with your account</p>
              </div>
              <div className="row">
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
              
              <div className='btn_blk'>
                <button className='site_btn color block'>Submit</button>
              </div>
              <div className='text-center'>
                <p>Don’t have an account ? <Link href="/register">Sign in</Link></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
