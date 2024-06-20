import Link from "next/link"
import { useRouter} from 'next/router'
import React,{useState} from 'react'
export default function Header() {
  const router = useRouter();
  const path = router.pathname;

    const[toggle,setToggle] = useState(false);
    const ToggleAction = () =>{
      setToggle(!toggle);
    }
    const[pagesDrop,setpagesDrop] = useState(false);
    const TogglePagesDrop = () => {
      setpagesDrop(!pagesDrop);
    }
    const closePagesDrop = () => {
      setpagesDrop(false);
      // setToggle(false);
      
    };

    return (
      <header>
        <div className="contain">
          <div className="logo">
              <Link href="/">
                  <img src="/images/logo.svg" alt="" />
              </Link>
          </div>
          <div className={toggle ? "toggle active" : "toggle"} onClick={ToggleAction}><span></span></div>
          <nav id="nav" className={toggle ? "active" : ""}>
            <ul>
              <li><Link href="/" onClick={ToggleAction}>Home</Link></li>
              <li
                  className={`drop ${pagesDrop ? "open" : ""}`}
                  onMouseEnter={TogglePagesDrop}
                  onMouseLeave={closePagesDrop}
                  onClick={TogglePagesDrop}
                >
                  <div className="drop_btn">Pages</div>
                  <ul className={pagesDrop ? "sub sm active" : "sub sm"}>
                    <li onClick={ToggleAction}>
                      <Link href="" onClick={closePagesDrop}>
                   Page 1
                      </Link>
                    </li>
                    
                
               
                  </ul>
                </li>
              <li><Link href="/pricing" onClick={ToggleAction}>Pricing</Link></li>
              <li><Link href="/webinar" onClick={ToggleAction}>Webinar</Link></li>
              <li><Link href="/about" onClick={ToggleAction}>About Us</Link></li>
              <li><Link href="/login" className="site_btn" onClick={ToggleAction}>Login</Link></li>
              <li><Link href="/register" className="site_btn color" onClick={ToggleAction}>Register</Link></li>
            </ul>
          </nav>
          <div className="clearfix"></div>
        </div>
      </header>
    )
  }