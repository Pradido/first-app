
import Header from "../components/Header/Header";
import Hero from "../components/HeroSection/Hero";
import OurServices from "../components/Our-Services/OurServices";
import Portfolio from "../components/Portfolio/Portfolio";
import YourIdeaSection from "../components/YourIdeaSection/Youridea";
import Interest from "../components/InterestSection/Interest"
import Footer from "../components/Footer/Footer"



function Homepage() {
    return(
        <div>
            <Header />
            <Hero />
            <OurServices />
            <Portfolio />
            <YourIdeaSection />
            <Interest />
            <Footer />
        </div>
    )
}
export default Homepage;