import React, { useState, useEffect } from 'react'
import l from './SecTwo.module.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
function SecTwo() {
    const [val, setVal] = useState ([]);
    useEffect (() => {
axios.get("https://admin.satis-fit.uz/api/stati").then((res) => {
let data = res.data.data;
setVal(data);
});
    }, []);
  return (
    <div className={l.SecTwo}>
        <div className="container">
        <h1 className={l.title}>Интересные статьи</h1>
        <OwlCarousel key={`carousel_${val.length ? val.length : 0}`}     className="owl-theme" items={2} margin={30} 
        nav={true}
        autoplay={true}
        autoplayTimeout={5000}
         loop={true} >
            {val.map((item, index) => {
                return (
                    <div  key={index} className={l.card}>
                    <div className={l.one}>
                        <h1 className={l.title_card} >{item.title}</h1>
                        <p className={l.text}>{item.short_content}</p>
                        <div className={l.box}>
                        <p className={l.date}>{item.date}</p>
                        <a href="" className={l.link} >Подробнее</a>
                        </div>
                    </div>
                    <img src={item.url} className={l.img}  alt="" />
                </div>
                );
            })}
            </OwlCarousel> 
            
      
        </div>
    </div>
  )
}

export default SecTwo