import React from "react";
import { Box, styled } from "@mui/material";
import { useSelector } from "react-redux";
import Header from "../header/Header.jsx";
import Slider from "./Slider.jsx";

const NewBox = styled(Box)`
    background-color: whitesmoke;
    padding-top: 75px;
`

const Home = () => {
    let {data} = useSelector(state => state.getData);

    return (
        <NewBox>
            <Header />
            {
                data &&
                <>
                    <Slider title = "Latest Movies and Shows" moviesData = {data} />
                    <Slider title = "Top Movies" moviesData = {data} />
                    <Slider title = "Fan Favourites" moviesData = {data} />
                    <Slider title = "Top Box Office" moviesData = {data} />
                    <Slider title = "More to Explore" moviesData = {data} />
                </>
            }
        </NewBox>
    )
}

export default Home;