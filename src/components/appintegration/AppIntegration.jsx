import React from "react";
import styles from "@/components/appintegration/appintegration.module.css";
import Image from "next/image";

const AppIntegration = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper_part}>
        <div className={styles.five}>05</div>
        <div className={styles.integration_container}>
          <span className={styles.integration_text}>App Integrations</span>
          <br />
          <span className={styles.commited_text}>
          We are committed to your Health

          </span>
        </div>
      </div>
      <div className={styles.bottom_part}>
        <div>
          <Image
            src="/Rectangle 18.png"
            alt=""
            height="551"
            width="671"
            className={styles.image}
          />
        </div>

        <div>
          <div className={styles.bottom_top}>
            <span className={styles.greenheading}>INTEGRATED </span>
            <span className={styles.orangeheading}>HEALTHCARE</span>
          </div>
          <div className={styles.management_text}>MANAGEMENT APPLICATION</div>

          {/* charm_tick-double.png */}
          <ul className={styles.list}>
            <li>
              <span className={styles.tick}>
            <Image
              src="/charm_tick-double.png"
              alt=""
              height="24"
              width="24"
            />
            </span>
              24x7 access to a trusted doctor online by video call, voice call,
              and live chat
            </li>
            <li>

            <span className={styles.tick}>
            <Image
              src="/charm_tick-double.png"
              alt=""
              height="24"
              width="24"
            />
            </span>
              Best doctors accessible from anywhere, any time, as many times as
              you need
            </li>
            <li>

            <span className={styles.tick}>
            <Image
              src="/charm_tick-double.png"
              alt=""
              height="24"
              width="24"
            />
            </span>
              Whole person care: preventive, promotive, curative and
              rehabilitative primary health care
            </li>
            <li>
            <span className={styles.tick}>
            <Image
              src="/charm_tick-double.png"
              alt=""
              height="24"
              width="24"
            />
            </span>
              Medical history in one place
              </li>
            <li>

            <span className={styles.tick}>
            <Image
              src="/charm_tick-double.png"
              alt=""
              height="24"
              width="24"
            />
            </span>
              Personalized health messaging and notifications
              </li>
            <li>
            <span className={styles.tick}>
            <Image
              src="/charm_tick-double.png"
              alt=""
              height="24"
              width="24"
            />
            </span>
              Healthcare services offered in both English and Urdu
              </li>
          </ul>
          <button className={styles.button2} >Download App</button>
        </div>
      </div>
    </div>
    
  );
};

export default AppIntegration;
