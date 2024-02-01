import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import FirstSection from "./FirstSection.jsx";
import SecondSection from "./SecondSection.jsx";

const Appbar = styled(AppBar)`
    margin: 0px;
    padding: 0px;
    background-color: #e3e3e3;
`

const ToolBar = styled(Toolbar)`
    margin: 0px;
    padding: 0px;
    background-color: #e3e3e3;
    color: black;
`

const Header = () => {
    return (
        <Appbar>
            <ToolBar>
                <FirstSection />
                <SecondSection />
            </ToolBar>
        </Appbar>
    )
}

export default Header;