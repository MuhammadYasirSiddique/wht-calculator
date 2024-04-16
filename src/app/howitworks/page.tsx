import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          How It Works
        </h1>

        <div className="text-justify">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
            WHT Calculator simplifies the process of calculating withholding tax
            obligations in Pakistan. Here is how it works:
          </p>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            1. Enter Income Details:
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
            Begin by entering your income details such as salary, contract
            payments, service fees, or other income streams into the calculator.
          </p>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            2. Select the Relevant tax year and Section:
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
            Refine your search by selecting the appropriate tax year and
            sections from the Income Tax Ordinance 2001 that pertain to your
            income type. Further details will be requested by the calculator to
            ensure accuracy. Using this data and relevant provisions, the
            calculator will execute the necessary computations.
          </p>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            3. Get Accurate Calculations:
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
            The WHT Calculator will provide you with accurate withholding tax
            calculations based on the entered income details and selected tax
            sections and codes for efiling.
          </p>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            4. Review and Confirm:
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
            Review the calculated withholding tax amount and ensure it aligns
            with your expectations. Confirm the calculations before proceeding
            with any tax deductions.
          </p>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            5. Generate Reports:
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
            We are currently developing the reports section, which will soon be
            available for download. This will allow you to easily keep a record
            of your calculations for future reference.
          </p>

          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
            Start using WHT Calculator today to streamline your withholding tax
            calculations and ensure compliance with tax regulations in Pakistan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
