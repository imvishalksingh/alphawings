import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="page-container bg-[#030712] text-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-margin-edge">
        <h1 className="font-display-xl text-5xl md:text-7xl mb-12 uppercase tracking-tighter">Cookie Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-12 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">1. What Are Cookies</h2>
            <p className="leading-relaxed">
              As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">2. How We Use Cookies</h2>
            <p className="leading-relaxed">
              We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">3. Disabling Cookies</h2>
            <p className="leading-relaxed">
              You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">4. The Cookies We Set</h2>
            <ul className="list-disc pl-6 space-y-4 mt-4">
              <li><strong>Forms related cookies:</strong> When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</li>
              <li><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-primary/30 pb-2">5. Third Party Cookies</h2>
            <p className="leading-relaxed">
              In some special cases we also use cookies provided by trusted third parties. This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
