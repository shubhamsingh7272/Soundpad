import React from "react";

export default function Pad(props) {
    function playSound() {
        const audio = new Audio(props.sound);
        console.log(props.sound)
        audio.play().then(() => {
            console.log("Audio played successfully");
        }).catch(error => {
            console.error("Error playing audio:", error);
        });
        alert("ss")

    }

    return (
        <button
            style={{ backgroundColor: props.color }}
            className={props.on ? "on" : "off"}
            onClick={() => {
                props.toggle(props.id);
                playSound();
            }}
        >
            {props.id}
        </button>
    );
}
