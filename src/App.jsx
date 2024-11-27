import Navbar from './Navbar'
import Slider from './Slider'
import About from './About'
import CarDisplay from './CarDisplay'
import Services from './Services'
import Partner from './Partner'
import Footer from './Footer'
import Video from './VideoPlayer'
import RoleCar from './RoleCar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../fontawesome-free-6.6.0-web/css/all.min.css'
import './App.css'

function App() {
  
  return (
    <>
      <Navbar />
      {/* <Slider /> */}
      <Video />
      <About />
      <RoleCar />
      <CarDisplay />
      <Services />
      {/* <Partner /> */}
      <Footer />
    </>
  )
}

export default App
