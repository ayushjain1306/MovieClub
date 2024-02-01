import React, { useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../header/Header.jsx";
import FirstSection from "./FirstSection.jsx";
import SecondSection from "./SecondSection.jsx";
import ThirdSection from "./ThirdSection.jsx";

const NewBox = styled(Box)`
    padding-top: 85px;
    background-color: whitesmoke;
    min-height: 100vh;
`

const AnotherBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1100px){
        display: block;
    }
`

const Details = () => {
    const [show, setShow] = useState(null);
    const { data } = useSelector(state => state.getData);

    let {id} = useParams();
    id = parseInt(id);

    useEffect(() => {
        const array = Object.values(data);

        const dataOfId = array.find(obj => obj.show.id === id);
        setShow(dataOfId);
    }, [])

    return (
        show &&
        <NewBox>
            <Header />

            <AnotherBox>
                <FirstSection show = {show} />
                <SecondSection show = {show} />
            </AnotherBox>

            <ThirdSection show = {show} />
        </NewBox>
    )
}

export default Details;