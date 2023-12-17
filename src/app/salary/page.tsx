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
  { id: 1, status: 'Government', code: '00010101' },
  { id: 2, status: 'Corporate', code: '00020102'  },
  { id: 3, status : 'Other', code: '00030103' },
]

const Salary = () => {
  const [salary, setSalary] = useState<number>(0);
  const [selectedEmploymentStatus, setSelectedEmploymentStatus] = useState(null);

  const [annualSal, setAnnualSal] = useState<number>(0);
  const [result, setResult] = useState<{ id?: number, min?: number, max?: number, 
        fixTax?: number; taxRate?: number }>({});
  const [totalTax, setTotalTax] = useState<{fixedTax: number, varTax: number}>({fixedTax: 0, varTax: 0});

  
  const taxCalc = (salary: number) => {
    let annualSal = salary * 12;
    let result: {id?: number, min?: number, max?: number, 
                fixTax?: number; taxRate?: number } = {};
    let tax : {fixedTax: number; varTax: number};

    for (const slab of taxSlab) {
      if (annualSal >= slab.min && annualSal <= slab.max) {
        result = {id: slab.id, min: slab.min, max: slab.max, 
                  fixTax: slab.fixTax, taxRate: slab.taxRate };
      
        break;
      }
    }

    tax = {fixedTax: result.fixTax || 0,
      varTax: parseInt(((annualSal - (result.min || 0)) * (result.taxRate || 0)).toFixed(0))
    };
    setAnnualSal(annualSal);
    setResult(result);
    setTotalTax(tax)

  };

  const handleClick = (salary: number) => {
    if (salary <= 0 || !selectedEmploymentStatus) {
      console.log(salary, selectedEmploymentStatus);
      alert("Please enter a valid salary and select an employment status");
      return;
    }
    
    // Call your tax calculation function
    taxCalc(salary);
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
        <button onClick={() => handleClick(salary)}>Calculate</button>
        </div>


        <div className='flex '>
          <div className='w-48'>
              <p>Annual Income:</p>
              <p>Tax Rate: </p>
              <p>Fix Tax: </p>
              <p>Variable Tax: </p>
              <p>Total Tax: </p>
              <p>Monthly Deduction : </p>

          </div>
          <div className='text-right w-36'>
              <p> {annualSal.toLocaleString()}</p>
              <p> {((result.taxRate || 0) * 100).toLocaleString()}%</p>
              <p> {totalTax.fixedTax.toLocaleString()}</p>
              <p> {totalTax.varTax.toLocaleString()}</p>
              <p> {(totalTax.fixedTax + totalTax.varTax).toLocaleString()}</p>
              <p> {(((totalTax.fixedTax + totalTax.varTax) / 12).toFixed(0)).toLocaleString()}</p>

          </div>
        </div>
        </div>
    </div>
  );
};

export default Salary;
