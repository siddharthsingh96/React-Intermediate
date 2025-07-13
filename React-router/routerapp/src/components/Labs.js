import React from "react";
import { useNavigate } from "react-router-dom";
const Labs=()=>{
    const navigate=useNavigate();
    function clickHandler(){
navigate("/about");
    }
    function BackHandler(){
        navigate(-1);
    }
    return(
        <div>
        <div>This is labs Page</div>
        <button onClick={clickHandler}> Move to about page</button>
        <button onClick={BackHandler}>GO BACK IN PREVIOUS PAGE</button>
        </div>
    )
}
export default Labs;