import React, { useRef, useEffect } from "react";
import s from "./CardSkill.module.css";
import VanillaTilt from "vanilla-tilt";

const CardSkill = ({ name, image }) => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (wrapperRef.current) {
            VanillaTilt.init(wrapperRef.current, {
                max: 25,
                speed: 400,
                startX: -10,
                startY: -8,
                glare: true,
                "max-glare": 0.5,
            });

            return () => {
                if (wrapperRef.current.VanillaTilt) {
                    wrapperRef.current.VanillaTilt.destroy();
                }
            };
        }
    }, [name, image]);

    return (
        <div className={`wrapper ${s.wrapper_card}`} ref={wrapperRef} key={name}>
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
