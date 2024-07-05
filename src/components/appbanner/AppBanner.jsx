import React from 'react'
import Image from 'next/image'
import styles from './appbanner.module.css'

const appBanner = () => {
  return (
    <div className={`overflow-hidden ${styles.container}`}>

        <Image
            src="/Rectangle 5.png"
            alt=""
            height='770'
            width='660'
            className={`lg:md:block hidden ${styles.dna}`}
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
            height='40'
            width='106'  
          /> 
           <Image
            src="/app_banner/Logo8-1 1.png"
            alt=""
            height='40'
            width='106' 
          /> 
        </div>
      
        <div className={styles.bottom_container}>
       
       
        <div className='left_part'>
          <div className={styles.healthxtext}>HealthX Pakistan</div>
          <div className={styles.healthsoltext}>Healthcare Solution</div>
          <div className={styles.foralltext}>For All</div>
          <p className={styles.leftp}>As a multinational healthcare management company, we take pride in our team <br/>of experienced healthcare professionals.</p>
      
          <div className={`flex gap-5 mt-5 ${styles.approw}`}>
            
            <Image
              src="/appstore.png"
              alt=""
              height='43'
              width='162' 
              className='mb-10 lg:md:mb-0'
            /> 
            
           
          <Image
              src="/playstore.png"
              alt=""
              height='43'
              width='162' 
              className='mb-10 lg:md:mb-0'
            /> 
         
          </div>
      </div>
      <div className={styles.shimage}>
      <Image
         src="/shazain 1.png"
         alt=""
         height='380'
         width='265'
         className='lg:md:block hidden'
       /> 
      </div>
      </div>      
    </div> 
  )
}

export default appBanner