import React from 'react';

export default function TermsConditions() {
  return (
    <div className="page-container bg-[#030712] text-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-margin-edge">
        <h1 className="font-display-xl text-5xl md:text-7xl mb-12 uppercase tracking-tighter">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none space-y-12 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">2. Use License</h2>
            <p className="leading-relaxed">
              Permission is granted to temporarily download one copy of the materials (information or software) on Alpha Wings Tech Group's website for personal, non-commercial transitory viewing only.
            </p>
            <p className="mt-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display;</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
              <li>Remove any copyright or other proprietary notations from the materials.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">3. Disclaimer</h2>
            <p className="leading-relaxed">
              The materials on Alpha Wings Tech Group's website are provided on an 'as is' basis. Alpha Wings Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">4. Limitations</h2>
            <p className="leading-relaxed">
              In no event shall Alpha Wings Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Alpha Wings Tech Group's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">5. Governing Law</h2>
            <p className="leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates and India and you irrevocably submit to the exclusive jurisdiction of the courts in those locations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
