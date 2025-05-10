import React from "react";
import Contact_Details from "../Componentes/Contact.jsx";
import Header from "../Componentes/Header.jsx";
import Projects from "../Componentes/Projects.jsx";
import Skills_Section from "../Componentes/Skills_Section.jsx";
import Styles from "../Componentes_Styles/MainPage.module.css";


function MainPage(params) {
    return(<article  className={Styles.MainPage_Container}>

    <Header />
    <Skills_Section/>
    <Projects/>
    <Contact_Details/>
   
    </article>)
}

export default MainPage;