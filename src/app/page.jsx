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

export default function Home() {
  return (
    <div className={styles.test}>
      homepage
      <AppBanner />
      <Values />
      <ContactBanner />
      <AppIntegration />
      {/* Frequently Asked Component */}
      <div className="container">
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
        <div className="grid grid-cols-2 gap-5 my-10">
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
      </div>
    </div>
  );
}
