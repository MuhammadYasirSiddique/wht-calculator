'use client'  

import React, { useState } from 'react';

const taxSlab = [
  { id: 1, min: 0, max: 600000, fixTax: 0, taxRate: 0 },
  { id: 2, min: 600001, max: 1200000, fixTax: 5000, taxRate: 0.025 },
  { id: 3, min: 1200001, max: 2400000, fixTax: 10000, taxRate: 0.05 },
  { id: 4, min: 2400001, max: 3600000, fixTax: 15000, taxRate: 0.075 },
  { id: 5, min: 3600001, max: 9999999999, fixTax: 20000, taxRate: 0.01 }
];

const taxCodeSalary = [
  { id: 1, status: 'Government', section: '149(1)', code: '00010101' },
  { id: 2, status: 'Corporate', section: '149(2)', code: '00020102'  },
  { id: 3, status : 'Others', section: '149(3)', code: '00030103' },
]

const Salary = () => {
  const [salary, setSalary] = useState<number>(0);
  const [selectedEmploymentStatus, setSelectedEmploymentStatus] = useState(null);

  const [annualSal, setAnnualSal] = useState<number>(0);
  const [result, setResult] = useState<{ id?: number, min?: number, max?: number, 
        fixTax?: number; taxRate?: number }>({});
  const [totalTax, setTotalTax] = useState<{fixedTax: number, varTax: number}>({fixedTax: 0, varTax: 0});
  const [taxCode, setTaxCode] = useState<{id?: number, status?: string, section?: string, code?: string}>({});
  
  const taxCalc = (salary: number, selectedEmploymentStatus: string) => {
    let annualSal = salary * 12;
    let result: {id?: number, min?: number, max?: number, 
                fixTax?: number; taxRate?: number } = {};
    let tax : {fixedTax: number; varTax: number};
    let taxCode: {id?: number, status?: string, section: string , code?: string};

    for (const slab of taxSlab) {
      if (annualSal >= slab.min && annualSal <= slab.max) {
        result = {id: slab.id, min: slab.min, max: slab.max, 
                  fixTax: slab.fixTax, taxRate: slab.taxRate };
      
        break;
      }
    }
    setResult(result);

    for(const code of taxCodeSalary){
      if(selectedEmploymentStatus === code.status){
        taxCode = {id: code.id, status: code.status, section: code.section , code: code.code,};
        break;
      }
    }
    setTaxCode(taxCode)

    tax = {fixedTax: result.fixTax || 0,
      varTax: parseInt(((annualSal - (result.min || 0)) * (result.taxRate || 0)).toFixed(0))
    };
    setAnnualSal(annualSal);
    
    setTotalTax(tax)
    
    console.log(taxCode.status, taxCode.code)

  };

  const handleClick = (salary: number, selectedEmploymentStatus: string) => {
    if (salary <= 0 || !selectedEmploymentStatus || selectedEmploymentStatus === 'Select') {
      console.log(salary, selectedEmploymentStatus);
      alert("Please enter a valid salary and select an employment status");
      return;
    }
    // console.log(selectedEmploymentStatus)
    // Call your tax calculation function
    taxCalc(salary, selectedEmploymentStatus);
  };


  return (
    <div className="items-center mt-5 ">
      <div>
        <h1 className="text-center">Salary</h1>
      </div>
      <div className="flex flex-col items-center justify-center ">
        
        <div>
          
          <label htmlFor="employmentStatus">Employment Status:</label>
          <select
          id="employmentStatus"
          onChange={(e) => setSelectedEmploymentStatus(e.target.value)}
        >
          <option value="Select">--Select--</option>
          <option value="Government">Government</option>
          <option value="Corporate">Corporate</option>
          <option value="Others">Others</option>
        </select>
        </div>
        <div>

          <input
          type="text"
          className="border border-black"
          placeholder='Enter Per Month Salary'
          pattern="[0-9]*"
          onChange={(e) => setSalary(parseInt(e.target.value))}
          />
        </div>
        <button onClick={() => handleClick(salary, selectedEmploymentStatus)}>Calculate</button>


        <div className='flex '>
          <div className='w-48'>
              <p>Annual Income:</p>
              <p>Tax Rate: </p>
              <p>Fix Tax: </p>
              <p>Variable Tax: </p>
              <p>Total Tax: </p>
              <p>Monthly Deduction : </p>
              <p>_________________________</p>
              <p>Employment Status</p>
              <p>Payment Section</p>
              <p>Tax Code</p>

          </div>
          <div className='text-right w-36'>
              <p> {annualSal.toLocaleString()}</p>
              <p> {((result.taxRate || 0) * 100).toLocaleString()}%</p>
              <p> {totalTax.fixedTax.toLocaleString()}</p>
              <p> {totalTax.varTax.toLocaleString()}</p>
              <p> {(totalTax.fixedTax + totalTax.varTax).toLocaleString()}</p>
              <p> {(((totalTax.fixedTax + totalTax.varTax) / 12).toFixed(0)).toLocaleString()}</p>
              <p>___________________</p>
              <p> {taxCode.status} </p>
              <p> {taxCode.section} </p>
              <p> {taxCode.code} </p>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Salary;
