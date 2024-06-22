import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function Integration() {
  return (
    <>
      <section className="integration_sec">
            <div className="contain">
                <div className="cntnt">
                    <h2>Integrate Immediately with your other Workhorses</h2>
                    <div className="btn_blk">
                        <Link href="" className="site_btn">See All Integrations</Link>
                    </div>
                </div>
                <div className="flex">
                    <div className="col">
                        <div className="inner">
                            <div className="icon">
                                <Image src="/images/integration1.svg" width={200} height={200} alt="" />
                            </div>
                            <div className="txt">
                                <h5>Integrate</h5>
                                <p>Say goodby to hidden bank charges.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner">
                            <div className="icon">
                                <Image src="/images/integration2.svg" width={200} height={200} alt="" />
                            </div>
                            <div className="txt">
                                <h5>Integrate</h5>
                                <p>Say goodby to hidden bank charges.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner">
                            <div className="icon">
                                <Image src="/images/integration3.svg" width={200} height={200} alt="" />
                            </div>
                            <div className="txt">
                                <h5>Integrate</h5>
                                <p>Say goodby to hidden bank charges.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner">
                            <div className="icon">
                                <Image src="/images/integration4.svg" width={200} height={200} alt="" />
                            </div>
                            <div className="txt">
                                <h5>Integrate</h5>
                                <p>Say goodby to hidden bank charges.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner">
                            <div className="icon">
                                <Image src="/images/integration5.svg" width={200} height={200} alt="" />
                            </div>
                            <div className="txt">
                                <h5>Integrate</h5>
                                <p>Say goodby to hidden bank charges.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner">
                            <div className="icon">
                                <Image src="/images/integration6.svg" width={200} height={200} alt="" />
                            </div>
                            <div className="txt">
                                <h5>Integrate</h5>
                                <p>Say goodby to hidden bank charges.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
