import React from "react";
import CurrentPage from "@/components/currentpage/CurrentPage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AppBanner from "@/components/appbanner/AppBanner";
import { Badge } from "@/components/ui/badge"
import styles from "@/app/blogs/page.module.css"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

let pages_text = { start: "Homepage", end: "Blogs" };

const page = () => {
  return (
    <main className="container">
      <CurrentPage pages_text={pages_text} />
      <div className="">
        <div className="flex mt-40 mb-20 justify-between">
          <div className="">
            <div className="text-5xl mb-4 font-bold">
              <span className="green">Blogs</span>{" "}
              <span className="orange">News &</span>
            </div>
            <div className="text-4xl font-light mb-4">Events</div>
          </div>
          <div className="flex">
            <div className="mr-4 opacity_text_orange">01</div>
            <div>
              <div className="font-medium text-lg">Blogs</div>
              <div className="font-light text-lg">
                We are committed to your Health
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col ">
          <div className="flex mt-5">
          
          
        
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg class={`${styles.my_svg} w-4 h-4 text-gray-500 dark:text-gray-400`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" class="block w-full p-4 ps-60 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  <button type="submit" class=" bg_orange  text-white  absolute end-0 bottom-0.5 bg-blue-700 hovr:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
          

            {/* <Input className={styles.input_email} type="text" />
            <Button className="bg_orange">Send a message</Button> */}
          </div>
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col gap-y-8">
              <NavigationMenuItem>ALL</NavigationMenuItem>
              <NavigationMenuItem>NEWS</NavigationMenuItem>
              <NavigationMenuItem>BLOGS</NavigationMenuItem>
              <NavigationMenuItem>EVENTS</NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="mt-2">
                
                <div className="p-10 ps-2 shadow-xl">
                <div className="orange text-2xl font-normal m-4">Top Posts</div>          
                  <div className="flex mb-5">
                    <div className="mr-4 opacity_text_orange">01</div>
                    <div>
                      <div className="font-medium text-lg">
                        Empowering Pakistanis with Health Knowledge
                      </div>
                      <div className=" flex  font-light space-x-52">
                        <span className="text-sm">Pakistani Health Blog</span>
                        <span className="text-xs mt-1">Jan 11.24</span>
                      </div>
                    </div>
                  </div>
                  
              

              <div className="flex mb-5">
                <div className="mr-3 opacity_text_orange">02</div>
                <div>
                  <div className="font-medium text-lg ">
                    Your Trusted Source for Medical Information in Pakistan
                  </div>
                  <div className=" flex  font-light space-x-48">
                    <span className="text-sm">MediaHealth Pakistan</span>
                    <span className="text-xs mt-1"> <span className="ms-1"></span>Jan 11.24</span>
                  </div>
                </div>
              </div>

              <div className="flex mb-5">
                <div className="mr-3 opacity_text_orange">03</div>
                <div>
                  <div className="font-medium text-lg">
                    Promoting Wellness, One Article at a Time
                  </div>
                  <div className=" flex font-light space-x-52">
                    <span className="text-sm">Healthcare Pakistan</span>
                    <span className="text-xs mt-1">Jan 11.24</span>
                  </div>
                </div>
              </div>

              <div className="flex mb-5">
                <div className="mr-3 opacity_text_orange">04</div>
                <div>
                  <div className="font-medium text-lg">
                    Your Gateway to Better Health in Pakistan
                  </div>
                  <div className=" flex font-light space-x-56">
                    <span className="text-sm">PakMedicine Blog</span>
                    <span className="text-xs mt-1">Jan 11.24</span>
                  </div>
                </div>
              </div>

              <div className="flex mb-5">
                <div className="mr-3 opacity_text_orange">05</div>
                <div>
                  <div className="font-medium text-lg">
                    Empowering Communities through Health Education
                  </div>
                  <div className=" flex space-x-44 font-light ">
                    <span className="text-sm">Pakistan Health Matters</span>
                    <span className="text-xs mt-1">Jan 11.24</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <div className="font-normal text-3xl mb-2">Instagram</div>
              <div className="font-normal text-3xl gradient_text mb-2">
                Health X Pakistan
              </div>

              <div className="grid grid-cols-3  mb-10">
                <Image
                  src="/insta1.png"
                  alt=""
                  height="159"
                  width="152"
                  className="mb-10"
                />

                <Image
                  src="/insta2.png"
                  alt=""
                  height="159"
                  width="152"
                  className="mb-10"
                />
                <Image
                  src="/insta3.png"
                  alt=""
                  height="159"
                  width="152"
                  className="mb-10"
                />
                <Image
                  src="/insta4.png"
                  alt=""
                  height="159"
                  width="152"
                  className="mb-10"
                />
                <Image
                  src="/insta5.png"
                  alt=""
                  height="159"
                  width="152"
                  className="mb-10"
                />
                <Image
                  src="/insta6.png"
                  alt=""
                  height="159"
                  width="152"
                  className="mb-10"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="cards grid grid-cols-2 gap-x-28 ms-10 mb-10">
   
          <Card className={styles.card_custom_style}>
            
            <CardHeader>
              <span className="text-sm">Jan 11.24</span>
              <CardTitle>Mental health Services should count as Healthcare</CardTitle>
              <CardDescription> <Image
                  src="/blog_thumbnails/blog1.png"
                  alt=""
                  height="298"
                  width="425"
                  className="mb-10"
                /></CardDescription>
            </CardHeader>
            <CardContent>
              <Badge className={styles.green_badge}>News</Badge>
            </CardContent>
            <CardFooter>
            <p>AUSTIN, Texas, Jan. 11, 2024 — Ambiq@, a recognized
technology leader in ultra-low power semiconductors for IoT
endpoints. today announced that it...</p>
            </CardFooter>
          </Card>
          <Card className={styles.card_custom_style}>
            <CardHeader>
            <span className="text-sm">Jan 11.24</span>
              <CardTitle>The rising cost of healthcare is it too late to bring cost....</CardTitle>
              <CardDescription> <Image
                  src="/blog_thumbnails/blog2.png"
                  alt=""
                  height="298"
                  width="425"
                  className="mb-10"
                /></CardDescription>
            </CardHeader>
            <CardContent>
            <Badge className={styles.green_badge}>News</Badge>
            </CardContent>
          </Card>
          <Card className={styles.card_custom_style}>
            <CardHeader>
            <span className="text-sm">Jan 11.24</span>
              <CardTitle>Your Gateway to Better Health in Pakistan</CardTitle>
              <CardDescription> <Image
                  src="/blog_thumbnails/blog2.png"
                  alt=""
                  height="298"
                  width="425"
                  className="mb-10"
                /></CardDescription>
            </CardHeader>
            <CardContent>
            <Badge className={styles.green_badge}>News</Badge>
            </CardContent>
          </Card>
          <Card className={styles.card_custom_style}>
            <CardHeader>
              <span className="text-sm">Jan 11.24</span>
              <CardTitle>Your Gateway to Better Health in Pakistan</CardTitle>
              <CardDescription> <Image
                  src="/blog_thumbnails/blog2.png"
                  alt=""
                  height="298"
                  width="425"
                  className="mb-10"
                /></CardDescription>
            </CardHeader>
            <CardContent>
            <Badge className={styles.green_badge}>News</Badge>
            </CardContent>
          </Card>
          <Card className={styles.card_custom_style}>
            <CardHeader>
            <span className="text-sm">Jan 11.24</span>
              <CardTitle>Your Daily Dose of Medical Wisdom</CardTitle>
              <CardDescription> <Image
                  src="/blog_thumbnails/blog2.png"
                  alt=""
                  height="298"
                  width="425"
                  className="mb-10"
                /></CardDescription>
            </CardHeader>
            <CardContent>
            <Badge className={styles.green_badge}>News</Badge>
            </CardContent>
          </Card>
          <Card className={styles.card_custom_style}>
            <CardHeader>
            <span className="text-sm">Jan 11.24</span>
              <CardTitle>Empowerinommunities through Health Education...</CardTitle>
              <CardDescription> <Image
                  src="/blog_thumbnails/blog2.png"
                  alt=""
                  height="298"
                  width="425"
                  className="mb-10"
                /></CardDescription>
            </CardHeader>
            <CardContent>
            <Badge className={styles.green_badge}>News</Badge>
            </CardContent>
          </Card>
      
       </div>
            
       

      </div>
      <div className="flex justify-center mb-10">
      <nav>
          <ul class="flex gap-3 items-center -space-x-px h-8 text-sm">
          
            <li>
              <a href="#" class=" bg_orange flex items-center justify-center px-3 h-8 leading-tight text-white bg-white border border-gray-300 hover:bg-gray-100 hover:bg_orange dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
              <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:bg_orange dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
              <a href="#"  class="z-10 flex items-center justify-center px-3 h-8 leading-tight borderbg-white border border-gray-300 hover:bg_orange dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
              <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg_orange hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
              <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg_orange hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
              <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg_orange hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Next</span>
                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        </div>

      <AppBanner />
    </main>
  );
};

export default page;
