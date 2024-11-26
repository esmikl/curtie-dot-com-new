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
                            Greetings! Welcome to Curtie Dot Com Inc.
                            Photography services. I have been here at the same
                            location in Bloomer telling folks to say "CHEESE"
                            since 1980! I'm still around but do photography
                            strictly on location and at a low volume level as I
                            enter my "golden years". I am a "meat and potatoes"
                            photographer where you will receive the raw unedited
                            images on a flash drive and you may take that and
                            run! I don't have time for all the fancy digital
                            editing and if you're wanting that I can point you
                            in the right direction of some top notch
                            photographers in the Chippewa Valley.
                        </p>
                        <h2>What will I do?</h2>
                        <p>
                            The occasional, graduating senior (not a multi hour
                            session), family, small intimate wedding, kids,
                            etc...
                        </p>
                        <h3>Services no longer offered:</h3>
                        <p>
                            The following I have been there, done that and do
                            not have the time/energy available anymore.
                        </p>
                        <ul>
                            <li>All day weddings</li>
                            <li>
                                Senior photos with multi-changes and locations
                                taking hours and hours to photograph.
                            </li>
                            <li>
                                Family or any group that half in attendance do
                                not want to participate.
                            </li>
                        </ul>
                        <p>
                            I'm in my 4th quarter of life and I'm going to have
                            fun! I'm only here as I still do enjoy it and if the
                            right "gig" comes along I'll say yes if my schedule
                            permits. <a href={"/contact"}>Contact me</a> to
                            visit about your request.
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
