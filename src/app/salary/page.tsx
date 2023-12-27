// 'use client'  

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { useState } from 'react';
// import * as React from "react"
// import  { Toaster } from 'react-hot-toast';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"



// const taxSlab = [
//   { mid: 1, id: 1 , taxyear: 2024, min: 0, max: 600000, fixTax: 0, taxRate: 0 },
//   { mid: 2, id: 2, taxyear: 2024, min: 600001, max: 1200000, fixTax: 0, taxRate: 0.025 },
//   { mid: 3, id: 3, taxyear: 2024, min: 1200001, max: 2400000, fixTax: 15000, taxRate: 0.125 },
//   { mid: 4, id: 4, taxyear: 2024, min: 2400001, max: 3600000, fixTax: 165000, taxRate: 0.225 },
//   { mid: 5, id: 5, taxyear: 2024, min: 3600001, max: 6000000, fixTax: 435000, taxRate: 0.275 },
//   { mid: 6, id: 6, taxyear: 2024, min: 6000001, max: 999999999, fixTax: 1095000, taxRate: 0.35 },

//   { mid: 7, id: 1, taxyear: 2023, min: 0, max: 600000, fixTax: 0, taxRate: 0 },
//   { mid: 8, id: 2, taxyear: 2023, min: 600001, max: 1200000, fixTax: 0, taxRate: 0.025 },
//   { mid: 9, id: 3, taxyear: 2023, min: 1200001, max: 2400000, fixTax: 15000, taxRate: 0.125 },
//   { mid: 10, id: 4, taxyear: 2023, min: 2400001, max: 3600000, fixTax: 165000, taxRate: 0.20 },
//   { mid: 11, id: 5, taxyear: 2023, min: 3600001, max: 6000000, fixTax: 405000, taxRate: 0.25 },
//   { mid: 12, id: 6, taxyear: 2023, min: 6000001, max: 12000000, fixTax: 1005000, taxRate: 0.325 },
//   { mid: 13, id: 7, taxyear: 2023, min: 12000001, max: 999999999, fixTax: 2955000, taxRate: 0.35 }
// ];

// const taxCodeSalary = [
//   { id: 1, status: 'Federal Govt', section: '149/1', nature: 'Adjustable' , code: '64020001' },
//   { id: 2, status: 'Provincial Govt', section: '149/2', nature: 'Adjustable', code: '64020002'  },
//   { id: 3, status : 'Other', section: '149/3',nature: 'Adjustable', code: '64020004' },
// ]


// const Salary = () => {
//   const [salary, setSalary] = useState<number>(0);
//   const [taxYear, setTaxYear] = useState<number>(0);
//   const [selectedEmploymentStatus, setSelectedEmploymentStatus] = useState(null || '');

//   const [annualSal, setAnnualSal] = useState<number>(0);
//   const [result, setResult] = useState<{ id?: number, min?: number, max?: number, 
//         fixTax?: number; taxRate?: number }>({});
//   const [totalTax, setTotalTax] = useState<{fixedTax: number, varTax: number}>({fixedTax: 0, varTax: 0});
//   const [taxCode, setTaxCode] = useState<{id?: number, status?: string, section?: string, nature?: string ,code?: string}>({});
  
//   const taxCalc = (salary: number, selectedEmploymentStatus: string, taxYear: number) => {
//     let annualSal = salary * 12;
//     let result: {id?: number, min?: number, max?: number, 
//                 fixTax?: number; taxRate?: number, taxyear?: number } = {};
//     let tax : {fixedTax: number; varTax: number};
//     let taxCode: {id?: number, status?: string, section: string, nature?: string ,code?: string} = {
//       section: ''
//     };

    

//     if(annualSal > 999999999){
//       toast.error('Salary out of range. Value cannot be greater than 999,999,999');
//       return;
//     }

//     const filteredSlabs = taxSlab.filter(slab => slab.taxyear === Number(taxYear));
// // console.log(filteredSlabs)
    
//     for (const slab of filteredSlabs) {

//       if (annualSal >= slab.min && annualSal <= slab.max && Number(taxYear) === slab.taxyear) {
//         result = {id: slab.id, min: slab.min, max: slab.max, 
//                   fixTax: slab.fixTax, taxRate: slab.taxRate, taxyear: slab.taxyear};
          
//         break;
//       }

//     }
//     setResult(result);
//     // console.log(result)

//     for(const code of taxCodeSalary){
//       if(selectedEmploymentStatus === code.status){
//         taxCode = {id: code.id, status: code.status, section: code.section, nature: code.nature, code: code.code,};
//         break;
//       }
//     }
//     setTaxCode(taxCode)

//     tax = {fixedTax: result.fixTax || 0,
//       varTax: parseInt(((annualSal - (result.min || 0)) * (result.taxRate || 0)).toFixed(0))
//     };
//     setAnnualSal(annualSal);
    
//     setTotalTax(tax)
    
//     // console.log(taxCode.status, taxCode.code)

//   };

//   const handleClick = (salary: number, selectedEmploymentStatus: string, taxYear: number) => {
//     // if (salary <= 0 || !selectedEmploymentStatus || taxYear == 0){
      
//     //   toast.error("Please enter a valid salary and select an employment status", {
//     //     autoClose: 2500,
//     //   });
//     //   return;
//     // }

    

//     if (salary <= 0 ){
      
//       toast.error("Please enter salary greater than ZERO", {
//         autoClose: 2500,
//       });
//       return;
//     }

//     if (!selectedEmploymentStatus){
      
//       toast.error("Please select a valid employment status", {
//         autoClose: 2500,
//       });
//       return;
//     }

//     if ( taxYear == 0 ) {
      
//       toast.error("Please select relevant Tax Year", {
//         autoClose: 2500,
//       });
//       return;
//     }





//     console.log(selectedEmploymentStatus)
    
//     taxCalc(salary, selectedEmploymentStatus, taxYear);
//   };


//   return (
//     <div className="mx-auto max-w-2xl p-4">
//       <div>
//           <h1 className="text-center text-3xl font-bold my-5">Calculate Witholding tax on Salary</h1>
//       </div>
//       <div className="flex flex-col items-center justify-center ">
        
//         <div>
          
//           <Select  
          
//           onValueChange={(e: React.SetStateAction<string>) => setSelectedEmploymentStatus(e)}
//           >
//             <SelectTrigger className="w-[200px] md:w-[250px] my-2 shadow-xl">
//               <SelectValue placeholder="Employment Status?" />
//             </SelectTrigger>
//             <SelectContent > 
//               <SelectItem value="Federal Govt">Federal Govt</SelectItem>
//               <SelectItem value="Provincial Govt">Provincial Govt</SelectItem>
//               <SelectItem value="Other">Other</SelectItem>
//             </SelectContent>
//           </Select>



//         </div>
//         <div><ToastContainer/></div>
//         <div>

//           <Input           
//           className="border w-[200px] md:w-[250px] shadow-xl"
//           type="text"
//           placeholder='Enter Per Month Salary'
//           pattern="[0-9]*"
//           onChange={(e) => setSalary(parseInt(e.target.value))}
//           />
         
//         </div>
//         <div className='md:flex gap-2 '>
//             <div className=''>
//               <Select  
//                 onValueChange={(e:any) => setTaxYear(e)}
                
//               >
//                 <SelectTrigger className=" w-[200px] md:w-[98px] my-2 shadow-xl ">
//                   <SelectValue placeholder="Tax Year?"  />
//                 </SelectTrigger>
//                 <SelectContent > 
//                   <SelectItem value="2024">2024</SelectItem>
//                   <SelectItem value="2023">2023</SelectItem>
                    
//                 </SelectContent>
//               </Select>
//             </div>
//             <div>
//               <Button className='mt-2 w-[200px] md:w-[148px] shadow-xl'
//               onClick={() => handleClick(salary, selectedEmploymentStatus, taxYear)}
//               >Calculate</Button>
//               </div>      
//             </div>

//           <div className='mt-5 shadow-2xl'>
//             <h1 className='text-center text-gray-400 '>Witholding Tax Calculation </h1>

//             <Table className='w=full md:w-[400px] '>
//               {/* <TableCaption>Witholding Tax Calculation</TableCaption> */}
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead className="w-full md:w-[300px]">Descripton</TableHead>
                      
//                       <TableHead className="text-right">Amount</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                 <TableBody>
//                     <TableRow>
//                       <TableCell className="font-medium">Annual Income</TableCell>
//                       <TableCell className="text-right">{annualSal.toLocaleString()}</TableCell>
//                      </TableRow>
//                      <TableRow>
//                       <TableCell className="font-medium">Tax Rate:</TableCell>
//                       <TableCell className="text-right">{((result.taxRate || 0) * 100).toLocaleString()}%</TableCell>
//                      </TableRow>
//                      <TableRow>
//                       <TableCell className="font-medium">Fixed Tax</TableCell>
//                       <TableCell className="text-right">{totalTax.fixedTax.toLocaleString()}</TableCell>
//                      </TableRow>
//                      <TableRow>
//                       <TableCell className="font-medium">Variable Tax</TableCell>
//                       <TableCell className="text-right">{totalTax.varTax.toLocaleString()}</TableCell>
//                      </TableRow>
//                      <TableRow>
//                       <TableCell className=" font-bold">Total Tax</TableCell>
//                       <TableCell className="text-right font-bold">{(totalTax.fixedTax + totalTax.varTax).toLocaleString()}</TableCell>
//                      </TableRow>
//                      <TableRow>
//                       <TableCell className="font-bold text-rose-600">Monthly Deduction( for 12 months)</TableCell>
//                       <TableCell className="text-right font-bold text-rose-600">
//                         {(((totalTax.fixedTax + totalTax.varTax) / 12).toFixed(0)).toLocaleString()}</TableCell>
//                      </TableRow>
//               </TableBody>
//             </Table>
//             <h1 className='text-center text-gray-400'>Information pertains to PSID eFiling </h1>

//             <Table>
//               {/* <TableCaption>Information pertains to PSID eFiling</TableCaption> */}
                  
//                 <TableBody>
                    
//                      <TableRow>
//                       <TableCell className="font-medium">Payment Section(PSID)</TableCell>
//                       <TableCell className="text-right">{taxCode.section}</TableCell>
//                      </TableRow>
//                      <TableRow>
//                       <TableCell className="font-medium">Payment Nature</TableCell>
//                       <TableCell className="text-right">{taxCode.nature}</TableCell>
//                      </TableRow>
//                      <TableRow>
//                       <TableCell className="font-medium">Tax Code (eFiling)</TableCell>
//                       <TableCell className="text-right">{taxCode.code}</TableCell>
//                      </TableRow>
                    
//               </TableBody>
//             </Table>

//            </div>




//         </div>
//     </div>
//   );
// };

// export default Salary;

import Salary from "@/components/whtsalary"

interface TaxSlab {
  id: number;
  taxyear: number;
  min: number;
  max: number;
  fixTax: number;
  taxRate: number;
}

const getTaxSlab = async() =>{
try {
    const res = await fetch("http://127.0.0.1:3000/api/taxslab", {
        method : "GET",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json"
        }
    })
    
    if (!res.ok) {
        throw new Error("Failed to fetch the data")
    };
    const result = await res.json()
    return result

} catch (error) {
    console.log(error)
}
}

const Home =async() =>{

    const res = await getTaxSlab();

   const taxSlab = res    
    
return(
    <div>
        <Salary taxSlab = {taxSlab} />
    </div>
)}

export default Home;