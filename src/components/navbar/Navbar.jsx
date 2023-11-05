import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
      <Link href="/https://www.facebook.com/groups/2104676666546749/?ref=share" >
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
      </Link>
        <Link href="https://www.instagram.com/rccg.kogi.province7">
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </Link>
        <Link href="https://youtube.com/@RCCGKOGIPROVINCE7?si=IZj2Ghx-agQp_Z5K">
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/WhatsApp.png" alt="whatsapp" width={24} height={24} />
        </Link>
      </div>
      <div className={styles.logo}><Image src="/wlogo.png" alt="logo" width={200} height={60} />
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
