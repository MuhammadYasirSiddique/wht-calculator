import React from "react";

const TermsOfUse = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-2xl lg:text-3xl font-bold text-center mb-8">
          Terms of Use
        </h1>
        <div className="text-justify">
          <p className="text-lg md:text-xl lg:text-xl leading-relaxed mb-8">
            By using WHT Calculator, you agree to comply with and be bound by
            the following terms and conditions of use. Please review these terms
            carefully. If you do not agree to these terms, you should not use
            this website.
          </p>

          <h2 className="text-xl md:text-xl lg:text-2xl font-bold mb-4">
            Disclaimer:
          </h2>
          <p className="text-lg md:text-xl lg:text-xl leading-relaxed mb-8">
            This calculator is provided for informational purposes only. While
            we strive to provide accurate results, WHT Calculator cannot
            guarantee the accuracy, completeness, or reliability of the
            information generated. Users are advised to consult with the
            relevant sections of the Income Tax Ordinance 2001 and Income Tax
            Rules 2002 or seek advice from a qualified tax consultant before
            making any financial decisions based on the calculations obtained
            from this website.
          </p>

          <h2 className="text-xl md:text-xl lg:text-2xl font-bold mb-4">
            Acceptable Use:
          </h2>
          <p className="text-lg md:text-xl lg:text-xl leading-relaxed mb-8">
            You agree to use WHT Calculator only for lawful purposes and in a
            manner consistent with all applicable laws and regulations. You may
            not use this website in any manner that could damage, disable,
            overburden, or impair the website or interfere with any other
            party's use and enjoyment of the website.
          </p>

          <h2 className="text-xl md:text-xl lg:text-2xl font-bold mb-4">
            Limitation of Liability:
          </h2>
          <p className="text-lg md:text-xl lg:text-xl leading-relaxed mb-8">
            In no event shall WHT Calculator or its affiliates be liable for any
            indirect, incidental, special, consequential, or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, arising out of or in connection with
            your use of this website.
          </p>

          <p className="text-lg md:text-xl lg:text-xl leading-relaxed mb-8">
            These terms and conditions are subject to change without notice.
            Your continued use of WHT Calculator after any changes to these
            terms and conditions will signify your acceptance of those changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
