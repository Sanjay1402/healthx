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
import Card from "@/components/card(Taha)/Card";
export default function Home() {
  return (
    <main className="">
      <div className={`container`}>
        <div className={styles.example}>
          <div className="flex flex-col bottom-left">
            <div className="flex items-end p-2">
              <h1 className={styles.healthx}>Healthx Pakistan</h1>
            </div>
            <div className="mb-4 p-2">
              <h1 className="orange text-5xl font-bold">
                Healthcare with a <span className="green">Heart</span>
              </h1>
            </div>
            <div className="my-1 p-2">
              <h2 className="font-extralight text-4xl">
                Where Every Life Matters
              </h2>
            </div>
            <div className="my-1 p-2">
              <button className={`text-white ${styles.contactbutton}`}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-around mb-32 ">
          <div className="">
            Trusted by more than{" "}
            <span className="orange">
              500,000+ <br></br>
            </span>
            active users across the globe
          </div>
          
          <div className="grid md:grid-cols-4 sm:grid-cols-2 place-items-center ">
            
          <div className="flex ">
            <div className="green text-6xl font-medium ">50K</div>

            <div className="mt-1 ms-1 ">
              <div>Ratings</div>
              <div>User</div>
            </div>
          </div>
         
          <div className="flex">
            <div className="green text-6xl font-medium">95K</div>

            <div className="mt-1 ms-1">
              <div>Experienced</div>
              <div>Clinics</div>
            </div>
          </div>

          <div className="flex">
            <div className="green text-6xl font-medium">80%</div>

            <div className="mt-1 ms-1">
              <div>Experienced</div>
              <div>Clinics</div>
            </div>
          </div>


        </div>
        </div>
        <div className="flex sm:justify-between md:justify-between lg:justify-around container flex-wrap">
          <div className="flex flex-wrap">
            <div className="flex items-start">
              {" "}
              <span className="orange text-5xl font-bold opacity-20 mx-2 px-2">
                02
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-medium">About Us</span>
              <span className="font-light">
                We are committed to your Health
              </span>
            </div>
          </div>
          <div className="green text-3xl font-bold">
            Healthcare <span className="orange">Management for All</span>
            <p className="text-2xl font-light text-black">
              A global approach in pakistan
            </p>
          </div>
          <div className="flex mt-4 pt-4 flex-wrap sm:justify-center md:justify-end lg:justify-end">
            <div className="w-1/2	text-sm font-light ">
              Powered by TruDoc, Healthx is a global healthcare management
              company providing high-quality primary healthcare services to all.
              Our primary function as a healthcare management company in
              Pakistan is to keep patients healthy and reduce costs for patients
              and payers. To meet the diverse needs of our customers, we offer a
              range of health-care plans.
            </div>
          </div>
        </div>

        <div className="flex  mt-5 pt-3  flex-wrap sm:justify-center md:justify-between lg:justify-between">
          <div className="ml-3">
            <div className="mb-10 pb-5 flex">
              <div className="max-w-sm">
                <a href="#">
                  <img class="rounded-t-lg" src="/Rectangle7.png" alt="" />
                </a>
                <div className="">
                  <p className="mb-3 font-normal text-gray-400 dark:text-gray-400 mt-4 pt-4">
                    Our progressive delivery model uses technology to
                    provide healthcare services that are convenient for you,
                    whether you need medical assistance at home, in the office,
                    or while travelling. 
                  </p>
                  <button className={styles.readmore}>Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex  flex-wrap sm:justify-center md:justify-between lg:justify-between">
            <div className="mb-10 pb-5">
              <div className="w-[24rem] md:w-[37.5rem] lg:w-[37.5rem] ">
                <a href="#">
                  <img class="rounded-t-lg" src="/Rectangle 8.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container py-10  ${styles.containerdiv} `}>
        <div className={`${styles.containerdiv}`}>
          <div className="flex justify-between flex-wrap">
            <div className="">
              <h2 className="orange font-bold text-4xl my-1">
                Bridging Gaps in Healthcare
              </h2>
              <p className="font-extralight	 text-3xl text-white">
                Services for Individuals and Organizations
              </p>
            </div>
            <div className="flex flex-row items-center">
              <div className="text-white">
                <div className="flex justify-end">
                  <h3 className="font-bold">Our Solution</h3>
                </div>
                <p>We are committed to your health</p>
              </div>
              <div className="flex m-2">
                <span className="green text-5xl font-bold opacity-20">03</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 my-5 flex-wrap md:flex-nowrap lg:flex-nowrap">
          <div className="max-w-xs rounded-lg shadow ">
            <div className={`${styles.color}`}>
              <div className="m-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="150"
                    fill="none"
                  >
                    <path
                      fill="#1F8B7B"
                      d="M84.935 142.312c1.665-3.404 2.223-6.701 2.728-9.986 2.111-13.722 2.892-27.559 3.39-41.414.052-1.394.676-2.241 1.728-2.26.992-.022 1.68.78 1.765 1.929.216 2.995.324 6.01.736 8.98 1.312 9.45 2.624 18.906 4.181 28.316.617 3.724 1.862 7.344 2.844 11.009.093.345.33.654.91 1.066.491-1.735 1.108-3.449 1.45-5.214 1.453-7.541 1.747-15.19 1.932-22.835.487-20.036-.063-40.061-1.037-60.075-.059-1.256.272-2.182 1.13-3.107 6.895-7.46 13.64-15.06 19.542-23.344 2.249-3.155 4.103-6.593 6.069-9.942.409-.699.576-1.561.744-2.371.193-.948-.16-1.524-1.205-1.063-1.181.52-2.445.981-3.441 1.761-4.27 3.338-8.507 6.724-12.666 10.203-6.292 5.266-12.429 10.71-19.483 15-6.284 3.824-13.208 4.6-20.33 4.586-.984 0-1.601-.52-1.612-1.524-.015-1.16.706-1.557 1.79-1.657 3.732-.346 7.505-.51 11.177-1.197 5.088-.955 9.314-3.884 13.268-7.032 6.601-5.251 12.975-10.79 19.531-16.1 2.728-2.212 5.638-4.211 8.555-6.17.926-.62 2.119-.98 3.234-1.148 2.865-.428 5.002 1.683 4.382 4.515a23.54 23.54 0 0 1-2.245 6.077c-3.538 6.564-8.229 12.328-12.993 18.015-3.635 4.333-7.408 8.551-11.187 12.762-.747.833-1 1.628-.967 2.717.409 14.045.985 28.086 1.074 42.132.067 10.332-.375 20.671-.884 30.996-.201 4.088-1.123 8.154-1.881 12.201-.241 1.279-.862 2.565-1.583 3.665-1.554 2.364-4.125 2.345-5.419-.145-1.055-2.029-1.921-4.248-2.386-6.482-1.643-7.927-3.077-15.899-4.534-23.567-.153 1.732-.32 3.817-.524 5.899-.732 7.515-1.364 15.052-3.375 22.37a15.705 15.705 0 0 1-1.892 4.289c-1.337 2.081-3.597 2.04-5.024.007-.577-.821-1-1.776-1.338-2.728-.339-.951-.004-1.787 1.007-2.118.948-.309 1.61.163 2 1.033.24.535.468 1.078.847 1.959l-.008-.008Z"
                    />
                    <path
                      fill="#E9501D"
                      d="M66.914 134.831c-.342 1.427-.528 2.612-.915 3.731-.553 1.609-1.059 3.289-1.932 4.724-1.955 3.2-5.62 3.2-7.734.089-1.632-2.401-2.186-5.188-2.584-7.994-1.178-8.311-.87-16.651-.42-24.991.157-2.869.402-5.734.677-8.596.082-.851-.208-1.297-.877-1.81-4.865-3.702-9.767-7.359-14.469-11.261-1.9-1.573-3.434-3.635-4.917-5.635-.77-1.04-1.252-2.386-1.539-3.668-.59-2.628 1.424-5.244 4.103-5.605 2.249-.304 4.36.253 6.296 1.279 3.594 1.903 7.103 3.973 10.66 5.95 2.341 1.3 4.69 2.598 7.069 3.836 2.527 1.315 5.102 1.379 7.548-.16 2.862-1.799 5.664-3.69 8.463-5.582 3.185-2.152 6.262-4.479 9.536-6.479a15.182 15.182 0 0 1 5.282-1.95c3.739-.629 6.366 2.419 5.478 6.087-.661 2.74-2.219 5.032-4.073 7.028-3.375 3.627-6.887 7.132-10.47 10.555-1.089 1.04-1.59 1.97-1.61 3.516-.126 9.92-.2 19.843-.694 29.748-.223 4.449-1.33 8.86-2.141 13.272-.178.97-.71 1.914-1.241 2.769-1.61 2.583-4.427 2.742-6.107.2-1.03-1.553-1.65-3.397-2.326-5.158-.446-1.156-.666-2.398-1.063-3.895Zm6.132 7.574c.152-.015.308-.03.46-.041.373-.821.919-1.609 1.082-2.468.718-3.768 1.565-7.533 1.922-11.343 1.018-10.856 1.033-21.753.77-32.646-.027-1.13.364-1.87 1.185-2.632 3.36-3.118 6.809-6.17 9.9-9.544 1.97-2.152 3.55-4.724 4.966-7.292.93-1.683-.282-3-2.163-2.508-1.368.356-2.769.884-3.936 1.665-3.817 2.538-7.496 5.277-11.298 7.838a96.07 96.07 0 0 1-7.444 4.575c-2.617 1.438-5.449 1.583-8.173.327-3.055-1.412-6.047-2.973-9.01-4.571-3.337-1.8-6.585-3.761-9.93-5.542-1.037-.55-2.241-.903-3.408-1.059-2.13-.282-3.014.918-2.015 2.836a19.712 19.712 0 0 0 2.937 4.18c4.686 5.07 10.22 9.14 15.97 12.886 1.988 1.297 2.728 2.431 2.43 5.062-1.107 9.812-1.512 19.687-.728 29.562.253 3.182.59 6.389 2.118 9.281.316.594 1.011 1.36 1.54 1.367.505.008 1.296-.788 1.482-1.379.788-2.505 1.68-5.028 2.007-7.611.554-4.356.714-8.764 1.026-13.153.074-1.045.442-1.844 1.62-1.847 1.074-.004 1.517.68 1.632 1.694.241 2.163.405 4.345.821 6.478a323.39 323.39 0 0 0 2.806 12.867c.253 1.063.944 2.026 1.435 3.033l-.004-.015Z"
                    />
                    <path
                      fill="#1F8B7B"
                      d="M76.194 56.388c-7.047-.676-14.112-1.223-21.137-2.077-4.18-.51-7.489-2.803-9.529-6.508-2.137-3.888-4.088-7.883-5.946-11.912-2.037-4.411-3.799-8.95-5.832-13.361-.825-1.791-1.988-3.442-3.14-5.05-.368-.514-1.204-.692-1.825-1.027-.286.647-.851 1.312-.803 1.933.182 2.39.32 4.828.914 7.136 1.602 6.229 3.267 12.45 5.215 18.575 2.114 6.657 1.854 13.172.03 19.821-3.646 13.298-8.805 26.027-14.194 38.679-.762 1.784-.792 2.65.855 3.713 2.386 1.538 4.92 2.973 7.574 3.954 6.121 2.26 12.536 3.245 19.036 3.639.138.007.28.007.417.018 1.341.108 2.14.799 1.984 1.806-.186 1.205-1.03 1.569-2.137 1.461-2.534-.253-5.084-.435-7.604-.803-5.835-.855-11.607-2.07-16.907-4.753-1.988-1.008-3.872-2.379-5.478-3.921-1.687-1.621-1.929-3.709-.922-6.006 4.977-11.37 9.641-22.861 13.139-34.788.921-3.148 1.601-6.37 2.311-9.577.83-3.736.108-7.37-.884-10.968-1.925-6.958-3.98-13.882-5.742-20.88-.625-2.479-.71-5.125-.759-7.7-.033-1.945.83-3.64 2.821-4.386 2.015-.758 3.639.104 5.01 1.497 2.59 2.636 4.014 5.988 5.471 9.288 2.468 5.586 4.813 11.232 7.28 16.818.71 1.602 1.655 3.103 2.517 4.635 1.829 3.244 4.597 5.277 8.292 5.634 6.125.59 12.276.962 18.416 1.386 1.386.097 2.78.023 4.173.015 1.09-.007 1.855.472 1.88 1.587.027 1.134-.769 1.59-1.831 1.658-.878.055-1.755.126-2.632.193-.01.097-.022.19-.03.286l-.003-.015ZM87.574 8.66c6.842.022 12.373 5.567 12.358 12.398-.011 6.857-5.675 12.455-12.536 12.395-6.82-.063-12.295-5.645-12.258-12.503.037-6.864 5.55-12.309 12.436-12.287V8.66Zm9.087 12.402c.011-5.092-4.08-9.217-9.15-9.217-5.032 0-9.213 4.203-9.18 9.228a9.167 9.167 0 0 0 9.12 9.106c5.126.026 9.199-4.007 9.21-9.117Z"
                    />
                    <path
                      fill="#1F8B7B"
                      d="M48.148 34.88a12.406 12.406 0 0 1 12.317-12.45c6.831-.067 12.492 5.586 12.477 12.458-.015 6.812-5.586 12.365-12.414 12.365-6.834 0-12.368-5.527-12.38-12.373Zm21.523.004c.015-5.103-4.055-9.198-9.143-9.202-5.058-.004-9.206 4.151-9.18 9.198.026 5 4.115 9.11 9.11 9.147 5.066.04 9.198-4.062 9.213-9.147v.004Z"
                    />
                    <path
                      fill="#E9501D"
                      d="M64.647 81.988a9.521 9.521 0 0 1-9.59-9.496c-.04-5.344 4.241-9.682 9.564-9.685 5.303-.008 9.67 4.374 9.626 9.66-.045 5.27-4.316 9.506-9.6 9.521Zm6.351-9.567c.004-3.508-2.85-6.374-6.355-6.377-3.486-.008-6.385 2.876-6.393 6.359-.007 3.468 2.903 6.385 6.374 6.392 3.483.008 6.37-2.88 6.378-6.37l-.004-.004Z"
                    />
                    <path
                      fill="#1F8B7B"
                      d="M34.702 139.93c.409-1.349.933-2.672 1.208-4.048a617.123 617.123 0 0 0 2.527-13.513c.338-1.933.918-2.754 2.063-2.55 1.152.208 1.527 1.126 1.144 3.085-1.04 5.311-2.066 10.63-3.214 15.918-.28 1.286-.863 2.557-1.547 3.691-1.118 1.858-3.237 2.025-4.448.238-.91-1.342-1.729-2.959-1.922-4.538-.747-6.155-1.237-12.343-1.802-18.52-.093-1.041.468-1.758 1.494-1.814 1.215-.063 1.683.784 1.75 1.888.22 3.609.346 7.225.673 10.823.227 2.483.702 4.947 1.115 7.411.108.65.401 1.271.606 1.903l.35.022.003.004ZM49.037 141.896c.977-.702 1.925-1.167 2.761-.123.862 1.074.212 2.015-.516 2.843-1.39 1.576-3.542 1.506-4.501-.431-1.011-2.044-1.821-4.281-2.197-6.522-.84-5.018-1.36-10.091-2-15.142-.14-1.122.056-2.129 1.428-2.23 1.353-.096 1.62.866 1.776 1.989a1359.6 1359.6 0 0 0 2.416 16.899c.134.9.535 1.758.84 2.717h-.007ZM80.728 66.092c0 1.62-.007 3.237 0 4.858.008 1.13-.45 1.973-1.643 1.966-1.2-.007-1.627-.885-1.627-1.996 0-3.237.003-6.478 0-9.715 0-1.108.39-1.933 1.59-2.052 1.011-.1 1.665.736 1.68 2.082.019 1.62.004 3.237.004 4.857h-.004Z"
                    />
                  </svg>
                </a>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold text-white">
                    INDIVIDUALS & FAMILIES
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-400 dark:text-gray-400 text-wrap">
                  Given our fast-paced lives, visiting the doctor’s office has
                  become a burden and an inconvenience for many.
                </p>
                <div className="flex justify-end">
                  <a
                    href="#"
                    class="inline-flex items-center  py-2 text-sm font-medium text-center text-white orange rounded-lg"
                  >
                    <b>Read More...</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-xs rounded-lg shadow ">
            <div className={` ${styles.color}`}>
              <div className="m-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="150"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M147.482 143.676c-.665 1.034-1.624 1.338-2.832 1.338-45.61-.018-91.22-.015-136.83-.018-2.085 0-2.762-.628-2.765-2.572-.008-12.235-.041-24.474.01-36.709.034-7.95 7.393-13.826 14.778-11.811 4.267 1.163 6.85 4.255 8.578 8.124 1.45 3.252 2.776 6.564 4.151 9.849.833 1.99 2.338 2.986 4.516 2.988 4.449 0 8.901-.063 13.35.023 5.177.1 8.522 4.675 6.872 9.31-.245.691-.636 1.326-1.019 2.103h39.913c-.163-.327-.323-.676-.505-1.014-2.427-4.49.379-10.02 5.474-10.292 5.177-.275 10.381-.159 15.569-.089 1.453.019 2.189-.364 2.732-1.78 1.401-3.672 2.954-7.292 4.534-10.893 1.762-4.022 4.393-7.222 8.86-8.367 6.289-1.609 12.811 2.595 14.32 9.14.071.304.197.594.298.888v39.782h-.004Zm-24.214-13.264H29.309V141h93.959v-10.588ZM25.303 141.03c0-4.333.003-8.5-.012-12.67 0-.256-.06-.624-.23-.754-2.39-1.799-2.951-4.642-4.058-7.151-1.587-3.598-3.067-7.24-4.55-10.882-.48-1.175-.018-2.252 1.034-2.635 1.16-.42 1.977.055 2.523 1.085.152.286.25.598.372.896 1.84 4.393 3.683 8.789 5.519 13.182 1.04 2.483 1.661 2.896 4.408 2.896h14.316c2.04 0 4.081.044 6.118-.023 1.601-.055 2.787-1.155 2.991-2.594.209-1.475-.542-2.91-1.884-3.348-.643-.212-1.367-.231-2.055-.231-5.516-.018-11.027-.033-16.543.004-1.45.011-2.304-.558-2.85-1.911-1.658-4.117-3.323-8.239-5.144-12.287-.77-1.705-1.81-3.333-2.97-4.805-1.144-1.457-2.798-2.245-4.716-2.338-4.705-.227-8.589 3.308-8.611 8.043-.056 11.584-.019 23.169-.015 34.75 0 .256.093.513.141.769h16.204l.012.004Zm118.265.004V114.114c0-2.917.049-5.838-.022-8.756-.085-3.464-2.382-6.474-5.612-7.53-3.274-1.07-6.326-.081-8.563 2.922-.792 1.063-1.438 2.27-1.966 3.493a557.219 557.219 0 0 0-5.304 12.674c-.55 1.364-1.416 1.91-2.854 1.895-4.356-.041-8.712-.018-13.068-.011-1.575 0-3.155-.044-4.723.063-1.513.104-2.576 1.253-2.699 2.702-.133 1.569.695 2.847 2.208 3.26.569.156 1.186.174 1.784.174 6.485.012 12.975.008 19.46.008 2.732 0 3.367-.416 4.408-2.907 1.784-4.266 3.564-8.537 5.348-12.803.141-.342.29-.68.442-1.019.606-1.312 1.535-1.78 2.632-1.334 1.074.431 1.498 1.52.974 2.784-2.089 5.043-4.208 10.072-6.326 15.104-.179.424-.361.952-.71 1.175-2.137 1.393-1.788 3.519-1.773 5.574.023 2.736 0 5.468.011 8.203 0 .401.056.799.093 1.26h16.26v-.011ZM59.243 18.397c1.193-4.43 3.865-7.448 8.358-8.63 1.06-.279 2.197-.371 3.3-.375 12.797-.026 25.59-.026 38.386-.011 7.165.007 11.948 4.79 11.974 11.945.019 5.099.004 10.198.004 15.297 0 7.296-2.891 11.065-10.061 12.934.357 2.572.68 5.177 1.093 7.764.175 1.093.156 2.063-.859 2.706-1.077.684-2.003.256-2.91-.465-3.921-3.11-7.886-6.166-11.77-9.321-.955-.773-1.948-.784-2.992-.673-.271.03-.606.495-.721.825-1.94 5.508-5.694 8.225-11.5 8.24-7.79.015-15.575-.022-23.365.04-.84.008-1.822.358-2.49.867-3.91 2.973-7.757 6.032-11.6 9.09-.9.714-1.806 1.205-2.906.588-1.108-.624-1.138-1.65-.952-2.791.405-2.554.729-5.118 1.093-7.742-.77-.193-1.442-.33-2.093-.531-4.697-1.446-7.879-5.646-7.95-10.753a585.952 585.952 0 0 1 0-17.523c.105-6.508 4.921-11.258 11.437-11.343 5.422-.071 10.848-.03 16.27-.041.045 0 .086-.034.257-.097h-.003Zm48.234 35c-.246-1.859-.454-3.394-.651-4.933-.293-2.319.35-3.08 2.639-3.148 4.854-.137 7.608-2.947 7.619-7.808.011-5.374.011-10.752 0-16.127-.011-4.88-2.906-7.823-7.764-7.827-12.789-.018-25.578-.018-38.366 0-4.791.008-7.72 2.959-7.727 7.72a4635.61 4635.61 0 0 0 0 16.126c.004 5.08 2.832 7.909 7.923 7.913 7.787.007 15.57.055 23.356-.038 1.936-.022 3.449.499 4.913 1.74 2.531 2.144 5.199 4.13 8.061 6.381h-.003Zm-48.09-11.284-.494-8.76h-1.557c-4.033 0-8.065.01-12.094-.008-1.631-.007-2.456-.736-2.412-2.018.041-1.212.844-1.854 2.434-1.862 4.078-.015 8.158 0 12.235-.011.487 0 .974-.045 1.435-.07V22.73c-5.72 0-11.324-.142-16.922.048-3.813.13-6.511 3.215-6.552 7.14a873.172 873.172 0 0 0 0 17.378c.03 3.178 1.87 5.798 4.683 6.727.948.313 1.996.376 3.003.428 2.13.111 2.85.895 2.58 2.97-.209 1.601-.428 3.2-.673 5.05.553-.394.929-.639 1.282-.914 2.479-1.947 4.98-3.862 7.407-5.869 1.063-.877 2.156-1.256 3.542-1.245 7.83.052 15.665.026 23.496.023.788 0 1.58 0 2.36-.078 2.64-.264 5.029-2.279 5.627-4.862h-1.505c-5.374 0-10.752-.018-16.126.008-3.026.015-5.735-.777-8.132-2.695-.58-.464-1.45-.784-2.193-.791-5.237-.067-10.473-.026-15.71-.045-1.476-.004-2.312-.803-2.27-2.037.04-1.189.817-1.84 2.288-1.843 4.312-.011 8.62-.004 12.93-.004h1.342l-.003-.007Z"
                    />
                    <path
                      fill="#E9501D"
                      d="M84.865 94.167c.212 3.382-.008 6.508-2.617 8.85-1.613 1.449-3.545 2.185-5.697 2.237-2.892.071-5.345-.929-7.233-3.178-1.91-2.274-1.784-5.054-1.817-7.946-3.423.22-6.63-.037-8.946-2.847-1.409-1.71-2.234-3.727-1.98-5.909.196-1.695.742-3.423 1.493-4.962.788-1.616 2.308-2.72 4.074-3.14 1.687-.398 3.456-.469 5.422-.71-.215-3.42.097-6.798 3.234-9.113 1.832-1.353 3.898-1.873 6.15-1.706 2.695.197 4.88 1.349 6.482 3.542 1.606 2.2 1.52 4.78 1.476 7.537 3.612-.208 7.01.078 9.332 3.215 1.35 1.821 1.936 3.899 1.743 6.143-.227 2.662-1.33 4.888-3.538 6.493-2.211 1.606-4.78 1.539-7.575 1.498l-.003-.004Zm.52-3.906c.74 0 1.483.026 2.223-.003 2.672-.105 4.437-1.948 4.493-4.668.056-2.728-1.62-4.672-4.274-4.85-1.475-.097-2.966-.034-4.445-.071-1.68-.041-2.349-.718-2.375-2.383-.022-1.434.033-2.873-.026-4.307-.104-2.598-1.944-4.304-4.627-4.356-2.81-.056-4.72 1.561-4.876 4.215-.086 1.479-.015 2.966-.052 4.445-.045 1.706-.688 2.345-2.383 2.386-1.483.037-2.97-.03-4.445.067-2.583.167-4.207 2.066-4.188 4.775.018 2.743 1.769 4.65 4.404 4.743 1.342.048 2.687.007 4.032.018 1.914.015 2.557.658 2.587 2.606.019 1.341-.03 2.69.03 4.032.122 2.743 2.051 4.501 4.82 4.464 2.776-.037 4.624-1.836 4.71-4.597.021-.695.007-1.39.007-2.085 0-2.946 1.46-4.422 4.381-4.427l.004-.004Z"
                    />
                    <path
                      fill="#fff"
                      d="M17.353 90.622A11.46 11.46 0 0 1 5.828 79.197a11.501 11.501 0 0 1 11.491-11.618c6.352-.019 11.615 5.248 11.57 11.585-.044 6.329-5.192 11.443-11.536 11.462v-.004ZM9.726 79.07c-.018 4.244 3.304 7.615 7.538 7.652 4.255.037 7.752-3.423 7.726-7.645-.03-4.181-3.46-7.593-7.648-7.604-4.196-.011-7.597 3.382-7.612 7.597h-.004ZM135.147 90.622c-6.341-.03-11.492-5.163-11.514-11.48-.023-6.341 5.251-11.604 11.592-11.563a11.5 11.5 0 0 1 11.469 11.64 11.464 11.464 0 0 1-11.547 11.407v-.004Zm7.648-11.444c.026-4.237-3.285-7.633-7.503-7.704-4.219-.07-7.753 3.408-7.757 7.634 0 4.173 3.423 7.6 7.615 7.615 4.234.019 7.623-3.323 7.649-7.545h-.004ZM90.172 32.944h16.677c.416 0 .843-.037 1.245.045.966.2 1.557.791 1.594 1.817.037 1.089-.55 1.74-1.568 1.985-.398.096-.829.052-1.245.052h-33.49c-.417 0-.852.04-1.246-.06-1.025-.256-1.587-.94-1.527-2.018.056-1.014.654-1.61 1.635-1.784.405-.07.832-.04 1.249-.04h16.676v.003ZM90.16 20.311h16.532c.509 0 1.152-.134 1.494.12.602.441 1.379 1.122 1.409 1.731.03.617-.662 1.39-1.234 1.862-.353.294-1.063.197-1.613.197-11.068.008-22.136.008-33.2 0-.55 0-1.264.093-1.613-.2-.569-.476-1.257-1.257-1.223-1.874.033-.613.821-1.282 1.423-1.72.346-.25.985-.116 1.494-.116 5.512-.003 11.02 0 16.532 0Z"
                    />
                  </svg>
                </a>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold text-white">
                    Corporate Health Solutions
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-400 dark:text-gray-400 text-wrap">
                  Employees are a company’s greatest asset and an integral part
                  of a company’s success.
                </p>
                <div className="flex justify-end">
                  <a
                    href="#"
                    class="inline-flex items-center  py-2 text-sm font-medium text-center text-white orange rounded-lg"
                  >
                    <b>Read More...</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-xs rounded-lg shadow ">
            <div className={`${styles.color}`}>
              <div className="m-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="150"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M21.363 129.129v-9.213c0-2.509.182-2.691 2.683-2.691h3.137V72.682h-2.609c-2.138 0-3.209-1.094-3.211-3.282v-2.635c-1.3 0-2.45.004-3.594 0-.885-.004-1.825.063-2.222-.996-.406-1.07.345-1.613 1.044-2.174C35.2 48.706 53.809 33.817 72.418 18.925c.762-.61 1.564-1.17 2.267-1.844 1.081-1.029 2.01-.936 3.152-.01 6.013 4.875 12.075 9.692 18.122 14.531 13.249 10.604 26.495 21.21 39.745 31.814.108.086.219.171.331.257.687.531 1.438 1.204.877 2.063-.346.527-1.219.895-1.903.98-1.219.157-2.472.045-3.862.045v3.475c-.007 2.145-.289 2.435-2.382 2.438h-3.43v44.544c1.267 0 2.549-.011 3.832 0 1.538.018 1.966.435 1.973 2.003.019 2.735.004 5.475.007 8.21v1.687c1.431 0 2.714-.015 3.996.004 1.472.022 1.951.457 1.977 1.877.033 1.717.011 3.434.007 5.147 0 1.26-.642 1.874-1.895 1.874H18.371c-2.784 0-2.995-.212-2.995-3v-4.036c0-1.241.557-1.903 1.858-1.873 1.293.026 2.586.007 4.125.007l.004.011ZM76.26 19.646c-18.338 14.677-36.568 29.272-54.965 44h109.937c-18.438-14.758-36.642-29.327-54.969-44h-.003ZM36.274 72.682v44.543c1.342 0 2.587-.011 3.832 0 1.542.019 1.958.439 1.98 1.996.02 1.275 0 2.55 0 3.821h8.91c0-1.383-.004-2.673 0-3.962.007-1.242.587-1.888 1.876-1.862 1.327.026 2.654.007 3.996.007V72.682c-1.305 0-2.51.007-3.713 0-1.695-.011-2.145-.45-2.163-2.13-.015-1.23 0-2.46 0-3.69h-8.909c0 1.379-.019 2.668.004 3.958.022 1.27-.565 1.888-1.848 1.87-1.293-.02-2.582-.004-3.972-.004l.007-.004Zm59.361 0v44.543c1.312 0 2.516-.007 3.717 0 1.684.011 2.13.45 2.152 2.141.015 1.23 0 2.46 0 3.672h8.909c0-1.386.018-2.676-.004-3.966-.022-1.278.576-1.877 1.854-1.854 1.327.022 2.65.004 3.962.004V72.678c-1.345 0-2.59.011-3.839 0-1.539-.019-1.951-.438-1.973-2.003-.019-1.275 0-2.546 0-3.81H101.5c0 1.387.008 2.676 0 3.97-.007 1.245-.609 1.88-1.892 1.854-1.293-.026-2.59-.007-3.976-.007h.003Zm-9.12 44.543V72.682c-1.256 0-2.409.004-3.56 0-1.863-.008-2.242-.398-2.25-2.308-.003-1.182 0-2.368 0-3.523h-8.904c0 1.274.007 2.471 0 3.668-.011 1.713-.435 2.148-2.115 2.163-1.234.011-2.468 0-3.694 0v44.543h3.423c2.048.004 2.382.346 2.386 2.449v3.383h8.909c0-1.324-.012-2.565 0-3.81.014-1.535.468-1.999 1.97-2.018 1.244-.015 2.49 0 3.835 0v-.004Zm47.58 14.926H18.464v2.799h115.631v-2.799Zm-109.733-3.129h103.764v-2.777H24.366v2.777h-.004Zm38.441-11.841V72.778h-2.799v44.403h2.799Zm26.893-44.455v44.41h2.81v-44.41h-2.81Zm-59.335.026v44.403h2.75V72.752h-2.75Zm89.049-.03v44.392h2.714V72.723h-2.714Zm-80.315-5.864H24.359v2.735h14.736v-2.735Zm89.057 0h-14.736v2.735h14.736v-2.735ZM24.359 123.053h14.74v-2.743h-14.74v2.743Zm103.793-2.739h-14.736v2.735h14.736v-2.735ZM54.065 66.817v2.799H68.71v-2.799H54.065Zm44.417.04H83.824v2.718h14.658v-2.717Zm-29.74 53.472h-14.67v2.731h14.67v-2.731Zm29.74-.019H83.824v2.717h14.658v-2.717Z"
                    />
                    <path
                      fill="#E9501D"
                      d="M89.607 44.55c-.037 7.326-6.147 13.377-13.431 13.295-7.363-.082-13.31-6.106-13.276-13.45.033-7.348 6.062-13.295 13.432-13.254 7.377.041 13.312 6.04 13.275 13.406v.004Zm-2.999-.003c.037-5.772-4.609-10.477-10.35-10.48-5.687-.004-10.33 4.623-10.363 10.328-.033 5.727 4.527 10.402 10.21 10.466a10.36 10.36 0 0 0 10.503-10.314ZM38.801 57.86h1.777c4.772 0 9.54.011 14.312-.008 1.09-.003 2.048.216 2.03 1.506-.015 1.189-.922 1.434-1.963 1.43-6.578-.014-13.156-.01-19.731-.003-.829 0-1.758-.07-1.84-1.037-.052-.602.32-1.453.788-1.855 5.653-4.794 11.358-9.522 17.048-14.271.814-.68 1.669-.96 2.42-.03.78.962.182 1.71-.595 2.356-4.27 3.56-8.537 7.121-12.804 10.682-.371.312-.74.628-1.438 1.226l-.004.004ZM113.367 57.548c-3.226-2.699-6.452-5.397-9.678-8.091-1.423-1.19-2.839-2.383-4.274-3.557-.814-.669-1.278-1.453-.494-2.367.721-.84 1.565-.584 2.327.051 5.727 4.776 11.469 9.537 17.152 14.361.457.387.847 1.368.665 1.848-.182.475-1.115.936-1.725.944-6.623.066-13.249.033-19.872.048-1.07 0-1.914-.33-1.88-1.513.029-1.196.936-1.423 1.973-1.42 4.772.02 9.544.008 14.312.008h1.357l.134-.312h.003Z"
                    />
                    <path
                      fill="#E9501D"
                      d="M76.592 37.058c3.668.023 7.132 3.531 7.084 7.18-.012.956-.428 1.654-1.439 1.688-.922.03-1.39-.55-1.527-1.457-.446-2.925-1.431-3.906-4.4-4.43-.937-.167-1.547-.61-1.48-1.65.056-.877.688-1.338 1.765-1.33h-.003ZM75.83 51.85c-3.672-.081-6.984-3.438-6.999-7.095-.003-.959.39-1.676 1.39-1.732.981-.055 1.461.554 1.591 1.535.353 2.724 1.565 3.958 4.33 4.371.966.145 1.568.528 1.542 1.565-.026.94-.65 1.382-1.854 1.352v.004Z"
                    />
                  </svg>
                </a>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold text-white">
                    Government Health Initiatives
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
                  Healthx understands the challenges governments face in
                  providing accessible and affordable 
                </p>
                <div className="flex justify-end">
                  <a
                    href="#"
                    class="inline-flex items-center  py-2 text-sm font-medium text-center text-white orange rounded-lg"
                  >
                    <b>Read More...</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-xs rounded-lg shadow ">
            <div className={`${styles.color}`}>
              <div className="m-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="150"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M133.818 98.94c-.413 2.201-.647 4.45-1.268 6.59-4.378 15.157-14.301 24.523-29.654 28.109-.796.186-1.725.011-2.55-.178-6.63-1.535-12.495-4.568-17.487-9.206-.69-.643-1.36-.892-2.289-.892-23.7.022-47.405.018-71.106.018-5.638 0-8.76-3.118-8.76-8.76V74.843c0-.435-.022-.87.019-1.301.137-1.401 1.245-2.42 2.594-2.412 1.349.007 2.438 1.033 2.568 2.438.04.43.019.866.019 1.3v39.779c0 2.687.825 3.531 3.452 3.531h68.111c-5.605-8.032-7.642-16.844-7.002-26.518H20.22c-.476 0-.959.03-1.427-.04a2.602 2.602 0 0 1-2.215-2.643A2.599 2.599 0 0 1 18.83 86.5c.468-.063.951-.037 1.427-.037h50.018v-9.362H20.186c-2.363 0-3.6-.888-3.612-2.587-.011-1.71 1.223-2.609 3.579-2.609h50.17c.049-1.906 1.297-2.605 2.914-3.096 5.962-1.802 11.897-3.679 17.84-5.53.613-.19 1.156-.305 1.152-1.241-.04-10.92-.03-21.839-.034-32.758 0-.123-.044-.246-.1-.532h-1.364c-4.508 0-9.013.008-13.52 0-4.77-.01-7.876-3.125-7.884-7.905-.01-4.932 0-9.864 0-14.97H9.367c-2.65 0-3.463.828-3.463 3.515v39.65c0 .39.01.78-.004 1.17-.07 1.583-1.126 2.698-2.568 2.713-1.446.015-2.542-1.093-2.62-2.661-.02-.39-.008-.78-.008-1.17v-39c0-5.496 1.39-7.507 6.5-9.417h65.517c.557.465 1.155.892 1.668 1.405C81.596 9.27 88.78 16.48 96.005 23.654c.996.988 1.427 2.044 1.424 3.453-.038 10.83-.023 21.66-.023 32.49v1.695c1.1-.342 2.067-.773 3.07-.918 1.07-.156 2.26-.305 3.256 0 9.143 2.776 18.252 5.66 27.376 8.488 1.164.361 2.126.904 2.702 2.011v28.079l.008-.011Zm-58.24-25.387c0 7.232-.01 14.372.012 21.515.004 1.513.078 3.03.223 4.534 1.341 13.715 11.86 25.656 25.273 28.681a4.75 4.75 0 0 0 2.021 0c14.179-3.203 25.073-16.315 25.452-30.88.2-7.66.037-15.332.074-22.995 0-.707-.275-.97-.888-1.16-8.259-2.56-16.509-5.144-24.771-7.697-.469-.145-1.052-.208-1.509-.067-8.593 2.654-17.171 5.345-25.89 8.069h.004Zm12.366-50.014L74.538 10.136c0 3.64-.03 7.478.019 11.314.014 1.167.91 2.055 2.092 2.07 3.835.048 7.671.019 11.295.019Z"
                    />
                  </svg>
                </a>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold text-white">
                    Healthcare Insurance
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
                  Frequent overutilization of healthcare services has become a
                  major concern for insurance companies
                </p>
                <div className="flex justify-end">
                  <a
                    href="#"
                    class="inline-flex items-center  py-2 text-sm font-medium text-center text-white orange rounded-lg"
                  >
                    <b>Read More...</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container"> */}
        <p className="mb-3 font-normal text-gray-400 dark:text-gray-400 text-wrap">
          Powered by TruDoc, Healthx is a global healthcare management
          company providing high-quality primary healthcare services to all. Our
          primary function as a healthcare management company in Pakistan is to
          keep patients healthy and reduce costs for patients and payers. To
          meet the diverse needs of our customers, we offer a range
          of health-care plans.
        </p>
        {/* </div> */}
      </div>
      <div className="container mt-7 p-5">
        <div className="flex md:justify-end my-5 py-5 text-wrap flex-wrap sm:justify-start">
          <span className="orange text-5xl font-bold opacity-20 mx-2 px-2">
            03
          </span>
          <div>
            <h1>Our Team</h1>
            <p>We are committed to your health</p>
          </div>
        </div>
        <div className="flex gap-20 mb-10 md:flex-row sm:flex-col">
          <div className=" w-2/6 sm:mx-auto sm:w-full">
            <div className="text-4xl font-light mb-4">
              Visionaries of Health
            </div>
            <div className="text-5xl mb-4 font-bold sm:m">
              <span className="orange">Your </span>{" "}
              <span className="green">Partners </span>
              <span className="orange">in Health</span>
            </div>
            <div className="font-light text-xl">
              As a multinational healthcare management company, we take pride in
              our team of experienced healthcare professionals who specialize
              in primary healthcare and patient management.
            </div>
            <div className="mt-5 justify-start"></div>
            <Slider />
          </div>

          <div className="lg:flex md:grid md:grid-cols-2 sm:mx-auto">
            <div className="pb-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 ">
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
      <div>
        <div className="container flex justify-between flex-wrap">
          <div className="text-4xl font-bold">
            <span className="flex">
              <h1 className="orange">Blogs</h1>
              <h1 className="green ml-4">News &</h1>
            </span>
            <p className="font-extralight">Events</p>
          </div>
          <div className="flex flex-row items-center flex-wrap text-wrap">
            <div className="flex m-2">
              <span className="orange text-5xl font-bold opacity-20">08</span>
            </div>
            <div className="text-black">
              <div className="flex justify-start">
                <h3 className="font-bold">Blogs</h3>
              </div>
              <p>We are committed to your Health</p>
            </div>
          </div>
        </div>
        <div className="container flex gap-5 my-5 flex-wrap lg:flex-nowrap">
          <div className="w-40 h-1/2 my-5 py-2 text-xl">
            {" "}
            <ul className="m-2 flex flex-col justify-evenly">
              <p className="mb-3"> All</p>
              <a href="/news">
                {" "}
                <li className="opacity-30 mb-3">NEWS</li>
              </a>
              <a href="/blogs">
                {" "}
                <li className="opacity-30  mb-3">BLOGS</li>
              </a>
              <a href="/events">
                <li className="opacity-30  mb-3">EVENTS</li>
              </a>
            </ul>
          </div>
          <div>
            <p className="text-xs">Jan 11:24</p>
            <h1 className="text-sm md:text-md lg:text-md font-medium text-orange">
              Mental health Services should count as Healthcare
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
              Corporate wellness programs help save on healthcare....{" "}
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
              Corporate wellness programs help save on healthcare....{" "}
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
}
