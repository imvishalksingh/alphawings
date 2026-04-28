import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="page-container bg-[#030712] text-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-margin-edge">
        <h1 className="font-display-xl text-5xl md:text-7xl mb-12 uppercase tracking-tighter">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-12 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">1. Introduction</h2>
            <p className="leading-relaxed">
              At Alpha Wings Tech Group ("we," "us," or "our"), we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">2. Information We Collect</h2>
            <p className="leading-relaxed">
              We collect several types of information from and about users of our Website, including information:
            </p>
            <ul className="list-disc pl-6 space-y-4 mt-4">
              <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information").</li>
              <li>That is about you but individually does not identify you, such as company name or industry.</li>
              <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">3. How We Use Your Information</h2>
            <p className="leading-relaxed">
              We use information that we collect about you or that you provide to us, including any personal information:
            </p>
            <ul className="list-disc pl-6 space-y-4 mt-4">
              <li>To present our Website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To provide you with notices about your account/subscription.</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">4. Data Security</h2>
            <p className="leading-relaxed">
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">5. Changes to Our Privacy Policy</h2>
            <p className="leading-relaxed">
              It is our policy to post any changes we make to our privacy policy on this page. The date the privacy policy was last revised is identified at the top of the page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">6. Contact Information</h2>
            <p className="leading-relaxed">
              To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:Hr@alphabusi.com" className="text-primary hover:underline">Hr@alphabusi.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
