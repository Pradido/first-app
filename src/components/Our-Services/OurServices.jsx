import "./OurServices.css";
import rectangle2 from "./Rectangle2.png";
import icon from "./icon.png";
import web from "./web.png";
import arrowright from "./arrowright.png";

function OurServices() {
    return (
        <div className="main-container">
            {/* services */}
            <div className="services">
                <h1 className="head">Our Services</h1>
                <p>Lorem ipsum dolor, sit amet consectetur elit. Aliquam sunt ea praesentium illum modi sapiente reiciendis <br />dolorem doloremque molestias!</p>

                {/* first row of containers */}
                <div className="service-row">
                    <div className="x">
                        <img className="angle" src={rectangle2} alt="" />
                        <div className="content-container">
                            <img className="icon" src={web} alt="" />
                            <div className="text-container">
                                <h5>WordPress Site</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, molestias!</p>
                                <span><p>Read More<img className="arrowright" src={arrowright} alt="" /></p></span>
                            </div>
                        </div>
                    </div>

                    <div className="x">
                        <img className="angle" src={rectangle2} alt="" />
                        <div className="content-container">
                            <img className="icon" src={web} alt="" />
                            <div className="text-container">
                                <h5>WordPress Plugin</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, molestias!</p>
                                <span><p>Read More<img className="arrowright" src={arrowright} alt="" /></p></span>
                            </div>
                        </div>
                    </div>

                    <div className="x">
                        <img className="angle" src={rectangle2} alt="" />
                        <div className="content-container">
                            <img className="icon" src={web} alt="" />
                            <div className="text-container">
                                <h5>Website Redesign</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, molestias!</p>
                                <span><p>Read More<img className="arrowright" src={arrowright} alt="" /> </p></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* second row of containers */}
                <div className="service-row">
                    <div className="x">
                        <img className="angle" src={rectangle2} alt="" />
                        <div className="content-container">
                            <img className="icon" src={web} alt="" />
                            <div className="text-container">
                                <h5>WordPress Site Optimization</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, molestias!</p>
                                <span><p>Read More<img className="arrowright" src={arrowright} alt="" /></p></span>
                            </div>
                        </div>
                    </div>

                    <div className="x">
                        <img className="angle" src={rectangle2} alt="" />
                        <div className="content-container">
                            <img className="icon" src={web} alt="" />
                            <div className="text-container">
                                <h5>Search Engine Optimization</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, molestias!</p>
                                <span><p>Read More<img className="arrowright" src={arrowright} alt="" /></p></span>
                            </div>
                        </div>
                    </div>

                    <div className="x">
                        <img className="angle" src={rectangle2} alt="" />
                        <div className="content-container">
                            <img className="icon" src={web} alt="" />
                            <div className="text-container">
                                <h5>Cross Platform Mobile App</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, molestias!</p>
                                <span><p>Read More<img className="arrowright" src={arrowright} alt="" /></p></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OurServices;
