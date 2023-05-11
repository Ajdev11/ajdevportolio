import React from "react";

function Header(){
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header_content">
                            <div className="header-section">
                                <h2>Hello I am</h2>
                                <h2>Ajdev</h2>
                                <p>A skilled Software Engineer<br /> elit. Similique quidem odit vel obcaecati eius est.</p>
                                <div className="header_buttons">
                                    <a href="header" className="btn btn-outline">
                                        Hire ME
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        {/* add your cool image here */}
                        <img src="./image/three.jpg" alt="" className="image" />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;