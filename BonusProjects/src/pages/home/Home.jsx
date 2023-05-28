import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
function Home() {
  const [data, setData] = useState({});
  useEffect(() => {
    const dataFromLocal = localStorage.getItem("detail");
    if (dataFromLocal) {
      setData(JSON.parse(dataFromLocal))
    }
    else{
      setData({
        FirstName:"",
        LastName:""
      })
    }
   
  }, []);
  const handleClick=()=>{
     localStorage.removeItem("detail")
  }
  return (
    <div className={style.container}>
      <div>
        <h3>welcome :-{`${data.FirstName} ${data.LastName}`}</h3>
      </div>

      <div>
        <button 
        onClick={handleClick}
        className={style.btn}>Clear</button>
      </div>
    </div>
  );
}

export default Home;
