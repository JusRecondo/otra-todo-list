import React from "react";
import ChangeBackgroundBtn from "../changeBackgroundBtn/ChangeBackgroundBtn";
import "./ChangeBackground.css";
import {
    setItemInLocalStorage,
    changeBodyClass,
} from "../../lib/utilities";
import { BG_OPTIONS } from "../../lib/constants";

const ChangeBackground = () => {

    const changeBg = (e) => {
        const bg = e.target.classList[1];

        changeBodyClass(bg);

        setItemInLocalStorage("bg", bg);
    };

    return (
        <section className="change-background-container">
            {BG_OPTIONS.map((option, index) => (
                <ChangeBackgroundBtn
                    className={option}
                    key={index}
                    changeBg={changeBg}
                />
            ))}
        </section>
    );
};

export default ChangeBackground;
