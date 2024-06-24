import React from 'react'
import CurrentPage from '@/components/currentpage/CurrentPage'
import styles from '@/app/contactus/page.module.css'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Button } from "@/components/ui/button"




import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


let pages_text = {start:"Homepage", end:"Contact Us"}

let text = {

  text1 : "Get in Touch",
  text2 : "Connecting for Care",
  text3 : "",
  text4 : "Corporates",
  text5 : "Reach Out, We're Here to Help",
 }
 

const page = () => {
  return (
    <main><Image
    src="/bigdna.png"
    alt=""
    height='1810'
    width='1557'
    className={styles.bigdna}
  /> 
    <div className='container'>
     
       <CurrentPage pages_text={pages_text}/>
       <div className="">
        <div className='flex mt-40 mb-20 justify-between'>
        <div className=''>
            <div className='text-5xl mb-4 font-bold'><span className='orange'>Get in Touch</span> </div>
            <div className='text-md font-light mb-4'>Connecting for Care</div>
        </div>
        <div className='flex'>
            <div className='mr-4 opacity_text_orange'>01</div>
            <div>
            <div className='font-medium text-lg text-nowrap'>Contact us</div>
            <div className='font-light text-lg text-nowrap'>Reach Out, We're Here to Help</div>
            </div>
            
        </div>
        </div>
    </div>
    <div className='ms-40 me-40'>
    <div className='grid grid-cols-3 gap-x-20 mb-10'>

          <div className=' text-center'>
          <Card className='w-[334px] h-[286px]'>
            <CardHeader>
            <div className='flex justify-center items-center mt-8 '>
            <Image
                src="/message.png"
                alt=""
                height='44'
                width='44'
                className='mb-10'
              /> 
              </div>
              <CardTitle><div><span className='green'>Address</span></div></CardTitle>
            </CardHeader>
            <CardContent>
              <p>info@healthxpakistan.com</p>
            </CardContent>
          </Card>
          </div>
          <div className=' text-center '>
          <Card className='w-[334px] h-[286px]'>
            <CardHeader>
            <div className='flex justify-center items-center mt-8'>
            <Image
                src="/phone.png"
                alt=""
                height='44'
                width='44'
                className='mb-10'
              /> 
              </div>
              <CardTitle><span className='green'>Phone</span></CardTitle>
            </CardHeader>
            <CardContent>
              <p>(021) 38282433</p>
            </CardContent>
          </Card>
          </div>

          <div className='text-center'>
          <Card className='w-[334px] h-[286px]'>
            <CardHeader>
            <div className='flex justify-center items-center mt-8'>
            <Image
                src="/tabler_location.png"
                alt=""
                height='44'
                width='44'
                className='mb-10'
              /> 
              </div>
              <CardTitle><div><span className='green'>Location</span></div></CardTitle>
            </CardHeader>
            <CardContent>
              <p>Elegant Tower Block 5 Clifton, Karachi </p>
            </CardContent>
          </Card>
          </div>
         </div>
         </div>

         <div className='mt-10 mb-10 text-center mx-56 '>
          <div className='font-light text-4xl mb-10'>Contact Information</div>
          <div className='grid grid-cols-2 gap-5 '>
          <Input className="mb-5 orange-border" type="text" placeholder="Name" />
           <Input className="mb-5 orange-border" type="email" placeholder="Email" />
          </div>
          <Input className="mb-5 orange-border" type="tel" placeholder="Phone" />
          <Input className="mb-5 orange-border" type="text" placeholder="Sector you belong to:" />
          <Textarea className='mb-5 orange-border' placeholder="Message"/>
          <Button className="bg_orange">Send a message</Button>   
         </div>
        

    <div className='text-5xl mb-4 font-bold'><span className='green'>FREQUENTLY</span> <span className='orange'>ASKED QUESTION</span></div>

    <div className='grid grid-cols-2 gap-5 my-10'>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I install the Healthx app?</AccordionTrigger>
          <AccordionContent>
          The Healthx app is available on both the iOS App Store and Google Play Store for free, depending on your device.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>I've signed up and paid - how do I start a call with a doctor</AccordionTrigger>
          <AccordionContent>
          The Healthx app is available on both the iOS App Store and Google Play Store for free, depending on your device.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Who can see my medical records and consultation history?</AccordionTrigger>
          <AccordionContent>
          The Healthx app is available on both the iOS App Store and Google Play Store for free, depending on your device.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I sign up from anywhere in the world?</AccordionTrigger>
          <AccordionContent>
          The Healthx app is available on both the iOS App Store and Google Play Store for free, depending on your device.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What do I delete my account?</AccordionTrigger>
          <AccordionContent>
          The Healthx app is available on both the iOS App Store and Google Play Store for free, depending on your device.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I pay for my subscription?</AccordionTrigger>
          <AccordionContent>
          The Healthx app is available on both the iOS App Store and Google Play Store for free, depending on your device.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>My payment method isn’t working. What should I do?</AccordionTrigger>
          <AccordionContent>
          The Healthx app is available on both the iOS App Store and Google Play Store for free, depending on your device.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
    </div>
    </div>
    </main>
  )
}

export default page