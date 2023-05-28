import React, { useState } from "react";
import style from "./Task.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineModeEditOutline } from "react-icons/md";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
function Task() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };
  const handleDel = (ind) => {
    const newTodo = todos.filter((ele, index) => index !== ind);
    setTodos([...newTodo]);
  };
  const handleUpdate=(e,ind)=>{
    e.preventDefault()
   
   alert(ind)
  }
  return (
    <div className={style.container}>
      <form className={style.inp} onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button className={style.btn} type="submit">
          Add
        </button>
      </form>

      {todos.map((ele, ind) => {
        return (
          <div key={ind} className={style.mapCont}>
            <div className={style.mapCont1}>{ele}</div>
            <div className={style.mapCont2}>
              <AiOutlineDelete onClick={() => handleDel(ind)} />
              <MdOutlineModeEditOutline  onClick={handleClick}/>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <form  onSubmit={(e)=>handleUpdate(e,ind)} >
                   <div>
                     <input/>
                  </div>
                  <button type="submit">Submit</button>
               </form>
              </Popover>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Task;
