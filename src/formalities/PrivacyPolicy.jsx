import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-400 py-16">
      <div className="max-w-4xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-6">
          Privacy Policy
        </h1>

        {/* Intro */}
        <p className="mb-6">
          At CoderEarth, accessible from this website, the privacy of our visitors
          is one of our main priorities. This Privacy Policy document contains
          types of information that are collected and recorded by CoderEarth and
          how we use it.
        </p>

        {/* Information We Collect */}
        <h2 className="text-xl font-semibold text-white mt-8 mb-2">
          Information We Collect
        </h2>
        <p className="mb-4">
          We do not collect personal information unless you voluntarily provide
          it to us, such as by contacting us directly.
        </p>

        {/* Log Files */}
        <h2 className="text-xl font-semibold text-white mt-8 mb-2">
          Log Files
        </h2>
        <p className="mb-4">
          CoderEarth follows a standard procedure of using log files. These files
          log visitors when they visit websites. The information collected may
          include internet protocol (IP) addresses, browser type, Internet
          Service Provider (ISP), date and time stamp, referring/exit pages, and
          number of clicks. These are not linked to any personally identifiable
          information.
        </p>

        {/* Cookies */}
        <h2 className="text-xl font-semibold text-white mt-8 mb-2">
          Cookies and Web Beacons
        </h2>
        <p className="mb-4">
          CoderEarth uses cookies to store information about visitors’ preferences
          and to optimize the user experience by customizing our web page content
          based on visitors’ browser type or other information.
        </p>

        {/* Google AdSense */}
        <h2 className="text-xl font-semibold text-white mt-8 mb-2">
          Google AdSense
        </h2>
        <p className="mb-4">
          Google is a third-party vendor on our site. It uses cookies, including
          the DART cookie, to serve ads to users based on their visit to our
          website and other websites on the internet.
        </p>
        <p className="mb-4">
          Users may opt out of the use of the DART cookie by visiting Google’s Ads
          Privacy Policy.
        </p>

        {/* Third Party */}
        <h2 className="text-xl font-semibold text-white mt-8 mb-2">
          Third-Party Privacy Policies
        </h2>
        <p className="mb-4">
          CoderEarth’s Privacy Policy does not apply to other advertisers or
          websites. We advise you to consult the respective Privacy Policies of
          these third-party ad servers for more detailed information about their
          practices and instructions on how to opt out of certain options.
        </p>

        {/* Consent */}
        <h2 className="text-xl font-semibold text-white mt-8 mb-2">
          Consent
        </h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree
          to its terms.
        </p>

      </div>
    </section>
  );
}
