import React from "react"
import { Link } from "gatsby"
import "./nav.scss"

const isActive = ({ isCurrent }: { isCurrent: boolean }) => {
    return isCurrent ? { className: "active" } : {}
}

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/about" getProps={isActive}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact" getProps={isActive}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
