"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import * as React from "react";
import { Toaster } from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Loading from "./loader";

interface TaxSlab {
  mid: number;
  sid: number;
  taxyear: number;
  min: number;
  max: number;
  fixtax: number;
  taxrate: number;
  status?: string | null; // Add status prop with optional type
}

interface taxSlabProps {
  taxSlab: TaxSlab[];
}

const taxCodeSalary = [
  {
    id: 1,
    status: "Federal Govt",
    section: "149/1",
    nature: "Adjustable",
    code: "64020001",
  },
  {
    id: 2,
    status: "Provincial Govt",
    section: "149/2",
    nature: "Adjustable",
    code: "64020002",
  },
  {
    id: 3,
    status: "Other",
    section: "149/3",
    nature: "Adjustable",
    code: "64020004",
  },
  {
    id: 4,
    status: "Corporate",
    section: "149/4",
    nature: "Adjustable",
    code: "64020003",
  },
];

const Salary = ({ taxSlab }: taxSlabProps) => {
  const [loading, setLoading] = useState(true); // Set loading to true initially

  const [salary, setSalary] = useState<number>(0);
  const [taxYear, setTaxYear] = useState<number>(0);
  const [selectedEmploymentStatus, setSelectedEmploymentStatus] = useState(
    null || ""
  );

  const [annualSal, setAnnualSal] = useState<number>(0);
  const [result, setResult] = useState<{
    id?: number;
    min?: number;
    max?: number;
    fixTax?: number;
    taxrate?: number;
  }>({});
  const [totalTax, setTotalTax] = useState<{
    fixedTax: number;
    varTax: number;
  }>({ fixedTax: 0, varTax: 0 });
  const [taxCode, setTaxCode] = useState<{
    id?: number;
    status?: string;
    section?: string;
    nature?: string;
    code?: string;
  }>({});

  const taxCalc = (
    salary: number,
    selectedEmploymentStatus: string,
    taxYear: number
  ) => {
    let annualSal = salary * 12;
    let result: {
      id?: number;
      min?: number;
      max?: number;
      fixTax?: number;
      taxrate?: number;
      taxyear?: number;
    } = {};
    let tax: { fixedTax: number; varTax: number };
    let taxCode: {
      id?: number;
      status?: string;
      section: string;
      nature?: string;
      code?: string;
    } = {
      section: "",
    };

    if (annualSal > 999999999) {
      toast.error(
        "Salary out of range. Value cannot be greater than 999,999,999"
      );
      return;
    }

    const filteredSlabs: TaxSlab[] = Object.values(taxSlab).filter(
      (slab) => slab.taxyear === Number(taxYear)
    );

    for (const slab of filteredSlabs) {
      if (
        annualSal >= slab.min &&
        annualSal <= slab.max &&
        Number(taxYear) === slab.taxyear
      ) {
        result = {
          id: slab.mid,
          min: slab.min,
          max: slab.max,
          fixTax: slab.fixtax,
          taxrate: slab.taxrate,
          taxyear: slab.taxyear,
        };

        break;
      }
    }
    // console.log("tax year", taxYear, typeof taxYear);

    // console.log("filteredSlabs", filteredSlabs, result);
    setResult(result);
    // console.log(result.taxrate)

    for (const code of taxCodeSalary) {
      if (selectedEmploymentStatus === code.status) {
        taxCode = {
          id: code.id,
          status: code.status,
          section: code.section,
          nature: code.nature,
          code: code.code,
        };
        break;
      }
    }
    setTaxCode(taxCode);

    tax = {
      fixedTax: result.fixTax || 0,
      varTax: parseInt(
        ((annualSal - (result.min || 0)) * (result.taxrate || 0)).toFixed(0)
      ),
    };
    setAnnualSal(annualSal);

    setTotalTax(tax);

    // console.log(taxCode.status, taxCode.code)
  };

  const handleClick = async (
    salary: number,
    selectedEmploymentStatus: string,
    taxYear: number
  ) => {
    if (salary <= 0) {
      toast.error("Please enter salary greater than ZERO", {
        autoClose: 2500,
      });
      return;
    }

    if (!selectedEmploymentStatus) {
      toast.error("Please select a valid employment status", {
        autoClose: 2500,
      });
      return;
    }

    if (taxYear == 0) {
      toast.error("Please select relevant Tax Year", {
        autoClose: 2500,
      });
      return;
    }

    // await new Promise((resolve) => setTimeout(resolve)); // Simulate an asynchronous operation
    // Call the taxCalc function
    // taxCalc(salary, selectedEmploymentStatus, taxYear);
    // setLoading(false); // Set loading to false when the calculation is complete

    taxCalc(salary, selectedEmploymentStatus, taxYear);
  };
  React.useEffect(() => {
    // Check if taxSlab data is available
    if (taxSlab && taxSlab.length > 0) {
      setLoading(false); // Set loading to false when taxSlab data is available
    }
  }, [taxSlab]);

  return (
    <div className="mx-auto max-w-2xl p-4">
      <div>
        <h1 className="text-center text-3xl font-bold my-5">
          Calculate Witholding tax on Salary
        </h1>
      </div>

      <div>{loading && <Loading />}</div>

      <div>
        {!loading && (
          <div className="flex flex-col items-center justify-center ">
            <div>
              <Select
                onValueChange={(e: React.SetStateAction<string>) =>
                  setSelectedEmploymentStatus(e)
                }
              >
                <SelectTrigger className="w-[200px] md:w-[250px] my-2 shadow-xl">
                  <SelectValue placeholder="Employment Status?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Federal Govt">Federal Govt</SelectItem>
                  <SelectItem value="Provincial Govt">
                    Provincial Govt
                  </SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                  <SelectItem value="Corporate">Corporate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <ToastContainer />
            </div>
            <div>
              <Input
                className="border w-[200px] md:w-[250px] shadow-xl"
                type="text"
                placeholder="Enter Per Month Salary"
                pattern="[0-9]*"
                onChange={(e) => setSalary(parseInt(e.target.value))}
              />
            </div>
            <div className="md:flex gap-2 ">
              <div className="">
                <Select onValueChange={(e: any) => setTaxYear(parseInt(e))}>
                  <SelectTrigger className=" w-[200px] md:w-[98px] my-2 shadow-xl ">
                    <SelectValue placeholder="Tax Year?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Button
                  className="mt-2 w-[200px] md:w-[148px] shadow-xl"
                  onClick={() =>
                    handleClick(salary, selectedEmploymentStatus, taxYear)
                  }
                >
                  Calculate
                </Button>
              </div>
            </div>

            <div className="mt-5 shadow-2xl">
              <h1 className="text-center text-gray-400 ">
                Witholding Tax Calculation{" "}
              </h1>

              <Table className="w=full md:w-[400px] ">
                {/* <TableCaption>Witholding Tax Calculation</TableCaption> */}
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-full md:w-[300px]">
                      Descripton
                    </TableHead>

                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Annual Income</TableCell>
                    <TableCell className="text-right">
                      {annualSal.toLocaleString()}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tax Rate:</TableCell>
                    <TableCell className="text-right">
                      {((result.taxrate || 0) * 100).toLocaleString()}%
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Fixed Tax</TableCell>
                    <TableCell className="text-right">
                      {totalTax.fixedTax.toLocaleString()}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Variable Tax</TableCell>
                    <TableCell className="text-right">
                      {totalTax.varTax.toLocaleString()}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className=" font-bold">Total Tax</TableCell>
                    <TableCell className="text-right font-bold">
                      {(
                        Number(totalTax.fixedTax) + Number(totalTax.varTax)
                      ).toLocaleString()}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-rose-600">
                      Monthly Deduction( for 12 months)
                    </TableCell>
                    <TableCell className="text-right font-bold text-rose-600">
                      {(
                        (Number(totalTax.fixedTax) + Number(totalTax.varTax)) /
                        12
                      )
                        .toFixed(0)
                        .toLocaleString()}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <h1 className="text-center text-gray-400">
                Information pertains to PSID eFiling{" "}
              </h1>

              <Table>
                {/* <TableCaption>Information pertains to PSID eFiling</TableCaption> */}

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Payment Section(PSID)
                    </TableCell>
                    <TableCell className="text-right">
                      {taxCode.section}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Payment Nature
                    </TableCell>
                    <TableCell className="text-right">
                      {taxCode.nature}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Tax Code (eFiling)
                    </TableCell>
                    <TableCell className="text-right">{taxCode.code}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Salary;
