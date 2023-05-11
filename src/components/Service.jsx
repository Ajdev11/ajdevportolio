import React from "react";



function Service(){
    const header ={
        mainHeader: "My Expertise",
        subHeading: "I Provide wide Range of Software Services",
    };
    const state = [
        {
            id: 1,
            icon: "./image/seo.png",
            heading:"SEO EXPERTS",
            // text: "Awesom Projects build with love"
        },
        {
            id: 2,
            icon: "./image/web.jpg",
            heading:"Web Applications",
            // text: "Awesom Projects build with love"
        },
        {
            id: 3,
            icon: "./image/ecom.jpg",
            heading:"E-Commerce Websites",
            // text: "Awesom Projects build with love"
        },
        {
            id: 4,
            icon: "./image/wordp.jpg",
            heading:"WordPress",
            // text: "Awesom Projects build with love"
        },
        {
            id: 5,
            icon: "./image/webdev.jpg",
            heading:"Web Development",
            // text: "Awesom Projects build with love"
        },
        {
            id: 6,
            icon: "./image/tech.jpg",
            heading:"Technical Writing",
            // text: "Awesom Projects build with love"
        },
    ];

    return (
        <div className="services">
            <div id="Services" className="container">
                <div className="services_header">
                    <div className="common">
                        <h6 className="heading">{header.mainHeader}</h6> 
                        <h2 className="subheading">{header.subHeading}</h2>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="row bgMain">
                        {state.map((info)=>(
                            <div className="col-4 bgMain">
                                <div className="services_box">
                                    <img src={info.icon} alt="" className="commonIcons" />
                                    <h4 className="services_box-header">{info.heading}</h4>
                                    {/* <p className="services_box-p">{info.text}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> 
        </div>

    )
}
export default Service;