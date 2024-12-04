import React,{ useState, useEffect } from 'react'
import l from './Diet.module.css'
import dmass from '../../../../src/assets/fonts/dmass.png'
import dstrel from '../../../../src/assets/fonts/dstrel.png'
import packone from '../../../../src/assets/fonts/packone.png'
import str from '../../../../src/assets/fonts/str.png'
import axios from 'axios';
function Diet() {


    const [diet, setDiet] = useState( [] );
    useEffect(() => {
axios.get("https://admin.satis-fit.uz/api/dieta/view/pole-all-more-already-business-today-moments-high-level-door-due-panel").then((res)=>{
const data = res.data.data;
setDiet(data);
});
    },[]);
  return (
    <div className={l.Diet}>
      <div className={l.back}>
        <div className="container">
            <div className={l.box}>
                <img src={dmass} className={l.d} alt="" />
                <h4 className={l.g} >Главная страница</h4>
                <img src={dstrel} className={l.s} alt="" />
                <h4 className={l.di} >Диета</h4>
            </div>
            <h1 className={l.die} >Диета</h1>
            <div className={l.boxreact}>
<img src={diet.gallery[0].img} className={l.img} alt="" />
<h1  className={l.title}  >{diet.title}</h1>
<p className={l.p} >Для того чтобы поддерживать стабильный вес в течение длительного времени..</p>
<div className={l.boxbig}>
                <div className={l.boxdate}>
                    <img src={packone} className={l.pac} alt="" />
                    <p className={l.da}  >{diet.date}</p>
                </div>
                <div className={l.boxbox}>
                    <a href="" className={l.link}  >Подробнее</a>
                    <a href=""> 
                    <img src={str}  className={l.strr} alt="" />
                    </a>
                </div>
            </div>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default Diet