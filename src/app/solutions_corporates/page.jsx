import React from 'react'
import ContactBanner from '@/components/contactbanner/ContactBanner'
import Values from '@/components/values/Values'
import SolComp from '@/components/solcomp/SolComp'
import CurrentPage from '@/components/currentpage/CurrentPage'
import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


let text = {

 text1 : "Solutions",
 text2 : "For Corporates",
 text3 : "At Healthx, we offer cost-effective corporate healthcare solutions for enhanced employee well-being and productivity.",
 text4 : "Corporates",
 text5 : " Solutions that Can Grow as You Do",
}

let pages_text = {start:"Homepage", end:"Solutions"}

const page = () => {
  return (
    <div className='container'>

        <CurrentPage pages_text={pages_text}/>
        <SolComp text={text}/>
        <div className='grid md:lg:grid-cols-2 sm:grid-cols-1 gap-8 mb-10 '>
          <Card>
            <CardHeader>
            <Image
                src="/card_images/waiting-area.png"
                alt=""
                height='119'
                width='116'
                className='mb-5'
              /> 
              <CardTitle> <div><span className='green'>No more</span> <span className='orange'>long waits</span></div></CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our online doctor service enables employees to schedule appointments conveniently via our user-friendly app, reducing wait times and work disruptions.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
            <Image
                src="/card_images/demand.png"
                alt=""
                height='119'
                width='116'
                className='mb-5'
              /> 
              <CardTitle><div><span className='green'>Solutions for</span> <span className='orange'>Corporate Needs</span></div></CardTitle>
            </CardHeader>
           
            <CardContent>
              <p>By partnering with Healthx, corporations provide employees with personalized, affordable healthcare plans, boosting productivity and retention.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
            <Image
                src="/card_images/loss.png"
                alt=""
                height='119'
                width='116'
                className='mb-5'
              /> 
              <CardTitle> <div><span className='green'>Reducing</span> <span className='orange'>Hospital Costs</span> </div></CardTitle>
            </CardHeader>
            <CardContent>
              <p>Healthx cuts hospital costs with streamlined healthcare services, providing essential treatments through our online doctor service. Our experienced team offers personalized care for corporate healthcare needs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
            <Image
                src="/card_images/saving.png"
                alt=""
                height='119'
                width='116'
                className='mb-5'
              /> 
              <CardTitle> <div><span className='green'>Accessible and</span> <span className='orange'>cost-effective</span> </div></CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our virtual clinic offers affordable corporate healthcare, including disease management programs and convenient access to healthcare professionals via our mobile app, ensuring optimal health and cost-effectiveness</p>
            </CardContent>
          </Card>
         </div>
        <ContactBanner />
        <Values/>
        
    </div>
  )
}

export default page