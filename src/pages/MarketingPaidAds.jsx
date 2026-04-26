import React from 'react';
import { Link } from 'react-router-dom';

export default function MarketingPaidAds() {
  return (
    <div className="page-container pt-24 pb-section-gap">
      <div className="max-w-container-max mx-auto px-margin-edge">
        <div className="mb-8">
          <Link to={-1} className="text-primary hover:underline flex items-center gap-2 w-fit">
            <span className="material-symbols-outlined">arrow_back</span> Back to Advertising & Marketing
          </Link>
        </div>
        <div className="glass-panel p-10 rounded-xl relative overflow-hidden group">
          <h1 className="font-display-xl text-display-xl text-on-background mb-8">{title}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-8">
            Comprehensive details and in-depth methodologies for our Paid Ads services. We provide top-tier expertise and specialized solutions to meet the most demanding enterprise requirements.
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
