import SiteMaster from "./sitemaster";
import Header from "./header";
import Footer from "./footer";
export default function Layout({ children }) {
  return (
    <div className="content">
      <SiteMaster />
      <Header />
      {children}
      <Footer/>
    </div>
  );
}
