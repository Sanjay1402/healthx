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
          <div className="mt-2 pt-1">
            <p className="text-2xl font-medium">
              Healthcare Solutions <br /> For All
            </p>
          </div>
          <div>
            <p className="text-xs mt-2 pt-2 text-slate-400">
              AUSTIN, Texas, Jan. 11, 2024 — Ambiq@
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="none"
            >
              <path
                fill="#fff"
                d="M10.424.481a10.094 10.094 0 1 0 10.094 10.094A10.105 10.105 0 0 0 10.423.481Zm.776 18.6v-6.176h2.33a.776.776 0 0 0 0-1.553H11.2v-2.33a1.553 1.553 0 0 1 1.553-1.553h1.553a.776.776 0 1 0 0-1.553h-1.553a3.106 3.106 0 0 0-3.106 3.106v2.33h-2.33a.777.777 0 0 0 0 1.553h2.33v6.175a8.54 8.54 0 1 1 1.553 0Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="25"
              fill="none"
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
        <div>inside div2</div>
        <div>inside div3</div>
      </div>
      <div>div2</div>
      <div>div3</div>
    </div>
  );
};

export default Footer;
