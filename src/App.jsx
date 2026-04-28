import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CookieBanner from './components/CookieBanner'
import BackToTop from './components/BackToTop'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Services from './pages/Services'
import ITServices from './pages/ITServices'
import ITMobileEcosystems from './pages/ITMobileEcosystems'
import ITCustomSoftware from './pages/ITCustomSoftware'
import ITCloudArchitecture from './pages/ITCloudArchitecture'
import ITCybersecurity from './pages/ITCybersecurity'
import FinanceServices from './pages/FinanceServices'
import ManagementConsulting from './pages/ManagementConsulting'
import BrandingServices from './pages/BrandingServices'
import AdvertisingMarketing from './pages/AdvertisingMarketing'
import GovernmentServices from './pages/GovernmentServices'
import PoliticalCampaigns from './pages/PoliticalCampaigns'
import InfrastructureServices from './pages/InfrastructureServices'
import JobDescription from './pages/JobDescription'

import GovDocumentationSupport from './pages/GovDocumentationSupport'
import GovDigitalServices from './pages/GovDigitalServices'
import GovComplianceAdvisory from './pages/GovComplianceAdvisory'
import ConsultingBusinessStrategy from './pages/ConsultingBusinessStrategy'
import ConsultingOperationsOptimization from './pages/ConsultingOperationsOptimization'
import ConsultingHRConsulting from './pages/ConsultingHRConsulting'
import ConsultingGrowthPlanning from './pages/ConsultingGrowthPlanning'
import MarketingDigitalMarketing from './pages/MarketingDigitalMarketing'
import MarketingSocialMedia from './pages/MarketingSocialMedia'
import MarketingSEO from './pages/MarketingSEO'
import MarketingPaidAds from './pages/MarketingPaidAds'
import MarketingCampaignStrategy from './pages/MarketingCampaignStrategy'
import BrandingIdentity from './pages/BrandingIdentity'
import BrandingLogo from './pages/BrandingLogo'
import BrandingStrategy from './pages/BrandingStrategy'
import BrandingVisualSystems from './pages/BrandingVisualSystems'
import PoliticalCampaignStrategy from './pages/PoliticalCampaignStrategy'
import PoliticalDigitalMarketing from './pages/PoliticalDigitalMarketing'
import PoliticalVoterOutreach from './pages/PoliticalVoterOutreach'
import PoliticalSocialMedia from './pages/PoliticalSocialMedia'

import InfraCommercial from './pages/InfraCommercial'
import InfraResidential from './pages/InfraResidential'
import InfraGovernment from './pages/InfraGovernment'
import InfraRoads from './pages/InfraRoads'

import FinanceConsulting from './pages/FinanceConsulting'
import InvestmentAdvisory from './pages/InvestmentAdvisory'
import FundingGuidance from './pages/FundingGuidance'
import PrecisionBudgetPlanning from './pages/PrecisionBudgetPlanning'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import CookiePolicy from './pages/CookiePolicy'
import Disclaimer from './pages/Disclaimer'
import NotFound from './pages/NotFound'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
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
            <Route path="/services/it/mobile" element={<ITMobileEcosystems />} />
            <Route path="/services/it/software" element={<ITCustomSoftware />} />
            <Route path="/services/it/cloud" element={<ITCloudArchitecture />} />
            <Route path="/services/it/security" element={<ITCybersecurity />} />
            <Route path="/services/finance" element={<FinanceServices />} />
            <Route path="/services/finance/consulting" element={<FinanceConsulting />} />
            <Route path="/services/finance/investment" element={<InvestmentAdvisory />} />
            <Route path="/services/finance/funding" element={<FundingGuidance />} />
            <Route path="/services/finance/budgeting" element={<PrecisionBudgetPlanning />} />
            <Route path="/services/consulting" element={<ManagementConsulting />} />
            <Route path="/services/consulting/business-strategy" element={<ConsultingBusinessStrategy />} />
            <Route path="/services/consulting/operations-optimization" element={<ConsultingOperationsOptimization />} />
            <Route path="/services/consulting/hr-consulting" element={<ConsultingHRConsulting />} />
            <Route path="/services/consulting/growth-planning" element={<ConsultingGrowthPlanning />} />

            <Route path="/services/branding" element={<BrandingServices />} />
            <Route path="/services/branding/brand-identity" element={<BrandingIdentity />} />
            <Route path="/services/branding/logo-creation" element={<BrandingLogo />} />
            <Route path="/services/branding/strategy" element={<BrandingStrategy />} />
            <Route path="/services/branding/visual-systems" element={<BrandingVisualSystems />} />
            <Route path="/services/marketing" element={<AdvertisingMarketing />} />
            <Route path="/services/marketing/digital-marketing" element={<MarketingDigitalMarketing />} />
            <Route path="/services/marketing/social-media" element={<MarketingSocialMedia />} />
            <Route path="/services/marketing/seo" element={<MarketingSEO />} />
            <Route path="/services/marketing/paid-ads" element={<MarketingPaidAds />} />
            <Route path="/services/marketing/campaign-strategy" element={<MarketingCampaignStrategy />} />

            <Route path="/services/government" element={<GovernmentServices />} />
            <Route path="/services/government/documentation-support" element={<GovDocumentationSupport />} />
            <Route path="/services/government/digital-services" element={<GovDigitalServices />} />
            <Route path="/services/government/compliance-advisory" element={<GovComplianceAdvisory />} />

            <Route path="/services/political" element={<PoliticalCampaigns />} />
            <Route path="/services/political/campaign-strategy" element={<PoliticalCampaignStrategy />} />
            <Route path="/services/political/digital-marketing" element={<PoliticalDigitalMarketing />} />
            <Route path="/services/political/voter-outreach" element={<PoliticalVoterOutreach />} />
            <Route path="/services/political/social-media" element={<PoliticalSocialMedia />} />

            <Route path="/services/infrastructure" element={<InfrastructureServices />} />
            <Route path="/services/infrastructure/commercial" element={<InfraCommercial />} />
            <Route path="/services/infrastructure/residential" element={<InfraResidential />} />
            <Route path="/services/infrastructure/government" element={<InfraGovernment />} />
            <Route path="/services/infrastructure/roads" element={<InfraRoads />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </main>
          <Footer />
          <CookieBanner />
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
