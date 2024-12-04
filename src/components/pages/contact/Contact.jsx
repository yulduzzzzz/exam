import React,{ useState, useEffect } from 'react'
import l from './Contact.module.css'
import me from '../../../../src/assets/fonts/me.png'
import ne from '../../../../src/assets/fonts/ne.png'
import tel from '../../../../src/assets/fonts/tel.png'
import masse from '../../../../src/assets/fonts/masse.png'
import locc from '../../../../src/assets/fonts/locc.png'
import axios from 'axios';
function Contact() {
  const [val, setVal] = useState( [] ) ;
  useEffect (() =>{


    axios.get("https://admin.satis-fit.uz/api/contact").then((res) => {
const data = res.data.data[0];
setVal(data);
    });
  },[]);
  return (
    <div className={l.Contact}>
      <div className={l.back}>
        <div className="container">
         <div className={l.box}>
          <img src={me} className={l.mee} alt="" />
          <h4 className={l.g}  >Главная страница</h4>
          <img src={ne}  className={l.nee} alt="" />
          <h4  className={l.con} >Контакты</h4>
         </div>
         <h1 className={l.co} >Контакты</h1>
         <div className={l.big}>
          <div className={l.mini}>
            <h1 className={l.title}  >Стать партнером</h1>
            <p className={l.text} >Заполните пробелы ниже.</p>
            <div className={l.group}>
          <div className={l.b}>
          <h4 className={l.name} >Имя: *</h4>
              <input type="text"   placeholder='Напишите'   className={l.inp}  />
          </div>
          <div className={l.b}>
          <h4 className={l.name} >Номер телефона или электронная почта: *</h4>
              <input type="text"   placeholder='Напишите'   className={l.inp}  />
          </div>
            </div> 

            <div className={l.gr}>
              <h4  className={l.t}  >Текст сообщения: *</h4>
              <input type="text"    placeholder='Напишите'  className={l.ttt}     />
            </div>
           <div className={l.boxcheck}>
            <input type="checkbox"   className={l.checkk} />
            <h4   className={l.i} >Я согласен с условиями использования</h4>
           </div>
           <button  className={l.btn}  >Отправить</button>
          </div>
       
       <div className={l.boxone}>
      <h1  className={l.tit} > Связь</h1>
      <p className={l.k}   >Контактная информация</p>
   <div className={l.inside}>
<div className={l.in}>
  <a href="">
    <img src={tel}  className={l.tell} alt="" />
  </a>
</div> 
<div className={l.ini}>
  <h4 className={l.a} >Номер телефона:</h4>  
  <a href=""   className={l.li}  >{val.title}</a>
</div>
   </div>
   <div className={l.inside}>
<div className={l.in}>
  <a href="">
    <img src={masse}  className={l.tell} alt="" />
  </a>
</div> 
<div className={l.ini}>
  <h4 className={l.a} >Номер телефона:</h4>  
  <a href=""   className={l.li}  >{val.title}</a>
</div>
   </div>
   <div className={l.inside}>
<div className={l.in}>
  <a href="">
    <img src={locc}  className={l.tell} alt="" />
  </a>
</div> 
<div className={l.ini}>
  <h4 className={l.a} >Номер телефона:</h4>  
  <a href=""   className={l.li}  >{val.title}</a>
</div>
   </div>
       </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Contact