"use client";

import { useState } from "react";
import Modal from "../components/Modal/page";
import Animation from "../components/animation/page";
import MenuBar from "../components/menubar/page";
import styles from "./offreIA.module.css";
import Image from "next/image";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

function OffreIA() {
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
        { ...values, offre: "Automatisation / Agent IA" },
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
            text: "Une erreur est survenu lors de l'envoie de votre réversation",
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
          Réservation offre{" "}
          <span className={styles.offreName}>{currentOffre}</span>
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
            Automatisation & Agents IA : Automatiser vos processus manuels et
            répétitifs
          </h1>
          <h2 className={styles.priceTitle}>
            À partir de 100 €, selon vos demandes et vos besoins
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 className={styles.subTitle}>
              <div className={styles.dote}></div>Automatisation des processus
            </h2>
            <h3 className={styles.description}>
              je transforme vos actions manuelles en système fiables et
              continus. Je peux automatiser l’envoi d’emails, le traitement de
              formulaires, la synchronisation entre vos outils (CRM, ERP, Google
              Sheets, Notion), la génération automatique de documents comme les
              factures ou rapports, la qualification et le routage des leads, la
              mise à jour des bases de données, et planifier des tâches
              récurrentes.{" "}
              <span style={{ fontWeight: "bold" }}>
                Résultat : gain de temps, réduction des erreurs et exécution
                24/7 sans interruption.
              </span>
            </h3>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "30px",
            }}
          >
            <h2 className={styles.subTitle}>
              <div className={styles.dote}></div>Agents IA intelligents
            </h2>
            <h3 className={styles.description}>
              je conçois des agents capables de comprendre, analyser et agir sur
              vos données.{" "}
              <span style={{ fontWeight: "bold" }}>
                Ces agents peuvent gérer le support client, analyser et enrichir
                vos données, générer automatiquement des contenus, prendre des
                décisions basées sur des règles et l’IA, ou interagir
                directement avec vos APIs et bases de données.
              </span>{" "}
              Vous pouvez ainsi disposer d’assistants IA connectés à votre CRM,
              d’agents de tri automatique des demandes, ou d’outils de veille et
              d’alerte intelligents.
            </h3>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "30px",
            }}
          >
            <h2 className={styles.subTitle}>
              <div className={styles.dote}></div>Webhooks et intégrations n8n
            </h2>
            <h3 className={styles.description}>
              je mets en place des webhooks sécurisés pour connecter vos
              systèmes en temps réel. Cela inclut la réception et l’envoi de
              données, le déclenchement automatique de workflows, la
              transformation et validation des informations reçues, la gestion
              des erreurs et la connexion de vos applications entre elles. <span style={{fontWeight:"bold"}}>Par
              exemple, un formulaire sur votre site peut déclencher l’envoi
              d’emails, la mise à jour de votre CRM et l’envoi de notifications
              Slack ou WhatsApp sans intervention humaine.</span>
            </h3>
          </div>
          <div
            className={styles.button}
            onClick={(e) =>
              handleClick(e, "Automatisation / Agent IA / Webhook")
            }
          >
            Réserver maintenant
          </div>
        </Animation>
        <Animation animation="fadeInLeft" className={styles.imageContainer}>
          <Image
            src="/assets/IA_image.png"
            alt="services illustration"
            layout="fill"
            objectFit="contain"
            objectPosition="0% 30%"
          />
        </Animation>
      </div>
    </>
  );
}

export default OffreIA;
