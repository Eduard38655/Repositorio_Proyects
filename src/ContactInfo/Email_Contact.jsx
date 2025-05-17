import React, { useState } from "react";
import Styles from "../Componentes_Styles/Contact.module.css";

function EmailContact({ activate }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendData = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !message) {
      setHasError(true);
      setIsSuccess(false);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/DatosSend/Personal",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ FullName: fullName, Email: email, Message: message }),
        }
      );

      const data = await response.json();

      if (response.ok && data.valid) {
        setIsSuccess(true);
        setHasError(false);
        setFullName("");
        setEmail("");
        setMessage("");
      } else {
        setHasError(true);
        setIsSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setHasError(true);
      setIsSuccess(false);
    }
  };

  if (!activate) return null;

  return (
    <div className={Styles.Div_Container_Contact_Inputs}>
      <form
        className={Styles.Div_Container_Contact_Inputs_Div}
        onSubmit={sendData}
      >
        <div>
          {hasError && <i className="fa-solid fa-circle-xmark" style={{ color: "red" }} />}
          {isSuccess && <i className="fa-solid fa-circle-check" style={{ color: "green" }} />}
          <input
            id="FullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Tu nombre"
            required
          />
        </div>

        <div>
          {hasError && <i className="fa-solid fa-circle-xmark" style={{ color: "red" }} />}
          {isSuccess && <i className="fa-solid fa-circle-check" style={{ color: "green" }} />}
          <input
            id="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo"
            required
          />
        </div>

        <div>
          {hasError && <i className="fa-solid fa-circle-xmark" style={{ color: "red" }} />}
          {isSuccess && <i className="fa-solid fa-circle-check" style={{ color: "green" }} />}
          <textarea
            id="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tu mensaje"
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default EmailContact;
