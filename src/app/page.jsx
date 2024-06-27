import Image from "next/image";
import styles from "./page.module.css";
import AppBanner from "@/components/appbanner/appBanner";
import Values from "@/components/values/Values";
import ContactBanner from "@/components/contactbanner/ContactBanner";
import AppIntegration from "@/components/appintegration/AppIntegration";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Slider from "@/components/radioslider/Slider";


export default function Home() {
  return (
    <div className="container">
     
      <div className='flex justify-around mt-20 mb-20'>
        <div className=''>Trusted by more than <span className='orange'>500,000+ <br></br></span>
        active users across the globe</div>

        <div className='flex'>
            <div className='green text-6xl font-medium'>50K</div>
            
            <div className='mt-1 ms-1'>
                
                <div>
                    Ratings
                </div>
                <div>
                    User
                </div>
            </div>
        </div>
        <div className='flex'>
            <div className='green text-6xl font-medium'>95K</div>
            
            <div className='mt-1 ms-1'>
                
                <div>
                Experienced
                </div>
                <div>
                Clinics
                </div>
            </div>
        </div>


        <div className='flex'>
            <div className='green text-6xl font-medium'>80%</div>
            
            <div className='mt-1 ms-1'>
                
                <div>
                Experienced
                </div>
                <div>
                Clinics
                </div>
            </div>
        </div>

    </div>
     
    <div className='flex gap-20 mb-10'>
        <div className=' w-2/6'>
        <div className='text-4xl font-light mb-4'>Visionaries of Health</div>
        <div className='text-5xl mb-4 font-bold'><span className='orange'>Your </span> <span className='green'>Partners </span><span className='orange'>in Health</span></div>
        <div className='font-light text-xl'>As a multinational healthcare management company, we take pride in our team of experienced healthcare professionals who specialize in primary healthcare and patient management.</div>
        <div className='mt-5 justify-start'></div>
        <Slider />
        </div>

        <div className='flex '>
        <div className='pb-16'>
        <Image
              src="/doctors/1.png"
              alt=""
              height="406"
              width="367"
              className='pb-2'
              
            />
        </div>
        <div>
        <Image
              src="/doctors/2.png"
              alt=""
              height="406"
              width="367"
              
            />
        </div>
        <div>
        <Image
              src="/doctors/3.png"
              alt=""
              height="300"
              width="367"
              
            />
        </div>

        </div>
        </div>
     
      <AppIntegration />
      {/* Frequently Asked Component */}
     
        <div className="flex justify-between">
          <div className="text-4xl mb-4 font-bold ">
            <span className="green">FREQUENTLY</span>{" "}
            <span className="orange">ASKED QUESTION</span>
          </div>

          <div className="flex">
            <div className="mr-4 mb-4 opacity_text_orange">06</div>
            <div>
              <div className="font-medium text-lg">FAQ’s</div>
              <div className="font-light text-lg">
                We are committed to your Health
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 my-10">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do I install the Healthx app?
              </AccordionTrigger>
              <AccordionContent>
                The Healthx app is available on both the iOS App Store and
                Google Play Store for free, depending on your device.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                I've signed up and paid - how do I start a call with a doctor
              </AccordionTrigger>
              <AccordionContent>
                The Healthx app is available on both the iOS App Store and
                Google Play Store for free, depending on your device.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Who can see my medical records and consultation history?
              </AccordionTrigger>
              <AccordionContent>
                The Healthx app is available on both the iOS App Store and
                Google Play Store for free, depending on your device.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Can I sign up from anywhere in the world?
              </AccordionTrigger>
              <AccordionContent>
                The Healthx app is available on both the iOS App Store and
                Google Play Store for free, depending on your device.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What do I delete my account?</AccordionTrigger>
              <AccordionContent>
                The Healthx app is available on both the iOS App Store and
                Google Play Store for free, depending on your device.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do I pay for my subscription?
              </AccordionTrigger>
              <AccordionContent>
                The Healthx app is available on both the iOS App Store and
                Google Play Store for free, depending on your device.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                My payment method isn’t working. What should I do?
              </AccordionTrigger>
              <AccordionContent>
                The Healthx app is available on both the iOS App Store and
                Google Play Store for free, depending on your device.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <AppBanner />
        
      </div>
    
  );
}
