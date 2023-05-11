import React from "react";


function About(){
    return(
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="about-title">About me</h1>
                    <div className="underline-border"></div>
                </div>
                <div className="row h-650 alignCenter">
                    <div className="col-6">
                        <div className="about_img">
                            <img src="./image/four.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about_info">
                         <h1>Skilled Software engineer <br /> based in Nigeria</h1>
                         <div className="about_info">
                            <p>  
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 <br /> Non officiis autem sunt sequi natus architecto rem, laborum iure iusto doloremque
                                  <br /> repudiandae deleniti, inventore fuga at illo adipisci incidunt quod eius quaerat
                                   <br /> laboriosam. Id expedita eum modi voluptates unde atque nesciunt esse laboriosam,
                                    <br /> minima optio iste enim rerum tenetur facere doloribus? andcyciejckl
                            </p>
                            <div className="about_buttons">
                                <a href="#about" className="btn about-btn-outline">
                                    Download CV
                                </a>
                            </div>
                         </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default About;