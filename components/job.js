import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Job = ({ data }) => {
  return (
    <div className="job_lst">
    {data.map((val) => {
        return(
            <div className="inner_job_list" key={val.id}>
                        <div className="job_icon">
                            <Image src={val.icon} width={200} height={200} alt={val.title} />
                        </div>
                        <div className="job_info">
                            <h4>
                                <Link href="/jobs/detail">
                                {val.title} <span>New post</span>
                                </Link>
                            </h4>
                            <ul>
                                <li>
                                    <Image src="/images/location.svg" width={200} height={200} alt=""/>
                                    <span>{val.location}</span>
                                </li>
                                <li>
                                    <Image src="/images/clock.svg" width={200} height={200} alt=""/>
                                    <span>{val.type}</span>
                                </li>
                                <li>
                                    <Image src="/images/money.svg" width={200} height={200} alt=""/>
                                    <span>{val.money}</span>
                                </li>
                                <li>
                                    <Image src="/images/calendar.svg" width={200} height={200} alt=""/>
                                    <span>{val.time}</span>
                                </li>
                            </ul>
                            <p>{val.description}</p>
                        </div>
                    </div>
        );
    })}
    </div>
  );
};

export default Job;
