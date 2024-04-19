import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8">
          About WHT Calculator
        </h1>

        <p className="text-lg md:text-xl lg:text-xl leading-relaxed mb-8 text-justify">
          Welcome to WHT Calculator, your comprehensive solution for calculating
          withholding tax obligations in Pakistan. Developed with the aim to
          streamline tax compliance for withholding agents, our platform
          empowers users to accurately deduct income tax at the source, adhering
          to the provisions outlined in the Income Tax Ordinance 2001.
        </p>

        <p className="text-lg md:text-xl lg:text-xl leading-relaxed mb-8 text-justify">
          At WHT Calculator, we understand the complexities involved in tax
          compliance, particularly for withholding agents who bear the
          responsibility of deducting taxes from various income sources. Our
          withholding tax calculator simplifies this process, providing users
          with precise calculations based on the relevant sections of the Income
          Tax Ordinance.
        </p>

        <div className="mb-8">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
            Key Features:
          </h2>
          <ul className="list-disc pl-4">
            <li className="text-lg md:text-xl lg:text-xl leading-relaxed mb-2">
              <strong>Accurate Calculations:</strong> Our calculator ensures
              accurate deductions by considering the specific provisions
              outlined in the Income Tax Ordinance 2001.
            </li>
            <li className="text-lg md:text-xl lg:text-xl leading-relaxed mb-2">
              <strong>Comprehensive Guidance:</strong> We go beyond basic
              calculations to offer comprehensive guidance on tax codes and
              reporting sections.
            </li>
            <li className="text-lg md:text-xl lg:text-xl leading-relaxed mb-2">
              <strong>User-Friendly Interface:</strong> Designed with simplicity
              in mind, our platform features a user-friendly interface that
              makes tax calculation and reporting intuitive and efficient.
            </li>
            <li className="text-lg md:text-xl lg:text-xl leading-relaxed mb-2">
              <strong>Up-to-Date Information:</strong> We stay abreast of
              changes to tax laws and regulations, ensuring that our platform
              reflects the latest updates and amendments.
            </li>
          </ul>
        </div>

        <p className="text-lg md:text-xl lg:text-xl leading-relaxed mb-8 text-justify">
          WHT Calculator is more than just a calculator, it is a tool for
          empowerment, enabling withholding agents to fulfill their tax
          obligations with confidence and ease. Whether you are a business
          owner, accountant, or tax professional, we are here to support you
          every step of the way. Join the thousands of users who trust WHT
          Calculator for their withholding tax calculations and reporting needs.
          Get started today and experience the difference in tax compliance made
          simple.
        </p>
      </div>
    </div>
  );
};

export default About;
