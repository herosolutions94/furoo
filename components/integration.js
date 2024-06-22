import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function Integration({data}) {
  return (
    <>
      <section className="integration_sec">
            <div className="contain">
                <div className="cntnt">
                    <h2>{data.title}</h2>
                    <div className="btn_blk">
                        <Link href={data.btn_lnk} className="site_btn">{data.btn_lbl}</Link>
                    </div>
                </div>
                <div className="flex">
                    {data.logos.map((val)=>{
                        return(
                            <div className="col" key={val.id}>
                                <div className="inner">
                                    <div className="icon">
                                        <Image src={val.logo} width={200} height={200} alt={val.title} />
                                    </div>
                                    <div className="txt">
                                        <h5>{val.title}</h5>
                                        <p>{val.pera}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    
                </div>
            </div>
        </section>
    </>
  );
}
