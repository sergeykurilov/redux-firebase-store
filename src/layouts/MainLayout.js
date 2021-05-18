import React from "react"
import Header from "../components/Header";

export const MainLayout = ({children}) => {
    return (
        <div className="fullHeight">
            <Header/>
            <div className="main">
                {children}
            </div>
        </div>
    )
}
