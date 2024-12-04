import React,{ useState, useEffect } from 'react'
import l from './Footer.module.css'
import mas from '../../../../src/assets/images/mas.png'
import ins from '../../../../src/assets/images/ins.png'
import yu from '../../../../src/assets/images/yu.png'
import fon from '../../../../src/assets/images/fon.png'
import mase from '../../../../src/assets/images/mase.png'

import axios from 'axios';
function Footer() {
  const [val, setVal] = useState([]);
  const [con, setcon] = useState([]);
  useEffect(()=>{
axios.get("https://admin.satis-fit.uz/api/menu").then((res)=>{
  const data = res.data.data;
  setVal(data);
});
axios.get("https://admin.satis-fit.uz/api/contact").then((res)=>{
  const data = res.data.data;
  setcon(data);
});
  },[]);
  return (
    <div className={l.Footer}>
<div className={l.box}>
<a href="">
  <img src="https://satis-fit.uz/_nuxt/img/logo-white.f1ada18.svg" className={l.logo}  alt="" />
</a>
</div>
<div className={l.line}></div>
<ul className={l.items}>
  {val.map((items,index)=>{
      return(
        <li key={index} className={l.list}>
          <a href="" className={l.link} >{items.title}</a>
        </li>
      );
    })}
</ul>
<div className={l.line}></div>
<ul className={l.contact}>
  {con.map((items, index) => {
  return(
     <li key={index}>
      
   <a href="" className={l.linkk} >{items.title}</a>

     </li>
  )
})}

</ul>
<div className={l.line}></div>
<div className={l.Footer_end}>
  <p className={l.text}>Все права защищены</p>
  <div className={l.boxx}>
    <img src={mas} className={l.mass} alt="" />
    <img src={ins} className={l.inss} alt="" />
    <img src={yu} className={l.yuu} alt="" />
   
  </div>
  <p className={l.text}>© Sightex LLC 2022</p>
</div>
      </div>
  )
}

export default Footer