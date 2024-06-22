import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import Job from "@/components/job";
import Pagination from "@/components/pagination";

export default function Jobs() {
    
    const job = [
        {
            id:"job1",
            icon:"/images/job1.png",
            title:"Junior FULL stack of Front-end webdeveloper ",
            location:"Brussels",
            type:"Full Time",
            money:"50-55k",
            time:"29 min ago",
            description:"Mollit in laborum tempoDe corona-crisis hakt grondig in op onze jarenlange gewoontes. Plots is het als KMO-bedrijf niet meer evident om fysiek af te spreken met je boekhoudkantoor."
        },
        {
            id:"job2",
            icon:"/images/job1.png",
            title:"Junior FULL stack of Front-end webdeveloper ",
            location:"Brussels",
            type:"Full Time",
            money:"50-55k",
            time:"29 min ago",
            description:"Mollit in laborum tempoDe corona-crisis hakt grondig in op onze jarenlange gewoontes. Plots is het als KMO-bedrijf niet meer evident om fysiek af te spreken met je boekhoudkantoor."
        },
        {
            id:"job3",
            icon:"/images/job1.png",
            title:"Junior FULL stack of Front-end webdeveloper ",
            location:"Brussels",
            type:"Full Time",
            money:"50-55k",
            time:"29 min ago",
            description:"Mollit in laborum tempoDe corona-crisis hakt grondig in op onze jarenlange gewoontes. Plots is het als KMO-bedrijf niet meer evident om fysiek af te spreken met je boekhoudkantoor."
        },
        {
            id:"job4",
            icon:"/images/job1.png",
            title:"Junior FULL stack of Front-end webdeveloper ",
            location:"Brussels",
            type:"Full Time",
            money:"50-55k",
            time:"29 min ago",
            description:"Mollit in laborum tempoDe corona-crisis hakt grondig in op onze jarenlange gewoontes. Plots is het als KMO-bedrijf niet meer evident om fysiek af te spreken met je boekhoudkantoor."
        },
        {
            id:"job5",
            icon:"/images/job1.png",
            title:"Junior FULL stack of Front-end webdeveloper ",
            location:"Brussels",
            type:"Full Time",
            money:"50-55k",
            time:"29 min ago",
            description:"Mollit in laborum tempoDe corona-crisis hakt grondig in op onze jarenlange gewoontes. Plots is het als KMO-bedrijf niet meer evident om fysiek af te spreken met je boekhoudkantoor."
        },
        {
            id:"job6",
            icon:"/images/job1.png",
            title:"Junior FULL stack of Front-end webdeveloper ",
            location:"Brussels",
            type:"Full Time",
            money:"50-55k",
            time:"29 min ago",
            description:"Mollit in laborum tempoDe corona-crisis hakt grondig in op onze jarenlange gewoontes. Plots is het als KMO-bedrijf niet meer evident om fysiek af te spreken met je boekhoudkantoor."
        }
    ]
  return (
    <>
      <main>
        <section className="about_banner">
            <div className="contain">
                <div className="cntnt text-center">
                    <h1>Jobs</h1>
                    <p>
                        <Link href="/">Home</Link>
                        <span>{">"}</span>
                        <span>Jobs</span>
                    </p>
                </div>
            </div>
        </section>
        <section className="job_list_sec">
            <div className="contain">
                <div className="cntnt">
                    <h2>Job Seeker Resources</h2>
                </div>
                <Job data={job}/>
            </div>
        </section>
      </main>
</>
);
}
