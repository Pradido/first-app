import "./Hero.css";
import rectangle from "./Rectangle.png";
import image from "./image.png"
// import group1 from "./Group1.png"



function Hero(){
    return(
<div className="landing-container">
      <div className="content-container">
        <div className="text-section">
            <img src={rectangle} alt="" />
          <h1>
            We help you create <br /> your <span className="highlight">website</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. <br /> Dolore nostrum
            obcaecati distinctio dolore! <br /> Cumque vero suscipit minus
            esse, <br />accusantium laboriosam pariatur.
          </p>
        
          <div className="buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Contact us</button>
          </div>
        </div>
        
        <div className="image-section">
          <img src={image} alt="Right-side Illustration" />
        </div>
        
      </div>
    </div>
  );
}
export default Hero;