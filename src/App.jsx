import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Services from './pages/Services'
import ITServices from './pages/ITServices'
import FinanceServices from './pages/FinanceServices'
import ManagementConsulting from './pages/ManagementConsulting'
import BrandingServices from './pages/BrandingServices'
import AdvertisingMarketing from './pages/AdvertisingMarketing'
import GovernmentServices from './pages/GovernmentServices'
import PoliticalCampaigns from './pages/PoliticalCampaigns'
import InfrastructureServices from './pages/InfrastructureServices'
import JobDescription from './pages/JobDescription'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/job" element={<JobDescription />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/it" element={<ITServices />} />
            <Route path="/services/finance" element={<FinanceServices />} />
            <Route path="/services/consulting" element={<ManagementConsulting />} />
            <Route path="/services/branding" element={<BrandingServices />} />
            <Route path="/services/marketing" element={<AdvertisingMarketing />} />
            <Route path="/services/government" element={<GovernmentServices />} />
            <Route path="/services/political" element={<PoliticalCampaigns />} />
            <Route path="/services/infrastructure" element={<InfrastructureServices />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
