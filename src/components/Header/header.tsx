import * as React from "react"
import { useState } from "react"
import Nav from "../Navigation/nav"
import { Link } from "gatsby"
import "./header.scss"
// @ts-ignore
import largeLogo from "../../images/curtie-logo.svg"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import {StaticImage} from "gatsby-plugin-image";

const styles = {
    color: "#000",
    border: "1px solid",
    marginLeft: "auto",
    "&:focus, &:active": {
        "border-width": "2px",
    },
}

const Header = () => {
    const [open, toggleMenu] = useState(false)

    const handleToggle = () => {
        toggleMenu(!open)
    }

    return (
        <header className="header">
            <div className="container">
                <div className="logo-wrapper">
                    <Link to="/" className="logo-link">
                        <img
                            className="logo"
                            src={largeLogo}
                            alt="Curtie Dot Com, Inc."
                        />
                    </Link>

                </div>
                <Nav />
                <div className='affiliate-links'>
                    <a href="https://curtiecares.org/" target="_blank"><StaticImage height={74} src='../../images/cc_logo.png' alt='Curtie Cares Inc.'/></a>
                    <a href="https://francesexpress.com/" target="_blank"><StaticImage height={74} src='../../images/frances-express-logo-1200px.jpg' alt='Frances Express' /></a>
                </div>
            </div>
        </header>
    )
}

//export default withStyles(styles)(Header)
export default Header
