import React from 'react'
import ContactBanner from '@/components/contactbanner/ContactBanner'
import Values from '@/components/values/Values'
import SolComp from '@/components/solcomp/SolComp'
import CurrentPage from '@/components/currentpage/CurrentPage'

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
 text2 : "For Individuals & Families",
 text3 : "In our fast-paced lives, visiting the doctor can be burdensome. Healthx offers convenient and safe healthcare solutions, avoiding the risks of self-diagnosis and treatment.",
 text4 : "Individual and Families",
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
              <CardTitle>No more waiting in line</CardTitle>
            </CardHeader>
            <CardContent>
              <p>At Healthx, no more waiting. Access online doctors hassle-free. Book consultations, get prescriptions, and manage health records conveniently online.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              
              <CardTitle>Rushed visits</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Traditional visits feel rushed, leading to unnecessary costs. Healthx's 24/7 online doctors offer thorough attention and treatment, saving expenses.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Easily Accessible</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our team offers personalized, cost-effective healthcare, minimizing unnecessary expenses through remote consultations and evidence-based practice.</p>
            </CardContent>
          </Card>
         </div>
        <ContactBanner />
        <Values/>
        
    </div>
  )
}

export default page