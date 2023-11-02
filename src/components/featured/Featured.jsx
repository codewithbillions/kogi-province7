import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
         Join us @ OPEN HEAVEN SANCTUARY Today!.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Matthew 28:19-20</h1>
          <p className={styles.postDesc}>
            “Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything that I have commanded you.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Featured;
