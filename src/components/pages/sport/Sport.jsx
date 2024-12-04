import React,{  useState, useEffect } from 'react';
import l from './Sport.module.css';
import axios from 'axios';
import mass from '../../../assets/fonts/mass.png'
import ones from '../../../assets/fonts/ones.png'
import pack from '../../../assets/fonts/pack.png'
import strel from '../../../assets/fonts/strel.png'
function Sport() {
  const [val, setVal] = useState ( [] );
  useEffect(() => {
    axios.get("https://admin.satis-fit.uz/api/sport").then((res)=>{
const data = res.data.data[0];
setVal (data);
    });
  },[]);
  return (
<div className={l.Sport}>
<div className={l.back}>
  <div className="container">
    <div className={l.box}>
    <img src={mass} className={l.sar} alt="" />
      <h4 className={l.g} >Главная страница</h4>
      <img src={ones} className={l.i} alt="" />
      <h4 className={l.sp} >Спорт</h4>
    </div>
    <h1 className={l.sport} >Спорт</h1>
    <div className={l.boxone}>
      <img src={val.url}  className={l.photo}  alt="" srcset="" />
      <h1  className={l.title} >{val.title}</h1>
      <p className={l.short} >{val.short_content}</p>
    <div className={l.boxll}>
    <div className={l.boxdate}>
        <img src={pack} className={l.packs} alt="" />
        <p className={l.date} >{val.date}</p>
    <div className={l.boxlink}>

    </div>
      </div>
      <div className={l.boxlink}>
        <a href="" className={l.linklink} >Подробнее</a>
      <a href=""  className={l.str} >
        <img src={strel}  alt="" />
      </a>
      </div>
    </div>
    </div>
  </div>
</div>
  </div>
  )
}

export default Sport