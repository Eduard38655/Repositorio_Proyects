import React, { useState } from "react";
import Styles from "../Componentes_Styles/Contact.module.css";

function Email_Contact({ Activate }) {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [error_data, seterror_data] = useState(false);
  const [valid_data, setvalid_data] = useState(false);

  async function Send_Data(event) {
   event.preventDefault();

    if (!FullName || !Email || !Message) {
      seterror_data(true);
      setvalid_data(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/DatosSend/Personal", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // corregido el nombre del header
        body: JSON.stringify({ FullName, Email, Message })
      });

      const data = await response.json();
      

      if (data.valid) {
        setvalid_data(true);
        seterror_data(false);
        // Limpiar campos si deseas
        setFullName("");
        setEmail("");
        setMessage("");
      } else {
        seterror_data(true);
        setvalid_data(false);
      }
    } catch (error) {
      console.error(error);
      seterror_data(true);
      setvalid_data(false);
    }
  }

  return (
    <>
      {Activate && (
        <div className={Styles.Div_Container_Contact_Inputs}>
          <div className={Styles.Div_Container_Contact_Inputs_Div}>
            <div>
              {error_data && <i style={{ color: "red" }} className="fa-solid fa-circle-xmark"></i>}
              {valid_data && <i style={{ color: "green" }} className="fa-solid fa-circle-check"></i>}
              <input
                id="FullName"
                type="text"
                value={FullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Tu nombre"
                required
              />
            </div>

            <div>
              {error_data && <i style={{ color: "red" }} className="fa-solid fa-circle-xmark"></i>}
              {valid_data && <i style={{ color: "green" }} className="fa-solid fa-circle-check"></i>}
              <input
                id="Email"
                type="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo"
                required
              />
            </div>

            <div>
              {error_data && <i style={{ color: "red" }} className="fa-solid fa-circle-xmark"></i>}
              {valid_data && <i style={{ color: "green" }} className="fa-solid fa-circle-check"></i>}
              <textarea
                id="Message"
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tu mensaje"
                required
              />
            </div>

            <button type="submit"  onSubmit={Send_Data}>Send Message</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Email_Contact;
