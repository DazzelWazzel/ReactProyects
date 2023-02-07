import React from "react";
import ButtonPrimary from "./ButtonPrimary";

function Header(props){
    return(
        <>
            <ButtonPrimary label="Home"/>
            <br></br>
            <ButtonPrimary label="Contact"/>
        </>
    );
}

export default Header;