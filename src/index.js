import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import "./bansal.css"
import "./index.css";

ReactDOM.render(
  <>
    <div className="title">
      <h1>My 📖 Playlists!</h1>
    </div>
    <Cards name="React" color="#283593 " link="https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ" creator="Thapa Technical" />

    <Cards name="Rucursion" color="#C62828" link="https://www.youtube.com/playlist?list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY" creator="Aditya Verma" />

    <Cards name="Dynamic-Prog" color="#37474F" link="https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go" creator="Aditya Verma" />

    <Cards name="NodeJs" color="#43A047" link="https://www.youtube.com/playlist?list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8" creator="Thapa Technical" />

    <Cards name="Bit Manup." color="#e57373" link="https://www.youtube.com/playlist?list=PL2q4fbVm1Ik7ip1VkWwe5U_CEb93vw6Iu" creator="Code NCode" />

    <Cards name="Number Theory" color="#31394D" link="https://www.youtube.com/playlist?list=PL2q4fbVm1Ik4liHX78IRslXzUr8z5QxsG" creator="Code NCode" />

    <Cards name="Unacademy CP" color="#1976D2" link="https://unacademy.com/@healthyug" creator="Demoralizer" />
    
    <Cards name="My-Github" color="#000000" link="https://github.com/SinghAtithi" creator="Of-course Me!" />

  </>,
  document.getElementById("root")
);
