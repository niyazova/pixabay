import React from "react";
import Button from "./Buttons";

export default function Buttons(props) {
    const {color, title = "Download"} = props;
    return(
       <div>
            <button className={`btn btn-${color} rounded-pill px-3`}>
                {title}
            </button>
            <Button color= "primary" title="login"/>
       </div>
    )
}
