"use client";

import { offres } from "@/app/utils";
import styles from "./offres.module.css";
import Image from "next/image";
import Animation from "../animation/page";
import { useState } from "react";
import Modal from "../Modal/page";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

function Offres() {
  const [openModal, setOpenModal] = useState(false);
  const [currentOffre, setCurrentOffre] = useState();
  const [values, setValues] = useState({
    fullName: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = (e, offre) => {
    e.preventDefault();
    setOpenModal(true);
    setCurrentOffre(offre);
  };
  const handleSend = () => {
    setIsLoading(true)
    emailjs
      .send(
        "service_1tv9t1n",
        "template_wjd69eb",
        { ...values, offre: currentOffre?.offre },
        "IynlGBvGgPs3k6uxc"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Devis envoyé!",
            text: "Votre devis a été envoyé, on reviendra vers vous le plus tôt possible",
            icon: "success",
          });
          setValues({
            fullName: "",
            email: "",
          });
          setIsLoading(false);
          setOpenModal(false)
        },
        (error) => {
          Swal.fire({
            title: "Devis non envoyé!",
            text: "Une erreur est survenu lors de l'envoie de votre devis",
            icon: "error",
          });
          setIsLoading(false);
        }
      );
  };
  const checkValidation= values?.fullName && values?.email

  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <h1 className={styles.titleModal}>
          Réservation offre {currentOffre?.offre}
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
        {(checkValidation ||
          isLoading) && (
            <div className={styles.bouton} onClick={handleSend}>
              Envoyer
            </div>
          )}
      </Modal>
      <div className={styles.container} id="offres">
        <h1 className={styles.title}>Mes offres</h1>
        <h3 className={styles.subTitle}>
          Je lance des <span style={{fontWeight:'bold'}}>packs sur-mesure pour les TPE / PME</span>, et tout professionnel souhaitant gagner en
          visibilité, en crédibilité et en clients. Profitez de cette offre
          limitée pour poser les bases d’une communication puissante… <span style={{fontWeight:'bold'}}>sans
          exploser votre budget.</span>
        </h3>
        <div className={styles.cardContainer}>
          {offres.map((offre, index) => {
            let nbStar = 0;
            if (offre.offre === "Lancement") {
              nbStar = 1;
            } else if (offre.offre === "Startup") {
              nbStar = 2;
            } else {
              nbStar = 3;
            }

            return (
              <Animation animation="fadeInUp" key={index}>
                <div className={styles.header}>
                  <div style={{ display: "flex", marginBottom: "10px" }}>
                    {[...new Array(nbStar)].map((n, index) => {
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
                  <h2 className={styles.offre}>{offre.offre}</h2>
                </div>
                <div className={styles.bodyCard}>
                  <h3 className={styles.price}>{offre.price}€ / Mois</h3>
                  {offre.descriptions.map((description, index) => {
                    return (
                      <h3 key={index} className={styles.description}>
                        {description}
                      </h3>
                    );
                  })}
                  <h3 className={styles.info}>💡 {offre.info}</h3>
                  <div
                    className={styles.button}
                    onClick={(e) => handleClick(e, offre)}
                  >
                    Réserver votre offre
                  </div>
                </div>
                <div className={styles.onglet1}></div>
              </Animation>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Offres;
