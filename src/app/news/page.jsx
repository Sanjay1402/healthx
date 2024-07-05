import CurrentPage from "@/components/currentpage/CurrentPage";
import SolComp from "@/components/solcomp/SolComp";
import Card from "@/components/card(Taha)/Card";
import styles from "./news.module.css";
import Noimgcard from "@/components/card(Taha)/Noimgcard";
import Image from "next/image";
import Slider from "@/components/radioslider/Slider";
import Navbar from "@/components/navbar/Navbar";
const Page = () => {
  let pages_text = { start: "Homepage", end: "News And Media" };

  let images = {
    img: "/Rectangle203.png",
    img2: "/newRectangle.png",
    img3: "/thirdimage.png",
    img4: "/img4.png",
  };

  return (
    <main className="container">
      <Navbar />
      <div className="">
        <CurrentPage pages_text={pages_text} />
      </div>
      <div className="flex mt-20 mb-10 justify-between flex-wrap">
        <div className="">
          <div className="text-3xl mb-4 font-bold">
            <span className="orange">News &</span>{" "}
            <span className="green">Media</span>
          </div>
          <div className="text-2xl font-light mb-4">
            Empowering People through News and Media
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 opacity_text_orange">01</div>
          <div>
            <div className="font-medium text-lg text-wrap">Blogs</div>
            <div className="font-light text-lg text-wrap">
              We are committed to your Health
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-evenly flex-wrap ">
        <Card img={images.img} />

        <div className="">
          <Card />
        </div>
        <div>
          <Card img={images.img2} />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card img={images.img3} />
        </div>
        <div>
          <Card img={images.img4} />
        </div>
        <div>
          <Card img={images.img4} />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div> */}
      <div className="flex justify-around flex-wrap">
        <div className="flex flex-col justify-evenly">
          <Card img={images.img} />
          <div className="">
            <Card />
          </div>
          <div>
            <Card img={images.img2} />
          </div>
        </div>
        <div>
          <div>
            <Card />
          </div>
          <div>
            <Card img={images.img3} />
          </div>
          <div>
            <Card img={images.img4} />
          </div>
        </div>
        <div>
          <div>
            <Card img={images.img2} />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex mt-20 mb-5 justify-between flex-wrap">
          <div className="">
            <div className="text-3xl mb-4 font-bold">
              <span className="orange">Television</span>{" "}
            </div>
            <div className="text-xl font-light mb-4">
              Impact on Society and Culture{" "}
            </div>
          </div>
          <div className="flex">
            <div className="mr-4 opacity_text_orange">02</div>
            <div>
              <div className="font-medium text-lg text-nowrap">Television</div>
              <div className="font-light text-lg text-nowrap">
                Technology Advances
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mb-5 flex justify-between flex-wrap ">
            <div>
              <p className="text-xs">Jan 11:24</p>
              <h1 className="text-xl font-medium">Dawn News</h1>

              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src="/dawnnews1.png" alt="" />
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs">Jan 11:24</p>
              <h1 className="text-xl font-medium">Dawn News</h1>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src="/dawnnews2.png" alt="" />
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs">Jan 11:24</p>
              <h1 className="text-xl font-medium">Dawn News</h1>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src="/dawnnews3.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Slider />
          </div>
        </div>
        <div className="">{/* div left for carousal */}</div>
        <div className="m-10">
          <Image src="/Group 40.png" alt="" width={10000} height={100} />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="mr-4 opacity_text_orange ">02</div>
        <div className="pt-2">
          <div className="font-medium text-base text-nowrap">
            Digital Videos
          </div>
          <div className="font-light text-xs text-nowrap">
            Innovations in Digital Experience{" "}
          </div>
        </div>
      </div>
      <div className="flex mb-1 flex-wrap">
        <div className="flex">
          <div className="h-full flex flex-col items-center justify-center">
            <div>
              <span className="green font-bold text-4xl text-wrap">Our</span>{" "}
              <span className="orange font-bold text-4xl text-wrap">
                Digital Videos
              </span>
              <h2 className="font-light text-xl mt-2 text-wrap">
                Innovating to serve you better.
              </h2>
            </div>
            <div className="flex my-2 pt-5">
              <Slider />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <a href="#">
            <img class="rounded-t-lg" src="/Rectangle17.png" alt="" />
          </a>
          <p className="orange font-normal ml-2 pl-3 text-wrap">
            Tired of Unnecessary High Costs?
          </p>
        </div>
        <div className={styles.box}>
          <a href="#">
            <img class="rounded-t-lg" src="/Rectangle17.png" alt="" />
          </a>
          <p className="orange font-normal ml-2 pl-3 text-wrap">
            Tired of Unnecessary High Costs?
          </p>
        </div>
        <div className={styles.box}>
          <a href="#">
            <img class="rounded-t-lg" src="/Rectangle17.png" alt="" />
          </a>
          <p className="orange font-normal ml-2 pl-3 text-wrap">
            Tired of Unnecessary High Costs?
          </p>
        </div>
      </div>
    </main>
  );
};

export default Page;
