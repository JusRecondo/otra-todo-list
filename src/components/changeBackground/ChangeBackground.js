import React from "react";
import ChangeBackgroundBtn from "../changeBackgroundBtn.js/ChangeBackgroundBtn";
import "./ChangeBackground.css";
import {
    setItemInLocalStorage,
    changeBodyClass,
} from "../../modules/utilities";

const ChangeBackground = () => {
    const bgOptions = ["bg-1", "bg-2", "bg-3", "bg-4", "bg-5"];

    const changeBg = (e) => {
        const bg = e.target.classList[1];

        changeBodyClass(bg);

        setItemInLocalStorage("bg", bg);
    };

    return (
        <section className="change-background-container">
            {bgOptions.map((option, index) => (
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
