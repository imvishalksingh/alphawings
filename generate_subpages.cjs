const fs = require('fs');
const path = require('path');

const pages = [
  { name: 'GovDocumentationSupport', title: 'Documentation Support', parent: 'Government Services' },
  { name: 'GovDigitalServices', title: 'Digital Services Consulting', parent: 'Government Services' },
  { name: 'GovComplianceAdvisory', title: 'Compliance Advisory', parent: 'Government Services' },
  { name: 'ConsultingBusinessStrategy', title: 'Business Strategy', parent: 'Management Consulting' },
  { name: 'ConsultingOperationsOptimization', title: 'Operations Optimization', parent: 'Management Consulting' },
  { name: 'ConsultingHRConsulting', title: 'HR Consulting', parent: 'Management Consulting' },
  { name: 'ConsultingGrowthPlanning', title: 'Growth Planning', parent: 'Management Consulting' },
  { name: 'MarketingDigitalMarketing', title: 'Digital Marketing', parent: 'Advertising & Marketing' },
  { name: 'MarketingSocialMedia', title: 'Social Media', parent: 'Advertising & Marketing' },
  { name: 'MarketingSEO', title: 'SEO', parent: 'Advertising & Marketing' },
  { name: 'MarketingPaidAds', title: 'Paid Ads', parent: 'Advertising & Marketing' },
  { name: 'MarketingCampaignStrategy', title: 'Campaign Strategy', parent: 'Advertising & Marketing' },
  { name: 'BrandingIdentity', title: 'Brand Identity Design', parent: 'Branding Services' },
  { name: 'BrandingLogo', title: 'Logo Creation', parent: 'Branding Services' },
  { name: 'BrandingStrategy', title: 'Branding Strategy', parent: 'Branding Services' },
  { name: 'BrandingVisualSystems', title: 'Visual Systems', parent: 'Branding Services' },
  { name: 'PoliticalCampaignStrategy', title: 'Campaign Strategy', parent: 'Political Campaigns' },
  { name: 'PoliticalDigitalMarketing', title: 'Digital Marketing', parent: 'Political Campaigns' },
  { name: 'PoliticalVoterOutreach', title: 'Voter Outreach', parent: 'Political Campaigns' },
  { name: 'PoliticalSocialMedia', title: 'Social Media Management', parent: 'Political Campaigns' }
];

const template = (name, title, parent) => `import React from 'react';
import { Link } from 'react-router-dom';

export default function ${name}() {
  return (
    <div className="page-container pt-24 pb-section-gap">
      <div className="max-w-container-max mx-auto px-margin-edge">
        <div className="mb-8">
          <Link to={-1} className="text-primary hover:underline flex items-center gap-2 w-fit">
            <span className="material-symbols-outlined">arrow_back</span> Back to ${parent}
          </Link>
        </div>
        <div className="glass-panel p-10 rounded-xl relative overflow-hidden group">
          <h1 className="font-display-xl text-display-xl text-on-background mb-8">{title}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-8">
            Comprehensive details and in-depth methodologies for our ${title} services. We provide top-tier expertise and specialized solutions to meet the most demanding enterprise requirements.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/30">
              <h3 className="font-headline-md text-on-background mb-6 flex items-center gap-3">
                 <span className="material-symbols-outlined text-primary">verified</span> Key Benefits
              </h3>
              <ul className="list-disc list-inside space-y-3 text-on-surface-variant text-body-md">
                <li>Strategic alignment with corporate business goals</li>
                <li>Data-driven decision making framework</li>
                <li>Scalable architecture and enterprise implementation</li>
                <li>Continuous monitoring, risk mitigation and optimization</li>
              </ul>
            </div>
            <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/30">
              <h3 className="font-headline-md text-on-background mb-6 flex items-center gap-3">
                 <span className="material-symbols-outlined text-secondary">explore</span> Our Approach
              </h3>
              <ul className="list-disc list-inside space-y-3 text-on-surface-variant text-body-md">
                <li>Initial comprehensive audit and market analysis</li>
                <li>Customized strategy formulation with key stakeholders</li>
                <li>Phased execution mapped with agile methodologies</li>
                <li>Transparent reporting, KPIs, and ROI tracking</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center">
            <button className="bg-gradient-to-r from-primary-container to-primary/80 text-on-primary-container px-10 py-5 rounded-lg font-label-lg text-label-lg inner-glow hover:opacity-90 transition-opacity shadow-lg">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

pages.forEach(p => {
  fs.writeFileSync(path.join(__dirname, 'src', 'pages', p.name + '.jsx'), template(p.name, p.title, p.parent));
});
console.log("Pages generated!");
