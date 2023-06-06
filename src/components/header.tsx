import React from "react";
import "./style.css";

function Header({ title }: { title: string}) {
    return (
        <header>
            <h1>{title}</h1>
            <a href="/">Home</a>
        </header>
    );
}

export default Header;
