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
          <div></div>
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
