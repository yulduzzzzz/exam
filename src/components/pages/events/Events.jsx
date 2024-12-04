import React,{ useState, useEffect } from 'react'
import l from './Events.module.css'
import e from '../../../assets/icon/e.svg'
import ee from '../../../assets/icon/ee.png'
import lolo from '../../../../src/assets/fonts/lolo.png'
import pa from '../../../../src/assets/fonts/pa.png'
import sd from '../../../../src/assets/fonts/sd.png'
import axios from 'axios';

function Events() {
  const [val,setVal] = useState ([]);
useEffect(() => {
axios.get("https://admin.satis-fit.uz/api/events").then((res) => {
const data = res.data.data[0];
setVal(data);

console.log(data);
});
},[]);
  return (
    <div className={l.Events}>
      <div className={l.back}>
        <div className="container">
<div className={l.box}>
  <img src={ee} className={l.w} alt="" />
  <h4 className={l.g} >Главная страница</h4>
  <img src={e} className={l.i} alt="" />
  <h4 className={l.s} >Мероприятия</h4>
</div>
<h1 className={l.bi} >Мероприятия</h1>
<div className={l.boxone}>
<img src={val.url}  className={l.img} alt="" />
<h1 className={l.titl}>{val.title}</h1>
<div className={l.boxl}>

  <a href=""  className={l.lo} >
    <img src={lolo} alt="" />
  </a>
  <p className={l.loc}>{val.location}</p>
</div>
<div className={l.line}></div>

<div className={l.son}>
  <div className={l.boxson}>
    <img src={pa} className={l.paa} alt="" />
    <p className={l.pl} >{val.date}</p>
  </div>
  <div className={l.mini}>
    <a href=""className={l.linn}  >Подробнее</a>
    <a href=""    className={l.ss}  >
      <img src={sd}  alt="" />
    </a>
  </div>
</div>
</div>
        </div>
      </div>
    </div>
  )
}

export default Events