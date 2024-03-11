import React from "react";
import Header from "@layout/header";
import Footer from "@layout/footer";

const Layout : React.FC = ({children}) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;