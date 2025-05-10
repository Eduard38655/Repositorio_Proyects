import React, { useState } from "react";
import Email_Contact from "../ContactInfo/Email_Contact.jsx";

function button_Show({Activate}) {
const [showEmailInputs, setShowEmailInputs] = useState(false);

    function Show_Personal_Details(params) {
        alert("d")
        setShowEmailInputs(true)

    }
    return(
    <>
     <button onClick={Show_Personal_Details}  >
    <i className="fa-solid fa-envelope"></i>
    </button>
    <div>
    <Email_Contact Activate={showEmailInputs} />

    </div>
    </>

)
}


export default button_Show;