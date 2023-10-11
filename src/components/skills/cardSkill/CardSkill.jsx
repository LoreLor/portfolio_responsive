import React, { useEffect } from "react";
import VanillaTilt from 'vanilla-tilt';
import image from '../../../assets/images/react-trnsparente.png'
import s from "./CardSkill.module.css";

const CardSkill = ({ name }) => {

  useEffect(() => {
    const wrapper_card = document.querySelector('.wrapper_card')
    VanillaTilt.init(wrapper_card, {
      max:25,
      speed:400,
      glare:true, 
      "max-glare":0.5,
    })
  }, [])

    return (
      <div className={`wrapper_card ${s.wrapper_card}`}>
          <div className={s.card_content}>
              <figure>
                  <img src={image} alt={name} />
                  <figcaption>{name}hola</figcaption>
              </figure>
              <div className={s.bg}></div>
          </div>
      </div>
    );
};

export default CardSkill;
