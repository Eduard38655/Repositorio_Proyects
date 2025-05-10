import React from "react";
import Styles from "../Componentes_Styles/Skills_Section.module.css";
function Skills_Section(params) {
    
    return(
    <div className={Styles.SkilsContainer} >
<h3>Skills & Technologies</h3>
<div className={Styles.DivContainer_SkillsInfo} >


{/*Skills JavaScript */}
  <div className={Styles.SkillsDiv} >
<div className={Styles.Main_Info_Skills} >
  
<img src="https://tse3.mm.bing.net/th/id/OIP.lw6gydXZSBalBxC7xBfhRQHaHO?rs=1&pid=ImgDetMain" alt="" />
<p>Javascript </p>

 <span>65%</span>

</div>
<div   className={Styles.DivRange}  >
<div style={{background:"yellow", width: "65%"} } >
<span>.</span>
</div>

  </div>
</div>
  


{/*Skills React */}
<div className={Styles.SkillsDiv} >
<div className={Styles.Main_Info_Skills} >
<img src="https://tse2.mm.bing.net/th/id/OIP.BsEcRjoFmgGhPAipGfG8JQHaIc?w=2194&h=2500&rs=1&pid=ImgDetMain" alt="" />
<p>React </p>
  
 <span>60%</span>
  
  
  </div>


  <div className={Styles.DivRange} >
<div style={{background:"#61DAFB", width: "60%"}}>
<span>.</span>
</div>

  </div>
</div>
  

  
{/*Skills CSS*/}
<div className={Styles.SkillsDiv} >

<div className={Styles.Main_Info_Skills} >
<img src="https://tse4.mm.bing.net/th/id/OIP.I4bEN1JWpGxj0yduPS4a5AHaHa?rs=1&pid=ImgDetMain" alt="" />

<p>CSS </p>
 <span>80%</span>



</div>

<div className={Styles.DivRange} >
<div  style={{background:"#9696fa ", width: "80%"}} >
<span>.</span>
</div>

  </div>
</div>
  





{/*Skills Node*/}
<div className={Styles.SkillsDiv} >

<div className={Styles.Main_Info_Skills} >
<img src="https://th.bing.com/th/id/OIP.T_ErTKsli7fr4TQyFBAHlwHaHa?rs=1&pid=ImgDetMain" alt="" />

<p>Express</p>

 <span>75%</span>

</div>


 <div className={Styles.DivRange} >
<div  style={{background:"green ", width: "75%"}}>
<span>.</span>
</div>

  </div>
</div>
  



{/*Skills SQL*/}
<div className={Styles.SkillsDiv} >

<div className={Styles.Main_Info_Skills} >
<img src="https://th.bing.com/th/id/R.be62728adf6233af914036d3d0ea0369?rik=BiFx07Y3u%2bWnKQ&pid=ImgRaw&r=0" alt="" />
<p>SQL Server </p>


 <span>60%</span>

</div>

<div className={Styles.DivRange} >
<div  style={{background:"navy", width: "60%"}} >
<span>.</span>
</div>

  </div>
</div>



{/*Skills C@*/}
<div className={Styles.SkillsDiv} >

<div className={Styles.Main_Info_Skills} >
<img src="https://th.bing.com/th/id/R.433ea40e8e55c248bb1874111e074142?rik=%2b57QU2lvCya%2b0A&pid=ImgRaw&r=0" alt="" />
<p>C# (.NET)</p>
 <span>40%</span>

</div>


<div className={Styles.DivRange} >
<div  style={{background:"purple", width: "40%"}} >
<span>.</span>
</div>

  </div>
</div>
  
  
</div>

    </div>
)
}

export default Skills_Section