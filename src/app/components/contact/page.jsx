"use client";

import Image from "next/image";
import styles from "./contact.module.css";
import Animation from "../animation/page";
import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

function Contact() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isLoading,setIsLoading]=useState(false)

  const handleChange = (e) => {
    e.preventDefault();

    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSend = () => {
    setIsLoading(true)
    emailjs
      .send("service_4alwvji", "template_tzdxihv", values, "PPZf-H8bAQdM8vymv")
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
            message: "",
          });
          setIsLoading(false)
        },
        (error) => {
          Swal.fire({
            title: "Devis non envoyé!",
            text: "Une erreur est survenu lors de l'envoie de votre devis",
            icon: "error",
          });
          setIsLoading(false)
        }
      );
  };

  const checkValidation =
    values.fullName &&
    values.email &&
    values.message

  return (
    <div className={styles.container} id="contact">
      <Animation animation="fadeInRight" className={styles.contactForm}>
        <h3 className={styles.titleContact}>Demander un devis</h3>
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
       
        <div className={styles.block1Message} style={{ marginTop: "17px" }}>
          <div className={styles.inputLine}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className={styles.label}>
                Message : description de votre demande
              </h3>
              <textarea
                rows={10}
                className={styles.inputAreaField}
                name="message"
                value={values.message}
                onChange={handleChange}
              />
            </div>
          </div>
          {checkValidation && !isLoading ? (
            <div className={styles.bouton} onClick={handleSend}>
              Envoyer
            </div>
          ) : (
            <></>
          )}
        </div>
      </Animation>
      <Animation animation="fadeInLeft" className={styles.contact}>
        <h2 className={styles.title}>Me contacter</h2>
        <h3 className={styles.subtitle}>
          Vous avez un projet en tête ? Besoin d’un accompagnement sur-mesure ou
          d’une estimation claire ? Je suis à votre écoute pour vous
          proposer une solution adaptée à vos besoins.
        </h3>
        <h3 className={styles.subtitle} style={{ fontWeight: "bold" }}>
          Remplissez le formulaire, je m’occupe du reste.
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginTop: "60px",
          }}
        >
          <Image
            src="/assets/mail.png"
            width={40}
            height={40}
            alt="call icon"
            style={{ marginRight: "20px" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3 className={styles.contactTitle}>E-mail</h3>
            <h3 className={styles.contactSubTitle}>
              marcramadison006@gmail.com
            </h3>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginTop: "30px",
          }}
        >
          <Image
            src="/assets/call.png"
            width={40}
            height={40}
            alt="call icon"
            style={{ marginRight: "20px" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3 className={styles.contactTitle}>Téléphone</h3>
            <h3 className={styles.contactSubTitle}>+261 34 54 653 16</h3>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "60px" }}>
          <Image
            src="/assets/linkedin.png"
            width={40}
            height={40}
            alt="call icon"
            style={{ marginRight: "40px" }}
          />
        </div>
      </Animation>
    </div>
  );
}

export default Contact;
