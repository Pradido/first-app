
import Header from "../components/Header/Header";
import Hero from "../components/HeroSection/Hero";
import OurServices from "../components/Our-Services/OurServices";
import Portfolio from "../components/Portfolio/Portfolio";
import YourIdeaSection from "../components/YourIdeaSection/Youridea";



function Homepage() {
    return(
        <div>
            <Header />
            <Hero />
            <OurServices />
            <Portfolio />
            <YourIdeaSection />
        </div>
    )
}
export default Homepage;