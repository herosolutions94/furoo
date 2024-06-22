import Link from 'next/link'
export default function Independent({data}) {
    return (
        <div className="inner_tabs_content">
  
        <p>{data.heading}</p>
        <p>{data.sub_heading}</p>
        <p>{data.pera}</p>
        <div className="btn_blk">
            <Link href={data.link} className="link">{data.button_lbl}</Link>
      
</div>
</div>
    );
}