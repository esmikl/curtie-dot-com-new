import * as React from "react"
import { useState } from "react"
import Nav from "../Navigation/nav"
import { Link } from "gatsby"
import "./header.scss"
// @ts-ignore
import largeLogo from "../../images/curtie-logo.svg"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"

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
                    <IconButton
                        sx={{
                            display: {
                                xs: "inline-flex",
                                sm: "inline-flex",
                                md: "none",
                            },
                        }}
                        style={styles}
                        onClick={handleToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
                <Nav open={open} setOpen={toggleMenu} />
            </div>
        </header>
    )
}

//export default withStyles(styles)(Header)
export default Header
