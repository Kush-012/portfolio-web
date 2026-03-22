import React from "react";

export default function TermsAndConditions() {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-400 py-16">
      <div className="max-w-4xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-6">
          Terms & Conditions
        </h1>

        {/* Intro */}
        <p className="mb-6">
          By accessing this website, you agree to be bound by these Terms and
          Conditions and all applicable laws and regulations.
        </p>

        {/* Use License */}
        <h2 className="text-xl font-semibold text-white mt-8 mb-2">
          Use License
        </h2>
        <p className="mb-4">
          Permission is granted to temporarily download one copy of the materials
          on CoderEarth for personal, non-commercial use only.
        </p>

        {/* Disclaimer */}
        <h2 className="text-xl font-semibold text-white mt-8 mb-2">
          Disclaimer
        </h2>
        <p className="mb-4">
          The materials on CoderEarth are provided on an “as is” basis. We make no
          warranties, expressed or implied, and hereby disclaim all other
          warranties.
        </p>

        {/* Limitations */}
        <h2 className="text-xl font-semibold text-white mt-8 mb-2">
          Limitations
        </h2>
        <p className="mb-4">
          In no event shall CoderEarth or its contributors be liable for any
          damages arising out of the use or inability to use the materials on the
          website.
        </p>

        {/* Modifications */}
        <h2 className="text-xl font-semibold text-white mt-8 mb-2">
          Modifications
        </h2>
        <p className="mb-4">
          CoderEarth may revise these terms of service at any time without notice.
        </p>

        {/* Governing Law */}
        <h2 className="text-xl font-semibold text-white mt-8 mb-2">
          Governing Law
        </h2>
        <p>
          These terms shall be governed and interpreted in accordance with the
          laws of India.
        </p>

      </div>
    </section>
  );
}
