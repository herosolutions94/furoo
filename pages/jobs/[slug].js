import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function JobDetails() {
  return (
    <>
      <main>
        <section className="about_banner">
            <div className="contain">
                <div className="cntnt text-center">
                    <h1>Job Detail</h1>
                    <p>
                        <Link href="/">Home</Link>
                        <span>{">"}</span>
                        <span>Job Detail</span>
                    </p>
                </div>
            </div>
        </section>
        <section className="job_list_sec">
            <div className="contain">
                <div className="ck_editor">
                    <h2>Junior FULL stack or Front-end web developer</h2>
                    <div className="br"></div>
                    <h4>Who are we?</h4>
                    <p>The corona crisis is having a profound impact on our long-standing habits. Suddenly, as an SME company, it is no longer easy to physically meet with your accounting office. Furoo is a pioneer in the field of digitalization of communication with accounting firms. Our hundreds of customers remain connected to their various accounting offices. All these file managers can continue to perform their tasks from home. But in these difficult corona-infected times, our end customers are the big winners. They can continue their administration at any time and from any location. </p>
                    <p>Furoo is a fast-growing scale-up that provides smart business software to SMEs and self-employed people. Thanks to our cloud solution, these customers can manage their entire daily business operations easily and efficiently. Our solution does not stand still and we try to make our customer's lives even easier every day by further digitizing. This through web, mobile app, integrations,…</p>
                    <p>Furoo is a truly technology-driven company and is urgently looking for enthusiasts to join our current team of developers.</p>
                    <p>You read that right: we are talking about a team. Not about an old-fashioned hierarchical structure where everyone has to be in a box. We do have a young, driven team where the developers learn from each other and each have their own input. In consultation with our internal and external IT experts, we also continuously focus on the latest state-of-the-art technology. </p>
                    <div className="br"></div>
                    <h4>Are you…</h4>
                    <p>Are you always eager to learn and curious about the latest trends and developments and would you like to get started with them?</p>

                    <p>Someone with common sense and the drive to learn and bring the projects to a successful conclusion?</p>

                    <p>Someone who enjoys working in a young and dynamic team, where you have a major influence on the end product and help determine the further course of our product?</p>

                    <p>Then you are the man/woman we are looking for.</p>
                    <div className="br"></div>
                    <h4>How do you help FUROO?</h4>
                    <p>You mainly contribute to the development of our FUROO web platform. Together with the team, you will develop varied new features and implement them independently in our environment. You also have the opportunity to collaborate on our mobile applications and API.</p>
                    <div className="br"></div>
                    <h4>What should you be able to do?</h4>
                    <p>You have a bachelor's or master's degree in ICT or equivalent through experience.</p>
                    <p>You have knowledge of:</p>
                    <ul>
                        <li>Javascript / Typescript</li>
                        <li>C.S.S</li>
                        <li>HTML5</li>
                        <li>Angular Framework</li>
                        <li>GIT</li>
                    </ul>
                    <div className="br"></div>
                    <h4>Optionally you have knowledge of:</h4>
                    <ul>
                        <li>.net core</li>
                        <li>GraphQL</li>
                        <li>Apollo Framework</li>
                        <li>MSSQL</li>
                        <li>Devops (Azure)</li>
                    </ul>
                    <div className="br"></div>
                    <h4>What do we offer in return?</h4>
                    <p>We offer an attractive salary, supplemented with interesting extra-legal benefits and the option to work from home. You will end up in a jovial team that is full of ambitions, with an amicable atmosphere. This means that with us you are not just a code monkey, but an important member of the team who can help make decisions and thus put your own stamp on the end result.</p>
                    <p>You will be employed in Ypres (with the option of working from home), one minute from the motorway exit and you will end up in a young and dynamic team.</p>
                    <div className="br"></div>
                    <h4>Interested?</h4>
                    <p>
                    Send us your CV and motivation letter via <Link href="mailto:jobs@furoo.be">jobs@furoo.be</Link> and who knows, you may soon help build the daily solution for the administration of thousands of SMEs and self-employed people.</p>
                </div>
            </div>
        </section>
      </main>
</>
);
}
