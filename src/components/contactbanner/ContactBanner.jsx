import React from 'react'
import Image from 'next/image'
import styles from './contactbanner.module.css'

const ContactBanner = () => {
  return (
    <div className={styles.container}>

    <Image
        src="/Rectangle 5.png"
        alt=""
        height='1060'
        width='870'
        className={styles.dna}
      /> 
    
    <div className={styles.bottom_container}>
   
    <div className='left_part'>
      <div className={styles.healthxtext}>HealthX Pakistan</div>
      <div className={styles.healthsoltext}>Curious to Learn More</div>
      <div className={styles.foralltext}>Get in touch with us for more information</div>
      <button className={styles.button} >Contact Us</button>
      <button className={styles.button2} >Download App</button>
      <p className={styles.smalltext}>7 days a week, 24 hours a day</p>
     
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

export default ContactBanner