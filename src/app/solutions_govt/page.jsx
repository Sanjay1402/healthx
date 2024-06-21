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
 text2 : "For  Government",
 text3 : "Healthx addresses government challenges by offering an innovative, cost-effective, and efficient healthcare delivery model through our online doctor service, enhancing accessibility for citizens.",
 text4 : "Government",
 text5 : "Solutions that Can Grow as You Do",
}

let pages_text = {start:"Homepage", end:"Solutions"}

const page = () => {
  return (
    <div className='container'>

        <CurrentPage pages_text={pages_text}/>
        <SolComp text={text}/>
        <div className='grid grid-cols-3 gap-8 mb-10'>
          <Card>
            <CardHeader>
            <Image
                src="/card_images/reduce.png"
                alt=""
                height='119'
                width='116'
                className='mb-5'
              /> 
              <CardTitle> <div><span className='green'>Reduce</span> <span className='orange'>Healthcare Usage</span></div></CardTitle>
            </CardHeader>
            <CardContent>
              <p>Healthx's online doctor service minimizes healthcare service overutilization, ensuring cost control and effective resource allocation for governments.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
            <Image
                src="/card_images/wait.png"
                alt=""
                height='119'
                width='116'
                className='mb-5'
              /> 
              <CardTitle><div><span className='green'>Long Waiting</span> <span className='orange'>hours</span></div></CardTitle>
            </CardHeader>
           
            <CardContent>
              <p>Healthx provides an online doctor service, eliminating long wait times and offering personalized treatments from licensed physicians and wellness advisors 24/7.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
            <Image
                src="/card_images/quality.png"
                alt=""
                height='119'
                width='116'
                className='mb-5'
              /> 
              <CardTitle> <div><span className='green'>Quality</span> <span className='orange'>Healthcare</span> </div></CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our government healthcare solution delivers quality primary healthcare, promoting wellness and efficiency while reducing resource burdens.</p>
            </CardContent>
          </Card>
         </div>
        <ContactBanner />
        <Values/>
        
    </div>
  )
}

export default page