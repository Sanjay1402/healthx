import React from "react";
import CurrentPage from "@/components/currentpage/CurrentPage";
import Image from "next/image";
import styles from "@/app/aboutus/page.module.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Values from "@/components/values/Values";
import { Button } from "@/components/ui/button";
import AppBanner from "@/components/appbanner/AppBanner";
import Slider from "@/components/radioslider/Slider";
import Navbar from "@/components/navbar/Navbar";

let pages_text = { start: "Homepage", end: "About" };

const page = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <CurrentPage pages_text={pages_text} />

        <div className="">
          <div className="flex mt-20 mb-20 justify-between">
            <div className="">
              <div className="text-5xl mb-4 font-medium">
                <span className="orange">Our Story</span>
              </div>
              <div className="text-sm font-light mb-4">
                Transforming Healthcare Globally
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 opacity_text_orange">01</div>
              <div>
                <div className="font-medium text-lg">About us</div>
                <div className="font-light text-lg">
                  We are committed to your Health
                </div>
              </div>
            </div>
          </div>
        </div>

      
      <div className='ms-auto flex flex-col justify-end w-7/12'>
            <div className='text-4xl mb-4 font-bold'><span className='green'>Transforming Primary</span> <span className='orange'>Healthcare</span></div>
            <div className='text-3xl font-light mb-4'>Seamless Access to Expert Care</div>
            <div className=' font-light text-lg'>Healthx, powered by TruDoc, is a global healthcare management company in Pakistan. We provide high-quality primary healthcare services using innovative technology. Our offerings include convenient online consultations with expert doctors and wellness advisors.</div>
        </div>
     

    <div className='flex justify-between mt-10 mb-10 flex-col lg:md:flex-row'>
    <Card className={styles.card_custom_style}>
        <CardHeader>
            <CardDescription>
                <Image
                src="/health2.png"
                alt=""
                height="298"
                width="425"
                className="mb-10"
            /></CardDescription>
        </CardHeader>
        <CardFooter>
        <p>Accessible and affordable, Healthx ensures your health and wellness needs are met efficiently from anywhere. Choose Healthx for quality primary healthcare services tailored to your convenience and comfort</p>
        </CardFooter>
    </Card>
        <Image
            src="/phone-b.png"
            alt=""
            height='326'
            width='1900'
        /> 
    </div>



    <div className='flex justify-around mt-20 mb-20 flex-col lg:md:flex-row'>
        <div className='self-center'>Trusted by more than <span className='orange'>500,000+ <br></br></span>
        active users across the globe</div>

        <div className='flex self-center'>
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
        <div className='flex self-center'>
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


        <div className='flex self-center'>
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
   
        </div>

    <div className={`${styles.dark} ${styles.custom_container} flex gap-5 mb-5 flex-col lg:md:flex-row`}>

    <div className='me-2'>
        <div className='mt-20 text-white text-3xl'>
        Healthx
        </div>
        <div className='text-5xl font-semibold mt-5'>
            <span className='orange'>Transforming</span> <span className='green'> Healthcare</span>
        </div>
        <div className='font-light text-white text-3xl mt-5'>
        Embracing Humanity
        </div>

          <div className="text-white mt-7">
            It serves as both our guiding principle and our promise to deliver
            exceptional care that not only heals bodies but also uplifts spirits
            and enriches lives. It is through this dual commitment to innovation
            and compassion that we strive to make a meaningful difference in the
            lives of individuals and communities worldwide
          </div>
          <Button className="bg_orange mt-5">Contact Us</Button>

          <div className="flex gap-5  mt-10">
            <Image
              src="/Rectangle 45.png"
              alt=""
              height="76"
              width="237"
              className="mb-10"
            />
            <Image
              src="/Rectangle 45.png"
              alt=""
              height="76"
              width="237"
              className="mb-10"
            />
            <Image
              src="/Rectangle 45.png"
              alt=""
              height="76"
              width="237"
              className="mb-10"
            />
            <Image
              src="/Rectangle 45.png"
              alt=""
               height="76"
              width="237"
              className="mb-10"
            />
          </div>
        </div>

    <div className='grid grid-cols-2 gap-5'>
    <Card className={styles.dark_card}>   
        <CardHeader>
        <Image
              src="/about_us/1.png"
              alt=""
             height="145"
              width="116"
              className="mb-10"
            />
          <CardTitle className="orange">Our Purpose</CardTitle>
        </CardHeader>
        <CardContent>
        To transform healthcare delivery for a positive impact on people's lives
        </CardContent>
      </Card>
      <Card className={styles.dark_card}>    
        <CardHeader>
        <Image
              src="/about_us/2.png"
              alt=""
              height="145"
              width="116"
              className="mb-10"
            />
          <CardTitle className="orange">Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
        Implementing fair and impartial care, uniting individuals and payers on a single platform
        </CardContent>
      </Card>
      <Card className={styles.dark_card}>     
        <CardHeader>
        <Image
              src="/about_us/3.png"
              alt=""
              height="145"
              width="116"
              className="mb-10"
            />
          <CardTitle className="orange">Our Vision</CardTitle>
        </CardHeader>
        <CardContent>
        <p>Bringing accessible and affordable health and wellness within reach with just one call.
        </p>
        </CardContent>
      </Card>
      <Card className={styles.dark_card}>   
        <CardHeader>
        <Image
              src="/about_us/4.png"
              alt=""
              height="145"
              width="116"
              className="mb-10"
            />
          <CardTitle className="orange">Our Approach</CardTitle>
        </CardHeader>
        <CardContent>
        Innovative technology and compassionate care, empowering individuals
        
        </CardContent>
      </Card>
    </div>
    </div>
    <div className='container'>
    <Image
    src="/bigdna.png"
    alt=""
    height='1360'
    width='1170'
    className={styles.bigdna}
  /> 
    <Values />
    
    <div className="">
        <div className="flex mt-20 mb-20 justify-between">
          <div className="flex ml-auto">
            <div className="mr-4 opacity_text_orange">02</div>
            <div>
              <div className="font-medium text-lg">Our team</div>
              <div className="font-light text-lg">
                We are committed to your Health
              </div>
            </div>
          </div>
          
        </div>
      </div>
      </div>

      <div className='flex mb-10  md:flex-row sm:flex-col'>
        <div className='ms-20 w-2/6'>
        <div className='text-3xl font-light mb-4'>Visionaries of Health</div>
        <div className='text-4xl mb-4 font-bold'><span className='orange'>Your </span> <span className='green'>Partners </span><span className='orange'>in Health</span></div>
        <div className='font-light text-md'>As a multinational healthcare management company, we take pride in our team of experienced healthcare professionals who specialize in primary healthcare and patient management.</div>
        <div className='mt-5 justify-start'></div>
        <Slider />
        </div>
        <div className='lg:flex md:grid md:grid-cols-2 sm:mx-auto'>
        <div className='pb-16'>
        <Image
              src="/doctors/1.png"
              alt=""
              height="406"
              width="367"
              className="pb-2"
            />
          </div>
          <div>
            <Image src="/doctors/2.png" alt="" height="406" width="367" />
          </div>
          <div>
            <Image src="/doctors/3.png" alt="" height="300" width="367" />
          </div>
        </div>
      </div>

      <div className="container">
        <AppBanner />
      </div>
    </>
  );
};

export default page;
