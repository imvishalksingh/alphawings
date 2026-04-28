import React from 'react';

export default function Disclaimer() {
  return (
    <div className="page-container bg-[#030712] text-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-margin-edge">
        <h1 className="font-display-xl text-5xl md:text-7xl mb-12 uppercase tracking-tighter">Disclaimer</h1>
        
        <div className="prose prose-invert max-w-none space-y-12 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">1. External Links</h2>
            <p className="leading-relaxed">
              Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Alpha Wings Tech Group. Please note that the Alpha Wings Tech Group does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">2. Errors and Omissions</h2>
            <p className="leading-relaxed">
              The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to insure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">3. Fair Use</h2>
            <p className="leading-relaxed">
              The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">4. Views Expressed</h2>
            <p className="leading-relaxed">
              The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
