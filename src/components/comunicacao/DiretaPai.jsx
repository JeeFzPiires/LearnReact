import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome="Jeferson" idade={23} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Fernando" idade={17} nerd={false}></DiretaFilho>
        </div>
    )
}