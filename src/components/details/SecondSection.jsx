import React, { useState } from "react";
import { Box, Typography, Link, Button, styled } from "@mui/material";
import DialogBox from "./DialogBox.jsx";

const NewBox = styled(Box)`
    width: 40%;

    @media screen and (max-width: 700px){
        width: 100%;
    }
`

const AnotherBox = styled(Box)`
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
`

const StyledBox = styled(Box)`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeadTypo = styled(Typography)`
    font-size: 25px;
    color: #620aa0;
    font-weight: bold;
    margin-bottom: 20px;
`

const FirstTypo = styled(Typography)`
    display: inline;
    color: #620aa0;
    font-weight: bold;
    font-size: 14px;
`

const SecondTypo = styled(Typography)`
    display: inline;
    font-size: 14px;
`

const NewLink = styled(Link)`
    text-decoration: none;
`

const NewButton = styled(Button)`
    width: 35%;
    background-color: #620aa0;
    font-weight: bold;

    &:hover {
        background-color: #620aa0;
        opacity: 0.9;
    }

    @media screen and (max-width: 1100px){
        margin-bottom: 20px;
    }
`

const SecondSection = ({ show }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    }

    return (
        <NewBox>
            <AnotherBox>
                <HeadTypo>Show Info</HeadTypo>
                <FirstTypo>Language</FirstTypo>: <SecondTypo>{show.show.language}</SecondTypo><br />
                <FirstTypo>Type</FirstTypo>: <SecondTypo>{show.show.type}</SecondTypo><br />
                <FirstTypo>Genres</FirstTypo>: <SecondTypo>{show.show.genres.join(' | ')}</SecondTypo><br />
                <FirstTypo>Status</FirstTypo>: <SecondTypo>{show.show.status}</SecondTypo><br />
                <FirstTypo>Official Site</FirstTypo>: <SecondTypo><NewLink target = "_blank" href = {show.show.officialSite}>{show.show.officialSite}</NewLink></SecondTypo><br />
            </AnotherBox>
            <StyledBox>
                {
                    show.show.image ?
                    <NewButton variant= "contained" onClick = {() => handleClick()}>Get The Ticket</NewButton>
                    :
                    <NewButton variant= "contained" disabled onClick = {() => handleClick()}>Get The Ticket</NewButton>
                }
            </StyledBox>

            {
                open && <DialogBox open = {open} setOpen = {setOpen} showName = {show.show.name} />
            }
        </NewBox>
    )
}

export default SecondSection;