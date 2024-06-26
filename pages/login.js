import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
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
                <h2>Sign In</h2>
                <p>Welcome to Furoo</p>
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
                <div className="col-md-12">
                  <div className="txtGrp">
                    <input
                      type="text"
                      className="input"
                      required="required"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
              <div className='flex'>
                <div className='lbl_btn'>
                  <input type='checkbox' name='remember' value="remember" id="remember"/>
                  <label htmlFor='remember'>Remember me</label>
                </div>
                <Link href="/forgot-password">Forgot Password ?</Link>
              </div>
              <div className='btn_blk'>
                <button className='site_btn color block'>Sign In</button>
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
