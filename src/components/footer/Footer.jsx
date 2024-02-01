import React from "react";
import {Typography, styled} from "@mui/material";
import { styled as scStyled } from "styled-components";

const Typo = styled(Typography)`
    color: #620aa0;
`

const Foot = scStyled.footer`
    height: 10vh;
    text-align: center;
    background-color: whitesmoke;
    padding-top: 1vh;
`

const Footer = () => {
    return (
        <Foot>
            <Typo>Created By Ayush Jain</Typo>
        </Foot>
    )
}

export default Footer;