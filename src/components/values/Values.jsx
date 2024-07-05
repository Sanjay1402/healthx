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
      <div className= "grid lg:md:grid-cols-4 gap-4 mt-20 mb-20 content-center sm:grid-cols-2">
        <div className='flex flex-col justify-center'> 
          <Image
            src="/values/3.png"
            alt=""
            height='100'
            width='100' 
            className='self-center' 
          /> 
          <div className={styles.orange} >PEOPLE-CENTRIC</div>
          <div className={styles.text}>Consistently prioritize your needs</div>
        </div>
        <div className='flex flex-col justify-center'> 
        <Image
            src="/values/4.png"
            alt=""
            height='100'
            width='100'  
            className='self-center' 
          /> 
          <div className={styles.orange}>Innovation</div>
          <div className={styles.text}>Utilizing our technology to innovate further for your benefit</div>
        </div>
        <div className='flex flex-col justify-center'> 
          <Image
            src="/values/2.png"
            alt=""
            height='100'
            width='100' 
            className='self-center'  
          /> 
          <div className={styles.orange}>Commitment</div>
          <div className={styles.text}>Consistently meeting needs of users, staff, partners, investors</div>
          </div>
          <div className='flex flex-col justify-center'> 
          <Image
            src="/values/1.png"
            alt=""
            height='100'
            width='100' 
            className='self-center'  
          /> 
          <div className={styles.orange}>Honesty</div>
          <div className={styles.text}>Prioritize what's best for yourself at all times</div>
          </div>
      </div>
    </div>
    
  )
}

export default Values