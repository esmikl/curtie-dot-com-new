import * as React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import "../styles/home.scss"

const Home = () => (
    <PrimaryLayout>
        <div className="photo-grid">
            <div className="main-photo"></div>
            <div className="main-photo-2"></div>
            <div className="secondary-photo-small"></div>
            <div className="secondary-photo-large"></div>
            <div className="third-row-1"></div>
            <div className="third-row-2"></div>
            <div className="third-row-3"></div>
        </div>
    </PrimaryLayout>
)

export default Home
