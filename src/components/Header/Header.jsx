import "./Header.css";
import logo from "./logo 1.png";

function Header(){
    return(
        <div className="header">
            <img src={logo}/>

            <nav>
                <ul>
                    <li><a className="home" href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    {/* <li><a href="#">DaCode Specialists</a></li> */}
                    <li><a href="/blog">Blog</a></li>
                    <li><button>Request a quote</button></li>
                </ul>
            </nav>
    
        </div>
    )

}
export default Header;