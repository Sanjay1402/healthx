import CurrentPage from "@/components/currentpage/CurrentPage";
import Image from "next/image";
import styles from "./details.module.css";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const Page = ({}) => {
  let pages_text = { start: "Homepage", end: "Blogs" };
  return (
    <main className="container">
      <div className="mb-5 pb-5 m-1">
        <CurrentPage pages_text={pages_text} />
      </div>
      <div className="flex flex-row flex-wrap md:flex-nowrap lg:flex-nowrap">
        <div className="flex flex-col w-30 flex-wrap">
          <div className="m-1">
            <p className="text-xl font-light">Jan 11.24</p>
          </div>
          <div className="mr-5 mb-4">
            <h2 className="text-3xl ">
              The Rising Cost of Healthcare: Is It Too Late to Bring Costs Down?
            </h2>
          </div>
          <div className="flex justify-start">
            <Image
              src="/Rectangle37(big).png"
              alt=""
              width={800}
              height={100}
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-7 md:gap-y-24 md:mr-2 md:pr-2  md:flex-wrap lg:flex-wrap justify-center">
          <div className="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 md:p-5 md:m-2 lg:p-5 lg:m-2 flex flex-wrap">
            <p className="green pr-5 m-2 text-xl font-medium">On this Page</p>
            <div className="flex flex-wrap items-center justify-center text-sm md:text-md lg:text-lg">
              <ul className="list-disc list-inside text-wrap">
                <li className="m-1">Factors Behind Rising Healthcare Cost</li>
                <li className="m-1">Medical Advancements</li>
                <li className="orange m-1">Aging Population</li>
                <li className="m-1">Increased Demand</li>
                <li className="m-1">Embrace Preventive Healthcare</li>
                <li className="m-1">Promote Generic Medications</li>
              </ul>
            </div>
          </div>
          <div className="max-w-sm  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-5 m-2 flex flex-wrap flex-col">
            <div className="m-2">
              <div>Instagram</div>
              <div className={`${styles.healthx}`}>Healthx Pakistan</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-around ">
                <div>
                  <Image
                    src="/Rectangle193.png"
                    alt=""
                    width={80}
                    height={60}
                  />
                </div>
                <div>
                  <Image
                    src="/Rectangle 194.png"
                    alt=""
                    width={80}
                    height={50}
                  />
                </div>
                <div>
                  <Image
                    src="/Rectangle 195.png"
                    alt=""
                    width={80}
                    height={50}
                  />
                </div>
              </div>
              <div className="">
                <div className="flex justify-around ">
                  <div>
                    <Image
                      src="/Rectangle 197.png"
                      alt=""
                      width={80}
                      height={60}
                    />
                  </div>
                  <div>
                    <Image
                      src="/Rectangle 198.png"
                      alt=""
                      width={80}
                      height={50}
                    />
                  </div>
                  <div>
                    <Image
                      src="/Rectangle 199.png"
                      alt=""
                      width={80}
                      height={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-8/12 flex text-wrap  text-sm md:text-md lg:text-lg">
        <p>
          In recent years, the escalating cost of healthcare has become a
          growing concern worldwide, including in Pakistan. As medical
          advancements continue to improve and populations age, the demand for
          healthcare services has surged, consequently driving up costs. From
          consultation fees to the price of prescription medications, the
          financial burden on individuals and families has become increasingly
          daunting. In this blog, we delve into the factors contributing to the
          rising cost of healthcare in Pakistan and explore potential solutions
          to address this pressing issue.
        </p>
      </div>
      <div className="w-8/12 my-8">
        <h1 className="font-semibold text-sm md:text-md lg:text-lg">
          Understanding the Factors Behind Rising Healthcare Costs:
        </h1>
        <p className="font-light">
          Several factors contribute to the escalating cost of healthcare in
          Pakistan
        </p>
      </div>
      <div className="w-8/12 my-8">
        <h1 className="font-light orange text-lg">Medical Advancements</h1>
        <p className="font-light text-sm md:text-md lg:text-lg">
          While medical innovations have undoubtedly improved patient outcomes
          and quality of care, they often come at a hefty price. Advanced
          diagnostic tools, cutting-edge treatments, and sophisticated medical
          devices contribute significantly to healthcare expenditure.
        </p>
      </div>
      <div className="w-8/12 my-8">
        <h1 className="font-light orange text-lg ">Aging Population</h1>
        <p className="font-light text-sm md:text-md lg:text-lg ">
          With improvements in healthcare leading to longer life expectancy, the
          proportion of elderly individuals requiring medical attention has
          increased. The elderly often require more intensive and specialized
          care, driving up healthcare costs.
        </p>
      </div>
      <div className="w-8/12 my-8">
        <h1 className="font-light orange text-lg">Increased Demand </h1>
        <p className="font-light text-sm md:text-md lg:text-lg">
          As awareness about healthcare grows and access to medical facilities
          improves, there is a surge in demand for healthcare services. This
          increased demand exerts pressure on existing healthcare
          infrastructure, leading to higher costs to meet the growing needs of
          the population.
        </p>
      </div>
      <div className="w-8/12 my-8 flex  justify-between flex-wrap gap-5">
        <div>
          <Image src="/Rectangle 201.png" alt="" width={370} height={100} />
        </div>
        <div>
          <Image src="/Rectangle 200.png" alt="" width={370} height={100} />
        </div>
      </div>
      <div className="text-wrap">
        <div className="w-8/12 my-8">
          <h1 className="font-semibold text-lg">
            Is It Too Late to Bring Costs Down?{" "}
          </h1>
          <p className="font-light text-sm md:text-md lg:text-lg">
            While the challenge of controlling healthcare costs may seem
            daunting, it is not insurmountable. Several strategies can be
            implemented to address this issue:
          </p>
        </div>
        <div className="w-8/12 my-8">
          <h1 className="font-light orange text-lg">
            Embrace Preventive Healthcare:
          </h1>
          <p className="font-light text-sm md:text-md lg:text-lg">
            Investing in preventive measures and promoting healthy lifestyle
            choices can reduce the incidence of chronic diseases and lower
            healthcare costs in the long run. Public health initiatives focusing
            on vaccination campaigns, smoking cessation programs, and nutrition
            education can lead to significant cost savings by preventing costly
            medical interventions.
          </p>
        </div>
        <div className="w-8/12 my-8">
          <h1 className="font-light orange text-lg">
            Promote Generic Medications
          </h1>
          <p className="font-light text-sm md:text-md lg:text-lg">
            Encouraging the use of generic medications over brand-name drugs can
            significantly reduce medication costs for patients. Government
            policies that promote generic drug manufacturing and increase access
            to affordable alternatives can help mitigate the financial burden on
            individuals.
          </p>
          wrap
        </div>
      </div>
      <div className="flex flex-col text-wrap justify-start">
        <div className="text-xl my-4 py-4">
          <h1 className="font-bold text-3xl green">Post a Comment</h1>
          <p className="font-light">Understanding the Impact and Solutions</p>
        </div>

        <div className="mt-10 mb-10 text-center flex flex-col flex-wrap gap-1">
          <div className="flex flex-row justify-between flex-wrap gap-1">
            <div className="max-w-xl w-full">
              <Input
                className="orange-border h-12 px-3"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="max-w-xl w-full">
              <Input
                className="orange-border h-12 px-3"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <Textarea className="mb-3 orange-border " placeholder="Message" />{" "}
          <Button className="bg_orange w-1/6 text-wrap text-sm">
            Send a message
          </Button>
        </div>
      </div>
      <div className="flex mt-10 mb-5 justify-start flex-wrap">
        <div className="">
          <div className="text-3xl mb-3 font-bold">
            <span className="orange">Related Posts</span>{" "}
            <span className="green">Posts</span>
          </div>
          <div className="text-2xl font-light mb-3">Blogs </div>
        </div>
      </div>
      <div className="">
        <div className="mb-5 flex justify-between flex-wrap">
          <div className="">
            <p className="text-xs">Jan 11:24</p>
            <h1 className="text-sm md:text-md lg:text-md font-medium">
              Your Daily Dose of Medical Wisdom
            </h1>

            <div className="max-w-sm my-4">
              <a href="#">
                <img
                  className="rounded-t-lg my-2"
                  src="/Rectangle37(big).png"
                  alt=""
                  width={300}
                />
              </a>
              <span class="bg-[#D3FFF9] text-[#1F8B7B] text-xs font-light me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                News
              </span>
            </div>
          </div>
          <div>
            <p className="text-xs">Jan 11:24</p>
            <h1 className="text-sm md:text-md lg:text-md font-medium">
              Empowering Communities through Health Education
            </h1>
            <div className="max-w-sm my-4">
              <a href="#">
                <img
                  className="rounded-t-lg my-2"
                  src="/Rectangle37(big).png"
                  alt=""
                  width={300}
                />
              </a>
              <span class="bg-[#D3FFF9] text-[#1F8B7B] text-xs font-light me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                News
              </span>
            </div>
          </div>
          <div>
            <p className="text-xs">Jan 11:24</p>
            <h1 className="text-sm md:text-md lg:text-md font-medium">
              Empowering Communities through Health Education
            </h1>
            <div className="max-w-sm my-4">
              <a href="#">
                <img
                  className="rounded-t-lg my-2"
                  src="/Rectangle37(big).png"
                  alt=""
                  width={300}
                />
              </a>
              <span class="bg-[#D3FFF9] text-[#1F8B7B] text-xs font-light me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                News
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
