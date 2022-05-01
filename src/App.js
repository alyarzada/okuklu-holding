import './App.css';
import Home from './components/home/home';
import AboutSection from '../src/components/sections/aboutsection';
import ServiceSection from '../src/components/sections/servicesection';
import NewsSection from '../src/components/sections/newssection';
import ContactSection from '../src/components/sections/contactsection';
import EachNews from './components/sections/eachnews';
import IgdirResidenceSection from '../src/components/sections/igdirresidencesection';
import HumanResource from '../src/components/sections/humanresources';
import WhyUs from '../src/components/sections/whyus';
import Leader from '../src/components/sections/leader';
import EachProducts from '../src/components/sections/eachproducts/eachproducts';

import Ceramics from './components/sections/ceramics/ceramics';

import Header from '../src/components/home/header/header';
import Footer from './components/home/footer/footer';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/service" element={<ServiceSection />} />
        <Route path="/news" element={<NewsSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/news/:code" element={<EachNews />} />
        <Route
          path="/igdirresidencesection"
          element={<IgdirResidenceSection />}
        />
        <Route path="/humanresources" element={<HumanResource />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/managment" element={<Leader />} />
        <Route path="/ceramics" element={<Ceramics />} />
        <Route path="/eachproducts" element={<EachProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
