"use client"

import React from 'react'
import Image from 'next/image'
import styles from './appbanner.module.css'

const appBanner = () => {
  return (
    <div className={styles.container}>

        <Image
            src="/bigdna.png"
            alt=""
            height='770'
            width='1000'
            className={styles.dna}
          /> 

       <div className={styles.sptext}>Strategic Partners</div>
        <div className={styles.seven}>07</div>       
      
        <div className={styles.logo}>
          
        <Image
            src="/app_banner/Logo10-1 1.png"
            alt=""
            height='60'
            width='126'  
          /> 
        <Image
            src="/app_banner/Logo1-1 1.png"
            alt=""
            height='60'
            width='126'  
           
          />
          <Image
            src="/app_banner/Logo9-1 1.png"
            alt=""
            height='60'
            width='126'  

          /> 
          <Image
            src="/app_banner/Logo5-1 1.png"
            alt=""
            height='60'
            width='126'  
          /> 
           <Image
            src="/app_banner/Logo8-1 1.png"
            alt=""
            height='60'
            width='126' 
          /> 
        </div>
      
        <div className={styles.bottom_container}>
       
       
        <div className='left_part'>
          <div className={styles.healthxtext}>HealthX Pakistan</div>
          <div className={styles.healthsoltext}>Healthcare Solution</div>
          <div className={styles.foralltext}>For All</div>
          <p className={styles.leftp}>As a multinational healthcare management company, we take pride in our team <br/>of experienced healthcare professionals.</p>
      

              <div className='flex gap-5 ms-5 mt-10'>
            
              <Image
                src="/appstore.png"
                alt=""
                height='63'
                width='182' 
              /> 
              
            <Image
                src="/playstore.png"
                alt=""
                height='63'
                width='182' 
              /> 

            </div>
         
          
      </div>
      <div className={styles.shimage}>
      <Image
         src="/shazain 1.png"
         alt=""
         height='460'
         width='425'
       /> 
      </div>
      </div>      
    </div> 
  )
}

export default appBanner