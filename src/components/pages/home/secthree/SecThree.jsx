import React,{ useState, useEffect} from 'react'
import l from './SecThree.module.css'
import axios from 'axios';
function SecThree() {
    const [val, setVal] = useState([]);
    useEffect(()=>{
axios.get("https://admin.satis-fit.uz/api/home/about_product").then((res)=>{
const data = res.data.data;
setVal(data);
});
    },[]);
  return (
    <div className={l.SecThree}>
        <div className="container">
            <h1 className={l.title}>{val.title}</h1>
<div className={l.one}>
    <div className={l.textBox}>
        <p className={l.text} dangerouslySetInnerHTML={{__html: val.content}}></p>
        <button className={l.btn}>Подробнее</button>
    </div>
    <img src={val.img} className={l.img} alt="" />
</div>
        </div>
    </div>
  );
}

export default SecThree