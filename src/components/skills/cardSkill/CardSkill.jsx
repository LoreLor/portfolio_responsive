import React from "react";
import s from "./CardSkill.module.css";

const CardSkill = ({ name, image }) => {
    return (
        <div className={`wrapper ${s.wrapper_card}`} key={name}>
            <div className={s.card_content}>
                <figure>
                    <img src={image} alt={name} />
                    <figcaption><p>{name}</p></figcaption>
                </figure>
                <div className={s.bg}></div>
            </div>
        </div>
    );
};

export default CardSkill;
