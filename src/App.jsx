import Banner from "./components/Banner/Banner"
import Bannerresponsive from "./components/Banner/Bannerresponsive"
import Card from "./components/Card/Card"
import Counter from "./components/Counter/Counter"
import Exprience from "./components/Exprience/Exprience"
import Logo from "./components/Logo/Logo"
import Navbar from "./components/Navbar/Navbar"
import Protfolio from "./components/Protfolio/Protfolio"
import Service from "./components/Service/Service"
import Skill from "./components/Skill/Skill"
import Education from "./Education/Education"

function App() {

  return (
    <>
    <Navbar />
    <Banner/>
    <Bannerresponsive/>
    <Card/>
    <Counter/>
    <Service />
    <Protfolio />
    <Skill />
    <Education />
    <Exprience />
    <Logo/>
    </>
  )
}

export default App
