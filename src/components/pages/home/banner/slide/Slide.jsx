import React,{ useState, useEffect } from 'react'
import l from './Slide.module.css'
import axios from 'axios';
function Slide() {
    const [val, setVal] = useState([]);
    useEffect(()=>{
axios.get("https://admin.satis-fit.uz/api/home/banner").then((res)=>{
   let data = res.data.data;
   setVal(data);
   delete data[3];
});
    },[]);
  return (
    <div className={l.row}>
        {
            val.map((item,index)=>{
                return(
                    <div className={l.one} key={index}>
                        <img src={item.url} className={l.url} alt="" />
                        <h1 className={l.title} >{item.title}</h1>
                       
                        <a href="" className={l.link} >Подробнее</a>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Slide
