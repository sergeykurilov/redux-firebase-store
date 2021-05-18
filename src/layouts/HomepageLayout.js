import React from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";

export const HomepageLayout = ({children},props) => {
    console.log(props)
    return (
        <div className="fullHeight">
            <Header {...props}/>
            {children}
            <Footer/>
        </div>
    )
}
