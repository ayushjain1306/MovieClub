import React, { useEffect } from "react";
import { Box, Typography, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import noimage from "../../no-image.png";

const NewBox = styled(Box)`
    width: 60%;
    text-align: center;

    @media screen and (max-width: 1100px){
        width: 100%;
    }
`

const Image = scStyled.img`
    width: 30%;
    border-radius: 5px;

    @media screen and (max-width: 1100px){
        width: 45%;
    }
`

const AnotherBox = styled(Box)`
    padding-top: 20px;
`

const HeadTypo = styled(Typography)`
    color: #620aa0;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`

const AnotherTypo = styled(Typography)`
    color: black;
    font-size: 15px;
    width: 80%;
    text-align: justify;
    margin-left: 10%;
    margin-right: 10%;
`

const FirstSection = ({ show }) => {
    useEffect(()=> {
        document.getElementById("summary").innerHTML = show.show.summary;
    }, []);

    return (
        <NewBox>
            <Image src={show.show.image? show.show.image.original: noimage} alt="original" />

            <AnotherBox>
                <HeadTypo>{show.show.name}</HeadTypo>
                <AnotherTypo id = "summary"></AnotherTypo>
            </AnotherBox>
        </NewBox>
    )
}

export default FirstSection;