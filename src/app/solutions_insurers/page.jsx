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
 text2 : "For Insurers",
 text3 : "Healthx addresses the issue of excessive healthcare usage, reducing the burden on insurers and patients.",
 text4 : "Government",
 text5 : "Solutions that Can Grow as You Do",
}

let pages_text = {start:"Homepage", end:"Solutions"}

const page = () => {
  return (
    <div className='container'>

        <CurrentPage pages_text={pages_text}/>
        <SolComp text={text}/>
        <div className='grid lg:md:grid-cols-3 sm:grid-cols-1 gap-8 mb-10 sm:place-items-center'>
          <Card>
            <CardHeader>
            <Image
                src="/card_images/test.png"
                alt=""
                height='119'
                width='116'
                className='mb-5'
              /> 
              <CardTitle> <div><span className='green'>Necessary test</span>  <span className='orange'>& med </span></div></CardTitle>
            </CardHeader>
            <CardContent>
              <p>At Healthx, our physicians prescribe only necessary tests and medications, minimizing overuse of medical services, reducing insurance costs for users.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
            <Image
                src="/card_images/down.png"
                alt=""
                height='119'
                width='116'
                className='mb-5'
              /> 
              <CardTitle><div><span className='green'>Reduced</span> <span className='orange'>claim ratios</span></div></CardTitle>
            </CardHeader>
            <CardContent>
              <p>Healthx helps lower claim ratios through innovative healthcare services emphasizing prevention, reducing costs for insurance companies.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
            <Image
                src="/card_images/reduce_cost.png"
                alt=""
                height='119'
                width='116'
                className='mb-5'
              /> 
              <CardTitle><div><span className='green'>Reducing</span> <span className='orange'>Hospital Costs</span> </div></CardTitle>
            </CardHeader>
            <CardContent>
              <p>Healthx reduces hospital costs with streamlined online doctor services, offering personalized care for corporate healthcare needs.</p>
            </CardContent>
          </Card>
         </div>
        <ContactBanner />
        <Values/>
        
    </div>
  )
}

export default page