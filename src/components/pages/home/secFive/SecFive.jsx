import React,{ useState, useEffect } from 'react'
import l from './SecFive.module.css'
// import la from '../../../../assets/images/la.png'
import stt from '../../../../assets/fonts/stt.png'
import date from '../../../../assets/icon/date.svg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import ReactOwlCarousel from 'react-owl-carousel';
function SecFive() {
    const [val, setVal] = useState([]);
    useEffect(()=>{
axios.get("https://admin.satis-fit.uz/api/events").then((res)=>{
    const data = res.data.data[0];
    setVal(data);
});
    },[]);
  return (
    <div className={l.SecFive}>
     <div className="container">
        <h1 className={l.title}>Мероприятия</h1>
      <OwlCarousel      className="owl-theme" items={1} margin={5}    key={`carousel_${val.length ? val.length : 0}`} 
      nav={true}
      autoplay={true}
      autoplayTimeout={1000}
      loop={true}>
          <div className={l.big}>
        <div className={l.one}>
<img src={val.url} className={l.url} alt="" />
<h1 className={l.titlee} >{val.title}</h1>
<div className={l.boxp}>
  {/* <img src={la} className={l.ll} alt="" /> */}
<p className={l.text} >{val.location}</p>

</div>

<div className={l.line}></div>

<div className={l.boxson}>
  <div className={l.ii}>
    <img src={date}  className={l.d} alt="" />
    <p className={l.datee} >{val.date}</p>
  </div>
  <div className={l.l}>
    <a href=""  className={l.linkk}  >Подробнее</a>
    <a href="">
     <img src={stt} className={l.ste} alt="" />
    </a>
  </div>
</div>
        </div>
        <div className={l.one}>
<img src={val.url} className={l.url} alt="" />
<h1 className={l.titlee} >{val.title}</h1>
<div className={l.boxp}>
  {/* <img src={la} className={l.ll} alt="" /> */}
<p className={l.text} >{val.location}</p>

</div>

<div className={l.line}></div>

<div className={l.boxson}>
  <div className={l.ii}>
    <img src={date}  className={l.d} alt="" />
    <p className={l.datee} >{val.date}</p>
  </div>
  <div className={l.l}>
    <a href=""  className={l.linkk}  >Подробнее</a>
    <a href="">
     <img src={stt} className={l.ste} alt="" />
    </a>
  </div>
</div>
        </div>
  


        </div>

      </OwlCarousel>
      
        
     </div>
    </div>
  )
}

export default SecFive