import * as React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Grid from "@mui/material/Grid"
import "../styles/home.scss"

const Home = () => (
    <PrimaryLayout>
        <Grid container>
            <Grid item xs={12} lg={6}>
                <div className="main-photo"></div>
            </Grid>
            <Grid item xs={12} lg={6}>
                <div className="main-photo-2"></div>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12} lg={4}>
                <div className="secondary-photo-1"></div>
            </Grid>
            <Grid item xs={12} lg={4}>
                <div className="secondary-photo-2"></div>
            </Grid>
            <Grid item xs={12} lg={4}>
                <div className="secondary-photo-3"></div>
            </Grid>
        </Grid>
    </PrimaryLayout>
)

export default Home
