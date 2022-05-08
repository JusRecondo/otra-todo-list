import React from "react";
import "./ChangeBackgroundBtn.css";

const ChangeBackgroundBtn = ({ className, changeBg }) => {
    return (
        <button
            className={`change-background-btn ${className}`}
            onClick={changeBg}
        ></button>
    );
};

export default ChangeBackgroundBtn;
