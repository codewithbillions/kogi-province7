import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className={styles.logoText}>RCCG Kogi Province 7</h1>
        </div>
        <p className={styles.desc}>
        Open Heavens Sanctuary, Isanlu Makutu
        </p>
        <div className={styles.social}>
      <Link href="/https://www.facebook.com/groups/2104676666546749/?ref=share" >
        <Image src="/facebook.png" alt="facebook" width={18} height={18} />
      </Link>
        <Link href="https://www.instagram.com/rccg.kogi.province7">
          <Image src="/instagram.png" alt="instagram" width={18} height={18} />
        </Link>
        <Link href="https://youtube.com/@RCCGKOGIPROVINCE7?si=IZj2Ghx-agQp_Z5K">
          <Image src="/youtube.png" alt="youtube" width={18} height={18} />
        </Link>
        <Link href="/">
          <Image src="/WhatsApp.png" alt="whatsapp" width={18} height={18} />
        </Link>
      </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Post</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Prayer</Link>
          <Link href="/">Announcement</Link>
          <Link href="/">Evangelism</Link>
          <Link href="/">Programme</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://www.facebook.com/groups/2104676666546749/?ref=share">Facebook</Link>
          <Link href="https://www.instagram.com/rccg.kogi.province7">Instagram</Link>
          <Link href="https://youtube.com/@RCCGKOGIPROVINCE7?si=IZj2Ghx-agQp_Z5K">Youtube</Link>
          <Link href="/">WhatsApp</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
