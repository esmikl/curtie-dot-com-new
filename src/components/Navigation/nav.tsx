import React from "react"
import { Link } from "gatsby"
import "./nav.scss"

const isActive = ({ isCurrent }: { isCurrent: boolean }) => {
    return isCurrent ? { className: "active" } : {}
}

const Nav = ({
    open,
    setOpen,
}: {
    open: boolean
    setOpen?: (value: ((prevState: boolean) => boolean) | boolean) => void
}) => {
    return (
        <nav className={`${open ? "open" : "closed"}`}>
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
