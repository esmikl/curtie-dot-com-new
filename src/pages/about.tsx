import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
// @ts-ignore
import curtiePhoto from "../images/curtie.jpg"
import Grid from "@mui/material/Grid"
import "../styles/about.scss"

const About = () => {
    return (
        <PrimaryLayout>
            <div className="container about">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} className={"about-text"}>
                        <h1>Meet Curtie</h1>
                        <p>
                            Greetings! Thanks for stopping by! I own and operate
                            a portrait studio along with my wife Julie Rae who
                            has been here with me since Dec, 2004. You can visit{" "}
                            <a
                                href={"http://thelookphotography.com/"}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                www.thelookphotography.com
                            </a>{" "}
                            to see her work.
                        </p>
                        <p>
                            Since 2009 I fell into another career of
                            transportation becoming a Motor-Coach driver for the
                            then Blackhawk Express and now{" "}
                            <a
                                href={"https://www.kobussen.com/"}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                Kobussen Buses, Ltd
                            </a>
                            . I am full time with Kobussen Buses in Bloomer, but
                            will take on the occasional wedding, family, or
                            senior portrait session. My wife and I also take
                            care of the photo needs of 1,000 school children and
                            their families in the fall of the year. Please feel
                            free to contact me with whatever needs you have in
                            the photography world, and If I cannot accommodate I
                            will introduce you to my lovely and talented wife.
                        </p>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <img
                            className={"curtie-photo"}
                            src={curtiePhoto}
                            alt={"Curtie Harrison"}
                        />
                    </Grid>
                </Grid>
            </div>
        </PrimaryLayout>
    )
}

export default About
