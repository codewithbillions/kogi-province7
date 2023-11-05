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
        Open Heavens Mega Parish, Isanlu Makutu
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
          <Image src="/WhatsApp.png" alt="" width={18} height={18} />
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
          <Link href="/posts">Prayer</Link>
          <Link href="/posts">Announcement</Link>
          <Link href="/posts">Evangelism</Link>
          <Link href="/posts">Programme</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/https://www.facebook.com/groups/2104676666546749/?ref=share">Facebook</Link>
          <Link href="/https://www.instagram.com/rccg.kogi.province7">Instagram</Link>
          <Link href="/https://youtube.com/@RCCGKOGIPROVINCE7?si=IZj2Ghx-agQp_Z5K">Youtube</Link>
          <Link href="/">WhatsApp</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
