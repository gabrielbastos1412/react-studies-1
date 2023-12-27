import React, { ReactNode } from "react";
import style from "./Button.module.scss"

interface Props {
    type?:  "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

function Button({type, onClick, children}:Props){
    return(
        <button 
            onClick={onClick} 
            type={type} 
            className={style.botao}>
            {children}
        </button>
    )
}

export default Button;