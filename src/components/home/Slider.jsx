import React from "react";
import { Box, styled, Typography } from "@mui/material"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Link } from "react-router-dom"
import noimage from "../../no-image.png";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
};

const NewBox = styled(Box)`
    background-color: white;
    margin: 0px 15px 15px 15px;
    padding-top: 20px;

    @media screen and (max-width: 700px){
        margin: 0px 15px 0px 0px;
        width: 100vw;
    }
`

const Typo = styled(Box) `
    background-color: white;
    font-size: 25px;
    color: black;
    margin: 20px 20px 15px 20px;

    @media screen and (max-width: 700px){
        font-size: 18px;
    }
`

function Slider({moviesData, title}) {
    return (
        <NewBox>
            <Box style ={{
                backgroundColor: "white",
            }}>
                <Typo>
                    {title}
                </Typo>
            </Box>
            <Carousel 
                responsive={responsive}
                swipeable={true}
                itemClass="carousel-item-padding-40-px"

                style ={{
                    backgroundColor: "white"
                }}
            >
                {
                    moviesData.map(data =>{
                        return (
                            <div style ={{
                                width: "100%",
                                backgroundColor: "white",
                                paddingBottom: "20px"
                            }} key = {data.show.id}>
                                <Link to = {`/movies/${data.show.id}`} style = {{
                                    cursor: "pointer",
                                    textDecoration: "none"
                                }}>
                                    <div style ={{
                                        width: "85%",
                                        textAlign: "center",
                                        border: "1px solid rgba(0,0,0,0.12)",
                                        margin: "auto",
                                        backgroundColor: "white",
                                        borderRadius: "4px"
                                    }}>
                                        <img src = {data.show.image ?data.show.image.medium : noimage} alt = "MovieImage" style= {{
                                            width: "80%",
                                            height: "200px",
                                            marginTop: "10px"
                                        }} />

                                        <Typography style ={{
                                            backgroundColor: "white",
                                            color: "black",
                                            marginTop: "5px"
                                        }}>{data.show.name}</Typography>

                                        <Typography style ={{
                                            backgroundColor: "white",
                                            color: "black",
                                            fontWeight: "bold"
                                        }}>
                                            {data.show.language} {data.show.genres[0]}
                                        </Typography>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </Carousel>
        </NewBox>
    )
}

export default Slider;