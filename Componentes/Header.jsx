import React from "react";
import Styles from "../Componentes_Styles/HeaderStyles.module.css";

function Header(params) {
    return(
    <header className={Styles.Header_Container} >


<div className={Styles.HeaderImage}>
<img src="https://tse4.mm.bing.net/th/id/OIP.bxEmtJCnIVC-Kl1bpxSfsAHaHa?rs=1&pid=ImgDetMain" alt="" />
<p>
    Eduardo Ferreras <br />
    <span>Junior Software Engineer</span>
</p>
</div>


<div className={Styles.DivAboutMe} >
<h3>About Me</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eveniet earum expedita unde magni culpa, ad, tenetur delectus sequi eligendi praesentium tempora repudiandae, laudantium iure cum fugit rem obcaecati animi!</p>
</div>


    </header>
)
}

export default Header;