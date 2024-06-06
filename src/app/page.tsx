import Image from "next/image";
import Link from "next/link";
import image from "../assets/hero.jpg";
import style from "./page.module.scss";

export default function Home() {
  return (
    <main className={style.container}>
      <section className={style.section}>
        <div className={style.headerSection}>
          <h1 className={style.title}>Some cool title</h1>
          <p className={style.subtitle}>
            We provide only the most good exclusive and hight quality products
          </p>

          <Link href="/workers">
            <p className={style.button}>See our developers</p>
          </Link>
        </div>

        <div className={style.imageSection}>
          <div className={style.imageContainer}>
            <Image
              src={image}
              className={style.image}
              priority
              alt="hero"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
