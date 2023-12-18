'use client'  

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import * as React from "react"
import  { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



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
    if (salary <= 0 || !selectedEmploymentStatus ) {
      
      toast.error("Please enter a valid salary and select an employment status", {
        autoClose: 2500,
      });
      return;
    }
    console.log(selectedEmploymentStatus)
    
    taxCalc(salary, selectedEmploymentStatus);
  };


  return (
    <div className="items-center mt-5 ">
      <div>
        <h1 className="text-center">Salary</h1>
      </div>
      <div className="flex flex-col items-center justify-center ">
        
        <div>
          
          <Select  
          
          onValueChange={(e) => setSelectedEmploymentStatus(e)}
          >
            <SelectTrigger className="w-[250px] my-2">
              <SelectValue placeholder="Employment Status?" />
            </SelectTrigger>
            <SelectContent > 
              <SelectItem value="Government">Government</SelectItem>
              <SelectItem value="Corporate">Corporate</SelectItem>
              <SelectItem value="Others">Others</SelectItem>
            </SelectContent>
          </Select>



        </div>
        <div><ToastContainer/></div>
        <div>

          <Input           
          className="border w-[250px]"
          type="text"
          placeholder='Enter Per Month Salary'
          pattern="[0-9]*"
          onChange={(e) => setSalary(parseInt(e.target.value))}
          />
         
        </div>
        
        <Button className='mt-2 w-[250px]'
        onClick={() => handleClick(salary, selectedEmploymentStatus)}
        >Calculate</Button>

          <div className='mt-5'>
            <h1 className='text-center text-gray-400'>Witholding Tax Calculation </h1>
            <Table>
              {/* <TableCaption>Witholding Tax Calculation</TableCaption> */}
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[300px]">Descripton</TableHead>
                      
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Annual Income</TableCell>
                      <TableCell className="text-right">{annualSal.toLocaleString()}</TableCell>
                     </TableRow>
                     <TableRow>
                      <TableCell className="font-medium">Tax Rate:</TableCell>
                      <TableCell className="text-right">{((result.taxRate || 0) * 100).toLocaleString()}%</TableCell>
                     </TableRow>
                     <TableRow>
                      <TableCell className="font-medium">Fixed Tax</TableCell>
                      <TableCell className="text-right">{totalTax.fixedTax.toLocaleString()}</TableCell>
                     </TableRow>
                     <TableRow>
                      <TableCell className="font-medium">Variable Tax</TableCell>
                      <TableCell className="text-right">{totalTax.varTax.toLocaleString()}</TableCell>
                     </TableRow>
                     <TableRow>
                      <TableCell className="font-medium">Total Tax</TableCell>
                      <TableCell className="text-right">{(totalTax.fixedTax + totalTax.varTax).toLocaleString()}</TableCell>
                     </TableRow>
                     <TableRow>
                      <TableCell className="font-medium">Monthly Deductions</TableCell>
                      <TableCell className="text-right">{(((totalTax.fixedTax + totalTax.varTax) / 12).toFixed(0)).toLocaleString()}</TableCell>
                     </TableRow>
              </TableBody>
            </Table>
            <h1 className='text-center text-gray-400'>Information pertains to PSID eFiling </h1>

            <Table>
              {/* <TableCaption>Information pertains to PSID eFiling</TableCaption> */}
                  
                <TableBody>
                    {/* <TableRow>
                      <TableCell className="font-medium">Employment Status</TableCell>
                      <TableCell className="text-right">{taxCode.status}</TableCell>
                     </TableRow> */}
                     <TableRow>
                      <TableCell className="font-medium">Payment Section(PSID)</TableCell>
                      <TableCell className="text-right">{taxCode.section}</TableCell>
                     </TableRow>
                     <TableRow>
                      <TableCell className="font-medium">Tax Code (eFiling)</TableCell>
                      <TableCell className="text-right">{taxCode.code}</TableCell>
                     </TableRow>
                    
              </TableBody>
            </Table>

           </div>




        </div>
    </div>
  );
};

export default Salary;
