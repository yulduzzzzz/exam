import React,{ useState, useEffect } from 'react'
import l from './About.module.css'
import kk from '../../../assets/icon/kk.png'
import bb from '../../../assets/icon/bb.svg'

function About() {
  return (
    <div className={l.About}>
      <div className={l.back}>
        <div className="conatiner">
          <div className={l.box}>
            <img src={kk} className={l.img} alt="" />
            <h4 className={l.g} >Главная страница</h4>
            <img src={bb}  className={l.b} alt="" />
            <h4 className={l.o} >О Satis</h4>
          </div>
          <h1 className={l.title} >О Satis</h1>
          <div className={l.big}>
          
       <div className={l.boxtitle}>
<div className={l.mini}>
<h1 className={l.tt} >Satis - ваш помощник в снижении веса.</h1>
        <p className={l.pp} >Соблюдайте диету комфортно, без срывов и стресса</p>
        <p  className={l.p} >В составе биологически активной добавки Satis, основной действующий компонент - гуаровая камедь.</p>

<p className={l.p} >Для удобства, мы поместили необходимую разовую дозировку продукта в капсулу и все, что вам нужно - это запить капсулу водой перед началом принятия пищи.</p>
<p className={l.pp} >Как работает Satis?</p>
<p  className={l.p} >После того, как капсула, по пищеводу попадает в желудок, гуаровая камедь, высвобождаясь из капсулы, начинает активно заполнять пространтво желудка, тем самым, осталяя в 2-3 раза меньше свободного объема для пищи. Вы насыщаетесь меньшим количеством еды, при этом не устанавливаете никаких ограничений и исключений в рационе.</p>



</div>
<img className={l.imgm} src="https://s3-alpha-sig.figma.com/img/3d55/8a19/51f8ee39e480429e70e39079f3f7dfbc?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pOTF3Hcd-jIO3cI~X6aIT8crP9JbMdpfcqMKkEhKUA0P2TntKRriLSKqgxNtCAbZws7f-DzFGdWSIsPGeinvqL7uc9~a-tYmGANCD9te1aZ--U7vzkouF7l43bBRXcNS59DWwdibr8i0IH~sOR6LrE03-nraOEmX9RCSYOOGUwHc0Vu2l1cie9zDLMs38frGPsunJGOEC9immym4KzTr2J4anTo9Mx63hkpHht-bSxm3ZAMOw45dVeSbSz7FIS3es8TfWnzz3seRmvbEg8ZibIK4x5AL20VzJV27olTPWeaVs~IUjYuI-ELEWyeDU5mvCPpud7lTUB8PtLc4Z7AJZg__" alt="" />
       </div>
       <p className={l.p} >В одной капсуле содержится:</p>
       <table border={1}  bordercolor="#69A4DA"  cellPadding="200"    className={l.table} >
        <tr bgcolor='#DAEDFF' className={l.tr}  >
          <th >Ингредиенты</th>
          <th>Количество на порцию</th>
          <th>% от суточной потребности</th>
        </tr>
        <tr className={l.t} >
          <td>Гуаровая камедь (Cyamopsis tetragonoloba)</td>
          <td>500 мг</td>
          <td>*</td>
        </tr>
        <tr className={l.t} >
          <td>Гуаровая камедь (Cyamopsis tetragonoloba)</td>
          <td>500 мг</td>
          <td>*</td>
        </tr>
        <tr className={l.t} >
          <td>Гуаровая камедь (Cyamopsis tetragonoloba)</td>
          <td>500 мг</td>
          <td>*</td>
        </tr>
       </table>
       <div className={l.btngroup}>
        <button className={l.btn} >Купить онлайн</button>
        <button className={l.btnn} >Найти в аптека</button>
       </div>
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default About