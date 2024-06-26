import Image from "next/image";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className="flex justify-around">
        <div className="flex flex-col pt-11">
          <div className="flex">
            <Image
              src="/logo 1.png"
              width={70}
              height={70}
              alt=""
              className={styles.logo}
            />
            <Image src="/footerlogo.png" width={85} height={10} alt="" />
          </div>
          <div className="mt-2 pt-2">
            <p className="text-2xl font-medium">
              Healthcare Solutions <br /> For All
            </p>
          </div>
          <div>
            <p className="text-xs mt-2 pt-2 text-slate-400">
              AUSTIN, Texas, Jan. 11, 2024 — Ambiq@
            </p>
          </div>
          <div className="flex mt-8 pt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="none"
              className="mr-2"
            >
              <path
                fill="#fff"
                d="M10.424.481a10.094 10.094 0 1 0 10.094 10.094A10.105 10.105 0 0 0 10.423.481Zm.776 18.6v-6.176h2.33a.776.776 0 0 0 0-1.553H11.2v-2.33a1.553 1.553 0 0 1 1.553-1.553h1.553a.776.776 0 1 0 0-1.553h-1.553a3.106 3.106 0 0 0-3.106 3.106v2.33h-2.33a.777.777 0 0 0 0 1.553h2.33v6.175a8.54 8.54 0 1 1 1.553 0Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="none"
              className="mr-2"
            >
              <path
                fill="#E9501D"
                d="M13.142 10.038c.95-.97 2.186-1.604 3.624-1.604a5.694 5.694 0 0 1 5.694 5.694v7.764h-2.07v-7.764a3.623 3.623 0 1 0-7.248 0v7.764h-2.07V8.952h2.07v1.086ZM5.895 6.881a1.553 1.553 0 1 1 0-3.106 1.553 1.553 0 0 1 0 3.106ZM4.86 8.95h2.07v12.941H4.86V8.952Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="25"
              fill="none"
              className="mr-2"
            >
              <path
                fill="#fff"
                d="m14.868 10.91 7.863-9.205h-1.864l-6.825 7.993-5.454-7.993h-6.29l8.247 12.088-8.246 9.653h1.863l7.21-8.442 5.759 8.442h6.29L14.867 10.91Zm-2.551 2.988-.836-1.203-6.648-9.577h2.862l5.364 7.729.836 1.203 6.974 10.048h-2.862l-5.69-8.2Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="none"
              className="mr-2"
            >
              <path
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.553"
                d="M12.576 16.716a4.141 4.141 0 1 0 0-8.282 4.141 4.141 0 0 0 0 8.282Z"
              />
              <path
                stroke="#fff"
                stroke-width="1.553"
                d="M3.259 16.716V8.434a5.176 5.176 0 0 1 5.176-5.177h8.283a5.176 5.176 0 0 1 5.176 5.177v8.282a5.177 5.177 0 0 1-5.176 5.177H8.435a5.177 5.177 0 0 1-5.176-5.177Z"
              />
              <path
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.553"
                d="m18.27 6.893.012-.013"
              />
            </svg>
          </div>
        </div>
        <div className="flex gap-20 items-center">
          <div>
            Quick Links
            <div className="text-xs mt-2 pt-2 text-slate-400 ">
              <ul>
                <li className="mb-1">About Us</li>
                <li className="mb-1">FAQs</li>
                <li className="mb-1">News and Media</li>
                <li className="mb-1">Contact Us</li>
                <li className="mb-1">Digital Videos</li>
              </ul>
            </div>
          </div>
          <div>
            Resources
            <div className="text-xs mt-3 text-slate-400 ">
              <ul className="pb-2">
                <li className="mb-2">Individuals & Families</li>
                <li className="mb-2">Corporate Health Solutions</li>
                <li className="mb-2">Health Incurrence</li>
                <li className="mb-2">Government Health Initiate</li>
              </ul>
            </div>
          </div>
          <div className="pt-3">
            Our Information
            <ul>
              <li>
                <div className="flex text-xs mt-3 text-slate-400 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      stroke="#E9501D"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                      d="M17 20.652H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
                    />
                    <path
                      stroke="#E9501D"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                      d="m17 9.152-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9.152"
                    />
                  </svg>
                  <p className="p-1">info@healthxpakistan.com</p>
                </div>
              </li>
              <li>
                <div className="flex text-xs mt-3 text-slate-400 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      stroke="#fff"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                      d="M21.97 18.482c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41-.48-1.14-.72-2.23-.72-3.27 0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67.64-.63 1.34-.94 2.08-.94.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z"
                    />
                  </svg>
                  <p className="p-1">021 382 824 33</p>
                </div>
              </li>
              <li>
                <div className="flex text-xs mt-3 text-slate-400 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    fill="none"
                  >
                    <path
                      stroke="#fff"
                      stroke-width="1.5"
                      d="M12 13.582a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z"
                    />
                    <path
                      stroke="#fff"
                      stroke-width="1.5"
                      d="M3.62 8.642c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.194 5.194 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z"
                    />
                  </svg>
                  <p className="p-0.5">
                    Address: 4th floor, Elegant tower, plot no BC-2,
                    <br /> Khayaban-e- Iqbal, Block no 5, KDA <br />
                    Scheme No 5, Clifton, Karachi, Pakistan
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className={styles.customhr} />
      <div className="flex justify-evenly">
        <div>
          <h1 className="font-medium	">Join or newsletter</h1>
          <p className="text-xs mt-3 font-light">
            Keep up to date with everything Reflect
          </p>
        </div>
        <div className={styles.containerinput}>
          <input type="text" placeholder=" Your email" className="text-black" />
          <button>Subscribe</button>
        </div>
      </div>
      <hr className={styles.customhr} />
      <div className="flex justify-between mx-6 px-7">
        <div className="flex gap-10 m-4 p-2 text-xs">
          <p>Terms and Condition</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <p className="text-xs m-4 p-2">
            Copyright © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
