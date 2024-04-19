import React from "react";

const SupportCenter = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-center mb-8">
          Support Center
        </h1>

        <div className="mb-8">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
            Frequently Asked Questions (FAQs):
          </h2>
          <ul className="list-disc pl-4">
            <li className="text-md md:text-lg lg:text-xl leading-relaxed mb-4">
              <strong>How do I use the WHT Calculator?</strong> <br />
              To use the WHT Calculator, simply enter your income details and
              select the relevant sections of the Income Tax Ordinance 2001. The
              calculator will provide accurate withholding tax calculations
              based on your inputs.
            </li>
            <li className="text-md md:text-lg lg:text-xl leading-relaxed mb-4">
              <strong>Is the WHT Calculator free to use?</strong> <br />
              Yes, the WHT Calculator is completely free to use. You can access
              it anytime from our website.
            </li>
            <li className="text-md md:text-lg lg:text-xl leading-relaxed mb-4">
              <strong>How can I get support?</strong> <br />
              If you need assistance or have any questions, you can contact our
              support team by fill out the contact form on the Contact Us page.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
            Contact US:
          </h2>
          <p className="text-md md:text-lg lg:text-xl leading-relaxed mb-4">
            Fill the Contact form on Contact Us page to get in touch with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportCenter;
