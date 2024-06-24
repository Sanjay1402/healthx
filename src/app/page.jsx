import Image from "next/image";
import styles from "./page.module.css";
import AppBanner from "@/components/appbanner/appBanner";
import Values from "@/components/values/Values";
import ContactBanner from "@/components/contactbanner/ContactBanner";
import AppIntegration from "@/components/appintegration/AppIntegration";

export default function Home() {
  return (
    <div className={styles.test}>
      homepage
      <AppBanner />
      <Values />
      <ContactBanner />
      <AppIntegration />
    </div>
  );
}
