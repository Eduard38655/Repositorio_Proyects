import { useState } from "react";
import Styles from "../Componentes_Styles/Contact.module.css";
import Email_Contact from "../ContactInfo/Email_Contact.jsx";
import Curiculum_Contact from "../Curiculum/Curiculum.jsx";

function Contact_Details(params) {
  const [showEmailInputs, setShowEmailInputs] = useState(false);
  const [Activate, setActivate] = useState(false);
    return(
    <div className={Styles.DivContainer_Contact}>
    <h3>Get in Touch</h3>
    


    <div className={Styles.DivContainer_Contact_Icons}>
        
          
    <a
  href="https://github.com/Eduard38655"
  target="_blank"
  rel="noopener noreferrer"
>
  <button>
    <i className="fa-brands fa-github"></i>
  </button>
</a>



<a
  href="https://www.linkedin.com/in/eduardo-ferreras-de-los-santos-13632925a/"
  target="_blank"
  rel="noopener noreferrer"
>
  <button>
  <i className="fa-brands fa-linkedin"></i>
  </button>
</a>
 
<button onClick={()=>setActivate(true)}  >
    <i className="fa-solid fa-envelope"></i>
    </button>

<Curiculum_Contact/>

        </div>
 
  
 <Email_Contact Activate={Activate} />
  
    </div>

 
 

)
}

export default Contact_Details;