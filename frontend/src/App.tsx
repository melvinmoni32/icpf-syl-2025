import { useState } from 'react';

// Core Layout Components
import { Header } from './app/components/Header';
import { Footer } from './app/components/Footer';

// Page Sections
import { HeroSection } from './app/components/HeroSection';
import { AboutSection } from './app/components/AboutSection';
import { MethodSection } from './app/components/MethodSection';
import { EligibilitySection } from './app/components/EligibilitySection';

// Form & Feedback Components
import { ApplicationForm } from './app/components/ApplicationForm';
import { SuccessMessage } from './app/components/SuccessMessage';

export default function App() {
  const [showSuccess, setShowSuccess] = useState(false);

  /**
   * Handles the successful submission of the form.
   * Scrolls the user to the top of the form area to see the success message.
   */
  const handleFormSuccess = () => {
    setShowSuccess(true);
    const formElement = document.getElementById('application-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen bg-[#F9F9F7] font-sans selection:bg-[#A3B18A]/30 selection:text-[#4A5D23]">
      {/* 1. Navigation Header */}
      <Header />

      <main>
        {/* 2. Introduction & Branding */}
        <HeroSection />

        {/* 3. Mission Statement */}
        <AboutSection />

        {/* 4. Process & Strategy (ID matches Header scroll logic) */}
        <div id="syl-method">
          <MethodSection />
        </div>

        {/* 5. Requirements Check */}
        <EligibilitySection />

        {/* 6. Lead Conversion / Application Section */}
        <section 
          id="application-form" 
          className="py-20 lg:py-32 bg-white relative overflow-hidden"
        >
          {/* Subtle background decoration for the form section */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3B18A]/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4A5D23]/5 rounded-full -ml-32 -mb-32 blur-3xl" />

          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-[#4A5D23] mb-4">
                Ready to Lead?
              </h2>
              <p className="text-gray-600 text-lg">
                Fill out the application below to begin your journey with SYL.
              </p>
            </div>

            {showSuccess ? (
              <SuccessMessage onClose={() => setShowSuccess(false)} />
            ) : (
              <div className="bg-[#F9F9F7]/50 p-8 md:p-12 rounded-[32px] border border-[#A3B18A]/20 shadow-sm">
                <ApplicationForm onSubmitSuccess={handleFormSuccess} />
              </div>
            )}
          </div>
        </section>
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}