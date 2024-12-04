import React from 'react'
import l from './Home.module.css'
import Banner from './banner/Banner'
import SecOne from './secone/SecOne'
import SecTwo from './sectwo/SecTwo'
import SecThree from './secthree/SecThree'
import SecFive from './secFive/SecFive'

function Home() {
  return (
    <div className={l.main} >
        <Banner/>
     <SecOne/>
     <SecTwo/>
     <SecThree/>
     <SecFive/>
    
    </div>
  )
}

export default Home