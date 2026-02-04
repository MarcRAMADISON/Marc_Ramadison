import Image from "next/image";
import styles from "./presentation.module.css";
import Animation from "../animation/page";
import { offres } from "@/app/utils";

function Presentation({ isLandingPage = false }) {
  return (
    <div className={styles.container} id="about">
      {isLandingPage ? (
        <Animation animation="fadeInRight">
          <div className={styles.header}>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              {[...new Array(1)].map((n, index) => {
                return (
                  <Image
                    key={index}
                    alt="star"
                    src="/assets/star.png"
                    width={20}
                    height={20}
                  />
                );
              })}
            </div>
            <h3 className={styles.label}>Offre</h3>
            <h2 className={styles.offre}>
              {offres.find((o) => o.offre === "Lancement").offre}
            </h2>
          </div>
          <div className={styles.bodyCard}>
            <h3 className={styles.price}>
              {offres.find((o) => o.offre === "Lancement").price}€
            </h3>
            {offres
              .find((o) => o.offre === "Lancement")
              .descriptions.map((description, index) => {
                return (
                  <h3 key={index} className={styles.description}>
                    {description}
                  </h3>
                );
              })}
            <h3 className={styles.info}>
              💡 Idéal pour professionnaliser votre image, attirer vos clients
              cibles et automatiser les premières prises de contact.
            </h3>
            <div className={styles.button}>Réserver votre formule</div>
          </div>
        </Animation>
      ) : (
        <Animation animation="fadeInRight">
          <div className={styles.imageContainer}>
            <Image
              src="/assets/team_illustration.png"
              alt="team illustration"
              layout="fill"
              objectFit="contain"
              objectPosition="90% 0%"
            />
          </div>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'15px'}}>
            <h2 className={styles.titleAvis}></h2>
            <div></div>
          </div>
        </Animation>
      )}
      <Animation className={styles.textContainer} animation="fadeInLeft">
        <h1 className={styles.title}>
          {" "}
          A propos de <span style={{ color: "#ff914d" }}>Marc RAMADISON</span>
        </h1>
        <h2 className={styles.subTitle}>
          Expert en développement web depuis plus de quatre (4) ans d'expérience
          professionnelle.
          <span style={{ fontWeight: "bold" }}>
            👉 Je transforme votre présence digitale en véritable machine à
            vendre
          </span>
          , grâce à des sites web performants et optimisés SEO, une
          communication stratégique et des actions marketing ciblées. Ma mission
          : bâtir une image forte, authentique et rentable pour votre marque. De
          la conception à la conversion, nous vous accompagnons de A à Z.
          Objectif : visibilité, impact et résultats concrets.
        </h2>
        <div className={styles.containerSlogan}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.iconContainer}>
              <Image
                src="/assets/icon1.png"
                alt="icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className={styles.slogan}>Innovation</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.iconContainer}>
              <Image
                src="/assets/icon2.png"
                alt="icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className={styles.slogan}>Engagement</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.iconContainer}>
              <Image
                src="/assets/icon3.png"
                alt="icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className={styles.slogan}>Performance</h3>
          </div>
        </div>
      </Animation>
    </div>
  );
}

export default Presentation;
