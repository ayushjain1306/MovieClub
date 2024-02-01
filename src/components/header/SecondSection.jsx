import React from "react";
import { Box, Typography, styled } from "@mui/material";

const NewBox = styled(Box)`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1100px){
        width: 75%
    }
`

const LinkBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Typo = styled(Typography)`
    color: #620aa0;
    margin: 0px 30px;
    font-weight: bold;
    cursor: pointer;

    @media screen and (max-width: 1100px){
        margin: 0px 5px;
        font-weight: normal;
    }
`



const SecondSection = () => {
    return (
        <NewBox>
            <LinkBox>
                <Typo>Home</Typo>
                <Typo>About</Typo>
                <Typo>Services</Typo>
                <Typo>Contact Us</Typo>
            </LinkBox>
        </NewBox>
    )
}

export default SecondSection;