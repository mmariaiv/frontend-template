import React from "react";
import {Helmet} from "react-helmet-async";

const SEO: React.FC = ({title, description, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name={"description"} content={description}/>
            <meta name={"robots"} content={"all"}/>
            <meta name="yandex" content="index,follow"/>
            <meta name={"keywords"} content={keywords} />
        </Helmet>
    )
}

export default SEO;