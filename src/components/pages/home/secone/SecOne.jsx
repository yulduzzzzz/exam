import React,{ useState, useEffect } from 'react'
import l from './SecOne.module.css'
import axios from 'axios';
function SecOne() {
    const [val, setVal] = useState([]);
    useEffect (()=>{
axios.get("https://admin.satis-fit.uz/api/home/menu_category").then((res)=>{
    let data = res.data.data[0];
    setVal(data);
});
    },[]);
  return (
    <div className={l.SecOne}>
        <div className="container">
            <div className={l.one}>
                <div className={l.imgbox}>
                <img src={val.url} className={l.img} alt="" />
                </div>
<h1 className={l.title} >{val.title}</h1>
<p className={l.text} >{val.short_content}</p>
<a className={l.link} href="">{val.link}</a>
            </div>
        </div>
    </div>
  )
}

export default SecOne