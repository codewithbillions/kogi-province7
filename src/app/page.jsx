import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Hero from "@/components/herosection/HeroSection";
import Youtube from "@/components/youtube/Youtube";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Hero />
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page}/>
      </div>
      <Youtube />
    </div>
  );
}
