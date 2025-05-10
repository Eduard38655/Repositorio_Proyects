import React from "react";
import Styles from "../Componentes_Styles/Proyects.module.css";
function Projects(params) {
    
    return(<div className={Styles.DivContainer_Projects}>
    <h3>Featured Projects</h3>

<div className={Styles.DivCards} >


<div className={Styles.cards}>
    
<img src="https://th.bing.com/th/id/R.13e4af1367608733ee81a8339c9c88f3?rik=Hcx0HTf9oQnIlA&pid=ImgRaw&r=0" alt="" />

<div className={Styles.TextCards}>  
<h6>E-Commerce Platform</h6>
<p>A full-stack e-commerce solution with React and Node.js</p>
</div>
<div className={Styles.DivCardsLenguages} >
    <span>React</span>
    <span>Node.js</span>
    <span>SQL Server</span>
</div>
</div>



<div className={Styles.cards}>
<img src="https://th.bing.com/th/id/R.13e4af1367608733ee81a8339c9c88f3?rik=Hcx0HTf9oQnIlA&pid=ImgRaw&r=0" alt="" />
<div className={Styles.TextCards}>  
<h6>E-Commerce Platform</h6>
<p>A full-stack e-commerce solution with React and Node.js</p>
</div>
<div className={Styles.DivCardsLenguages} >
    <span>React</span>
    <span>Node.js</span>
    <span>SQL Server</span>
</div>
</div>






<div className={Styles.cards}>
<img src="https://th.bing.com/th/id/R.13e4af1367608733ee81a8339c9c88f3?rik=Hcx0HTf9oQnIlA&pid=ImgRaw&r=0" alt="" />

<div className={Styles.TextCards}>
<h6>E-Commer rce Platform</h6>
<p>A full-stack e-commerce solution with React and Node.js</p>

</div>
<div className={Styles.DivCardsLenguages} >
    <span>React</span>
    <span>Node.js</span>
    <span>SQL Server</span>
</div>
</div>



</div>
   
    </div>)
}

export default Projects