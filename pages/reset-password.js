import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ResetPassword() {
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
                <h2>Rest your Password</h2>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="txtGrp">
                    <input
                      type="text"
                      className="input"
                      required="required"
                      placeholder="New Password"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <input
                      type="text"
                      className="input"
                      required="required"
                      placeholder="Confirm New Password"
                    />
                  </div>
                </div>
              </div>
              
              <div className='btn_blk'>
                <button className='site_btn color block'>Reset Password</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
