import CurrentPage from "@/components/currentpage/CurrentPage";
import Image from "next/image";
import styles from "./details.module.css";
const Page = ({}) => {
  let pages_text = { start: "Homepage", end: "Blogs" };
  return (
    <main className="container">
      <div className="mb-5 pb-5 m-1">
        <CurrentPage pages_text={pages_text} />
      </div>
      <div className="flex">
        <div className="flex flex-col w-30 flex-wrap">
          <div className="m-1">
            <p className="text-xl font-light">Jan 11.24</p>
          </div>
          <div className="mr-5 mb-4">
            <h2 className="text-3xl">
              The Rising Cost of Healthcare: Is It Too Late to Bring Costs Down?
            </h2>
          </div>
          <div className="flex justify-start">
            <Image
              src="/Rectangle37(big).png"
              alt=""
              width={800}
              height={100}
            />
          </div>
        </div>
        <div className="flex flex-col gap-20 mr-5 pr-5 flex-wrap">
          <div className="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex flex-wrap">
            <p className="green pr-5 m-2 text-xl font-medium">On this Page</p>
            <div className="flex flex-wrap items-center justify-center">
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
          <div className="max-w-sm  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex flex-wrap flex-col">
            <div className="m-2">
              <div>Instagram</div>
              <div className="orange text-xl">Healthx Pakistan</div>
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
      <div className="w-8/12 flex text-wrap my-8">
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
    </main>
  );
};

export default Page;
