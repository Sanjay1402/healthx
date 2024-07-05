import AppBanner from '@/components/appbanner/AppBanner'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Navbar from '@/components/navbar/Navbar'
const page = () => {
    
  return (
    <main className='container'>
    <div className="">
        <div className='flex mt-40 mb-20 justify-between lg:md:flex-row flex-col-reverse'>
        <div className=''>
            <div className='text-5xl mb-4 font-bold'><span className='green'>FREQUENTLY</span> <span className='orange'>ASKED QUESTION</span></div>
            <div className='text-4xl font-light mb-4'>Answers to Your Common Queries</div>
        </div>
        <div className='flex'>
            <div className='mr-4 opacity_text_orange'>01</div>
            <div>
            <div className='font-medium text-lg text-nowrap'>FAQ's</div>
            <div className='font-light text-lg'>We are committed to your Health</div>
            </div>
          </div>
        </div>
      </div>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10'>
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



      <AppBanner />
    </main>
  );
}

export default page