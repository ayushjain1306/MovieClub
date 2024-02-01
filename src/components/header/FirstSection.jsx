import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import logo from "./images/logo.png";

const NewBox = styled(Box)`
    width: 40%;
    display: flex;
    align-items: center;
    padding-left: 40px;

    @media screen and (max-width: 1100px){
        padding-left:5px;
        width: 25%;
    }
`

const Image = scStyled.img`

`

const Typo = styled(Typography)`
    font-size: 19px;
    margin-left: 10px;

    @media screen and (max-width: 1100px){
        margin-left: 3px;
        font-size: 15px;
    }
`

const FirstSection = () => {
    return (
        <NewBox>
            <Image src={logo} alt="Hlogo" />
            <Typo>MovieClub</Typo>
        </NewBox>
    )
}

export default FirstSection;