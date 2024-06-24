import React from 'react'
import CurrentPage from '@/components/currentpage/CurrentPage'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import AppBanner from '@/components/appbanner/AppBanner'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


let pages_text = {start:"Homepage", end:"Blogs"}


const page = () => {
  return (
   <main className="container">
    <CurrentPage pages_text={pages_text}/>
    <div className="">
        <div className='flex mt-40 mb-20 justify-between'>
        <div className=''>
            <div className='text-5xl mb-4 font-bold'><span className='green'>Blogs</span> <span className='orange'>News &</span></div>
            <div className='text-4xl font-light mb-4'>Events</div>
        </div>
        <div className='flex'>
            <div className='mr-4 opacity_text_orange'>01</div>
            <div>
            <div className='font-medium text-lg text-nowrap'>Blogs</div>
            <div className='font-light text-lg text-nowrap'>We are committed to your Health</div>
            </div>  
        </div>
        </div>
    </div>

    <div className='flex'>
      <div className='flex flex-col '>
        <div className='flex '>
        <Input type="text" placeholder="Email" />
        <Button className="bg_orange">Send a message</Button>   
        </div>
        <NavigationMenu className="mt-10">
        <NavigationMenuList className="flex flex-col gap-y-8">
          <NavigationMenuItem>
           ALL
          </NavigationMenuItem>
          <NavigationMenuItem>
            NEWS
          </NavigationMenuItem>
          <NavigationMenuItem>
           BLOGS
          </NavigationMenuItem>
          <NavigationMenuItem>
            EVENTS
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className='mt-10'>
        <div className='orange text-2xl font-normal'>Top Posts</div>
        <div className="p-10 ps-2 shadow-xl">
       
        <div className='flex'>
            <div className='mr-4 opacity_text_orange'>01</div>
            <div>
            <div className='font-medium text-lg text-nowrap'>Empowering Pakistanis with Health Knowledge</div>
            <div className=' flex align-center space-x-4 font-light  text-nowrap'><span className='text-sm'>Pakistani Health Blog</span><span className='text-xs mt-1'>Jan 11.24</span></div>
          </div>
        </div>

        <div className='flex'>
            <div className='mr-4 opacity_text_orange'>02</div>
            <div>
            <div className='font-medium text-lg text-nowrap'>Your Trusted Source for Medical Information in Pakistan</div>
            <div className=' flex align-center space-x-4 font-light  text-nowrap'><span className='text-sm'>MediaHealth Pakistan</span><span className='text-xs mt-1'>Jan 11.24</span></div>
          </div>
        </div>

        <div className='flex'>
            <div className='mr-4 opacity_text_orange'>03</div>
            <div>
            <div className='font-medium text-lg text-nowrap'>Promoting Wellness, One Article at a Time</div>
            <div className=' flex align-center space-x-4 font-light  text-nowrap'><span className='text-sm'>Healthcare Pakistan</span><span className='text-xs mt-1'>Jan 11.24</span></div>
          </div>
          </div>

          <div className='flex'>
            <div className='mr-4 opacity_text_orange'>04</div>
            <div>
            <div className='font-medium text-lg text-nowrap'>Your Gateway to Better Health in Pakistan</div>
            <div className=' flex align-center space-x-4 font-light  text-nowrap'><span className='text-sm'>PakMedicine Blog</span><span className='text-xs mt-1'>Jan 11.24</span></div>
          </div>
        </div>

        <div className='flex'>
            <div className='mr-4 opacity_text_orange'>05</div>
            <div>
            <div className='font-medium text-lg text-nowrap'>Empowering Communities through Health Education</div>
            <div className=' flex align-center space-x-4 font-light  text-nowrap'><span className='text-sm'>Pakistan Health Matters</span><span className='text-xs mt-1'>Jan 11.24</span></div>
          </div>
        </div>

        </div>

        <div className='mt-10'>
          <div className='font-normal text-3xl mb-2'>Instagram</div>
          <div className='font-normal text-3xl gradient_text mb-2'>Health X Pakistan</div>
          
          <div className='grid grid-cols-3  mb-10'>

          <Image
                src="/insta1.png"
                alt=""
                height='159'
                width='152'
                className='mb-10'
              /> 

            <Image
                src="/insta2.png"
                alt=""
                height='159'
                width='152'
                className='mb-10'
              /> 
              <Image
                src="/insta3.png"
                alt=""
                height='159'
                width='152'
                className='mb-10'
              /> 
              <Image
                src="/insta4.png"
                alt=""
                height='159'
                width='152'
                className='mb-10'
              /> 
              <Image
                src="/insta5.png"
                alt=""
                height='159'
                width='152'
                className='mb-10'
              /> 
              <Image
                src="/insta6.png"
                alt=""
                height='159'
                width='152'
                className='mb-10'
              /> 

          </div>
        </div>

    </div>
      </div>


      <div className='container mx-auto'></div>
      <div className='mx-80'></div>
    </div>
    <AppBanner />

   </main>
  )
}

export default page