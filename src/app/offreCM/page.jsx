'use client'

import { offresCM } from "@/app/utils";
import styles from "./offreCM.module.css";
import Image from "next/image";
import MenuBar from "../components/menubar/page";
import Animation from "../components/animation/page";
import { useState } from "react";
import Modal from "../components/Modal/page";
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";

function OffreCM() {
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
        { ...values, offre: "Community management" },
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
        <h1 className={styles.titleModal}>Réservation offre <span className={styles.offreName}>{currentOffre}</span></h1>
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
        <div className={styles.blockMain1}>
          <h1 className={styles.title}>
            Nos meilleurs services de community manager
          </h1>
          <h2 className={styles.subTitle}>
            Pour un tarif spécial de 300€ au lieu de 400€ par mois, bénéficiez
            d’une gestion complète de vos réseaux sociaux au choix avec :
          </h2>
          <Animation animation="fadeInTop" className={styles.offres}>
            <div className={styles.offre}>
              {offresCM.map((offre, index) => {
                return (
                  <div key={index} className={styles.offreContainer}>
                    <h2 className={styles.offreTitle}>{offre.title}</h2>
                    {offre.offres.map((o, index) => {
                      return (
                        <div
                          key={index}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <div className={styles.dote}></div>
                          <span className={styles.offreDesc}>{o}</span>
                        </div>
                      );
                    })}
                    <div className={styles.engagement}>
                      * Offre sans engagement, vous pouvez arrêter à tout moment
                    </div>
                  </div>
                );
              })}
            </div>
          </Animation>
          <div
            className={styles.buttonReserver}
            onClick={(e) => handleClick(e, 'Community management')}
          >
            Réserver maintenant
          </div>
        </div>
        <Animation animation="fadeInLeft" className={styles.imageContainer}>
          <Image
            src="/assets/illustrationCM.png"
            alt="illustration CM"
            layout="fill"
            objectFit="contain"
            objectPosition="right top"
          />
        </Animation>
      </div>
    </>
  );
}

export default OffreCM;
