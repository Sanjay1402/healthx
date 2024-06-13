import React from 'react'
import styles from '@/components/values/values.module.css'
import Image from 'next/image'

const Values = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top_part}>
        <div className={styles.values}>Values <span className={styles.uphold}>We Uphold</span></div>
        <div className={styles.commitment}>Commitment to Health and Well-being</div>
      </div>
      <div className={styles.bottom_part}>
        <div className={styles.towrap}> 
          <Image
            src="/values/3.png"
            alt=""
            height='100'
            width='100'  
          /> 
          <div className={styles.orange}>PEOPLE-CENTRIC</div>
          <div className={styles.text}>Consistently prioritize your needs</div>
        </div>
        <div className={styles.towrap}> 
        <Image
            src="/values/4.png"
            alt=""
            height='100'
            width='100'  
          /> 
          <div className={styles.orange}>Innovation</div>
          <div className={styles.text}>Utilizing our technology to innovate further for your benefit</div>
        </div>
        <div className={styles.towrap}> 
          <Image
            src="/values/2.png"
            alt=""
            height='100'
            width='100'  
          /> 
          <div className={styles.orange}>Commitment</div>
          <div className={styles.text}>Consistently meeting needs of users, staff, partners, investors</div>
          </div>
          <div className={styles.towrap}> 
          <Image
            src="/values/1.png"
            alt=""
            height='100'
            width='100'  
          /> 
          <div className={styles.orange}>Honesty</div>
          <div className={styles.text}>Prioritize what's best for yourself at all times</div>
          </div>
      </div>
    </div>
    
  )
}

export default Values