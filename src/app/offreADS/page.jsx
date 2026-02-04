'use client'

import MenuBar from "../components/menubar/page";
import styles from "./offreADS.module.css";
import Image from "next/image";
import Animation from "../components/animation/page";
import { useState } from "react";
import Modal from "../components/Modal/page";
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";

function OffreADS() {
  const [openModal, setOpenModal] = useState(false);
  const [currentOffre, setCurrentOffre] = useState();
  const [values, setValues] = useState({
    fullName: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e, offre) => {
    e.preventDefault();
    setOpenModal(true);
    setCurrentOffre(offre);
  };

  const handleSend = () => {
    setIsLoading(true);
    emailjs
      .send(
        "service_1tv9t1n",
        "template_wjd69eb",
        { ...values, offre: "Publicité ADS" },
        "IynlGBvGgPs3k6uxc"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Devis envoyé!",
            text: "Votre réservation a été envoyé, on reviendra vers vous le plus tôt possible",
            icon: "success",
          });
          setValues({
            fullName: "",
            email: "",
          });
          setIsLoading(false);
          setOpenModal(false);
        },
        (error) => {
          Swal.fire({
            title: "Devis non envoyé!",
            text: "Une erreur est survenu lors de l'envoie de votre réservation",
            icon: "error",
          });
          setIsLoading(false);
        }
      );
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const checkValidation = values?.fullName && values?.email;

  return (
    <>
      <MenuBar redirect={true} />
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <h1 className={styles.titleModal}>
          Réservation offre <span className={styles.offreName}>{currentOffre}</span>
        </h1>
        <div className={styles.block1}>
          <div className={styles.inputLine}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className={styles.label}>Nom complet :</h3>
              <input
                className={styles.inputField}
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.inputLine}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className={styles.label}>Adresse E-mail :</h3>
              <input
                className={styles.inputField}
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {(checkValidation || isLoading) && (
          <div className={styles.bouton} onClick={handleSend}>
            Envoyer
          </div>
        )}
      </Modal>
      <div className={styles.container}>
        <Animation animation="fadeInRight" className={styles.textContrainer}>
          <h1 className={styles.title}>
            🧠 Publicité Digitale Ciblée Google Ads – Facebook & Instagram Ads
            (Meta)
          </h1>
          <h2 className={styles.subTitle}>
            Objectif : Booster votre visibilité & vos conversions
          </h2>
          <h2 className={styles.subTitle}>
            Nous aidons les entreprises à atteindre leurs clients idéaux grâce à
            des campagnes publicitaires stratégiques et rentables sur Google,
            Facebook et Instagram.
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.detailBlock}>
              <Image
                src="/assets/hand.png"
                width={40}
                height={30}
                alt="persons icon"
              />
              <div>
                <h3 className={styles.detailTitle}>Nos services incluent :</h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.dote}></div>
                  <h3 className={styles.detailSubTitle}>
                    Audit & stratégie personnalisée :{" "}
                  </h3>
                </div>
                <h3 className={styles.detailDescription}>
                  Rédaction de textes impactants, choix des visuels, ciblage
                  précis, mots-clés performants.
                </h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.dote}></div>
                  <h3 className={styles.detailSubTitle}>
                    {" "}
                    Optimisation continue :
                  </h3>
                </div>
                <h3 className={styles.detailDescription}>
                  Suivi des performances, ajustements réguliers et A/B testing
                  pour maximiser les résultats et réduire le coût par clic
                  (CPC).
                </h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.dote}></div>
                  <h3 className={styles.detailSubTitle}>
                    {" "}
                    Rapports clairs & transparents :
                  </h3>
                </div>
                <h3 className={styles.detailDescription}>
                  Accès à des tableaux de bord simples pour suivre vos résultats
                  et la rentabilité de vos campagnes.
                </h3>
              </div>
            </div>
            <div className={styles.detailBlock}>
              <Image
                src="/assets/personsIcon.png"
                width={40}
                height={30}
                alt="hande icon"
              />
              <div>
                <h3 className={styles.detailTitle}>
                  {" "}
                  À qui s’adresse ce service ?
                </h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    className={styles.dote}
                    style={{ backgroundColor: "#000" }}
                  ></div>
                  <h3 className={styles.detailDescription}>
                    Entrepreneurs et commerçants
                  </h3>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    className={styles.dote}
                    style={{ backgroundColor: "#000" }}
                  ></div>
                  <h3 className={styles.detailDescription}>
                    {" "}
                    Coachs, thérapeutes, professionnels du bien-être
                  </h3>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    className={styles.dote}
                    style={{ backgroundColor: "#000" }}
                  ></div>
                  <h3 className={styles.detailDescription}>
                    {" "}
                    Restaurants, boutiques, services locaux
                  </h3>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    className={styles.dote}
                    style={{ backgroundColor: "#000" }}
                  ></div>
                  <h3 className={styles.detailDescription}>
                    {" "}
                    E-commerces et prestataires de service
                  </h3>
                </div>
              </div>
            </div>
            <div
              className={styles.button}
              onClick={(e) => handleClick(e, "ADS (Meta & Google)")}
            >
              Réserver maintenant
            </div>
          </div>
        </Animation>
        <Animation animation="fadeInLeft" className={styles.imageContainer}>
          <Image
            src="/assets/ads_illustration.png"
            alt="services illustration"
            layout="fill"
            objectFit="contain"
            objectPosition="0% 50%"
          />
        </Animation>
      </div>
    </>
  );
}

export default OffreADS;
