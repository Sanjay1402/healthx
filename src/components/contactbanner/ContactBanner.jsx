import React from 'react'
import Image from 'next/image'
import styles from './contactbanner.module.css'

const ContactBanner = () => {
  return (
    <div className={styles.container}>

    <Image
        src="/Rectangle 5.png"
        alt=""
        height='770'
        width='660'
        className={`md:lg:opacity-100 sm:opacity-0 ${styles.dna}`}
      /> 
    
    <div className={styles.bottom_container}>
   
    <div className='left_part lg:md:block  '>
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
     className='lg:md:block sm:hidden '
   /> 
  </div>
  </div>
</div> 
  )
}

export default ContactBanner