import "./Portfolio.css";
import imageplaceholder1 from "./imageplaceholder1.png";
import imageplaceholder2 from "./imageplaceholder2.png";
import imageplaceholder3 from "./imageplaceholder3.png";
import grouparrowleft from "./GroupArrowLeft.png";
import grouparrowright from "./GroupArrowRight.png";

function Portfolio() {
    return (
        <div className="two-color-body">
            <div className="parent-container">
                <p>Portfolio</p>
                <h1>Our Great Work</h1>
                <ul className="portfolio-head">
                    <li><button className="web-btn">Website Optimization</button></li>
                    <li>Website Redesign</li>
                    <li>Search Engine Optimization</li>
                </ul>
            </div>

            <div className="place-holder">
                <img className="grouparrow left-arrow" src={grouparrowleft} alt="Left Arrow" />
                
                <div className="image-container">
                    <img src={imageplaceholder1} alt="Placeholder 1" />
                    <p className="ph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.</p>
                </div>

                <div className="image-container">
                    <img src={imageplaceholder2} alt="Placeholder 2" />
                    <p className="ph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.</p>
                </div>

                <div className="image-container">
                    <img src={imageplaceholder3} alt="Placeholder 3" />
                    <p className="ph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.</p>
                </div>
                
                <img className="grouparrow right-arrow" src={grouparrowright} alt="Right Arrow" />
            </div>

            <button className="see-all-button">See All</button>

            
        </div>
    );
}

export default Portfolio;
