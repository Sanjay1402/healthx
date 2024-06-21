import React from 'react'
import styles from '@/components/currentpage/currentpage.module.css'

const CurrentPage = (props) => {
  return (

    
    <div className='mt-40 flex justify-start'>
    <div className='me-3 orange'>
        {props.pages_text.start}
    </div >
    <div className={styles.line}>
    </div>
    <div className='ms-3'>
        {props.pages_text.end}
    </div>
    </div>
    
  )
}

export default CurrentPage