import * as React from "react"
import "./layout.scss"
import PageContent from "./PageContent"
import Header from "../../Header/header"

const LayoutFrame = ({ children }: any) => {
    return (
        <>
            <Header />
            <PageContent>{children}</PageContent>
        </>
    )
}

export default LayoutFrame
