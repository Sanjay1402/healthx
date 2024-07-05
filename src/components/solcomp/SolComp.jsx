import React from 'react'

const SolComp = (props) => {
  return (
    <div className="">
        <div className='flex mt-20 mb-20 lg:md:flex-row sm:flex-col sm:flex-col-reverse'>
        <div className='sm:place-self-center'>
            <div className='orange text-5xl mb-4 font-bold'>{props.text.text1}</div>
            <div className='text-4xl font-light mb-4'>{props.text.text2}</div>
            <div className='text-balance font-light text-xl'>{props.text.text3}</div>
        </div>
       
        <div className='flex'>
            <div className='mr-4 opacity_text_orange'>01</div>
            <div>
            <div className='font-medium text-lg text-nowrap'>{props.text.text4}</div>
            <div className='font-light text-lg text-nowrap'>{props.text.text5}</div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default SolComp