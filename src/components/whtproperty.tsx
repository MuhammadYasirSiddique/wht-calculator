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

interface TaxSlabProperty {
  mid: number;
  sid: number;
  taxyear: number;
  min: number;
  max: number;
  fixtax: number;
  taxrate: number;
  status: string;
}

interface taxSlabProps {
  taxSlabProperty: TaxSlabProperty[];
}

const taxCodeProperty = [
  { id: 1, section: "155", nature: "Adjustable", code: "64080001" },
];

const Property = ({ taxSlabProperty }: taxSlabProps) => {
  // console.log(taxSlabProperty, " from Property")
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const [month, setMonth] = useState<number>(0);
  const [rent, setRent] = useState<number>(0);
  const [taxYear, setTaxYear] = useState<number>(0);
  const [regStatus, setRegStatus] = useState<string>("");
  const [filingStatus, setFilingStatus] = useState<string>("");

  const [annualRent, setAnnualRent] = useState<number>(0);
  const [result, setResult] = useState<{
    id?: number;
    min?: number;
    max?: number;
    fixTax?: number;
    taxrate?: number;
    taxyear?: number;
    regStatus?: string;
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

  const [dmonth, setDmonth] = useState<number>(0);
  const [drate, setDrate] = useState<number | undefined>(0);

  const taxCalc = (
    rent: number,
    month: number,
    taxYear: number,
    status: string
  ) => {
    let annualRent = rent * month;
    let result: {
      id?: number;
      min?: number;
      max?: number;
      fixTax?: number;
      taxrate?: number;
      taxyear?: number;
      regStatus?: string;
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

    if (annualRent > 999999999) {
      toast.error(
        "Rent Anount is out of range. Value cannot be greater than 999,999,999"
      );
      return;
    }

    // console.log(taxYear, " ")
    const filteredSlabs: TaxSlabProperty[] = Object.values(
      taxSlabProperty
    ).filter(
      (slab) => slab.taxyear === Number(taxYear) && slab.status === regStatus
    );

    // console.log(`Filtered Slab for ${taxYear} and ${status} `, filteredSlabs)

    for (const slab of filteredSlabs) {
      if (
        annualRent >= slab.min &&
        annualRent <= slab.max &&
        Number(taxYear) === slab.taxyear
      ) {
        result = {
          id: slab.mid,
          min: slab.min,
          max: slab.max,
          fixTax: slab.fixtax,
          taxrate: slab.taxrate,
          taxyear: slab.taxyear,
          regStatus: slab.status,
        };

        break;
      }
    }
    setResult(result);
    setDrate(result.taxrate);
    // console.log(result.regStatus)

    // console.log(result.taxrate)

    for (const code of taxCodeProperty) {
      taxCode = {
        id: code.id,
        section: code.section,
        nature: code.nature,
        code: code.code,
      };
      break;
    }
    setTaxCode(taxCode);

    if (filingStatus === "nonfiler") {
      tax = {
        fixedTax: (result.fixTax || 0) * 2,
        varTax: parseInt(
          (
            (annualRent - (result.min || 0)) *
            (result.taxrate || 0) *
            2
          ).toFixed(0)
        ),
      };
      setTotalTax(tax);
      setDrate((result.taxrate || 0) * 2);
      // console.log(tax)
    }
    if (filingStatus === "filer") {
      tax = {
        fixedTax: result.fixTax || 0,
        varTax: parseInt(
          ((annualRent - (result.min || 0)) * (result.taxrate || 0)).toFixed(0)
        ),
      };
      setTotalTax(tax);
    }

    setAnnualRent(annualRent);

    // console.log(taxCode.status, taxCode.code)

    setDmonth(month);
  };

  const handleClick = async (
    salary: number,
    month: number,
    taxYear: number,
    regStatus: string
  ) => {
    // console.log(regStatus, " from handleClick")
    if (salary <= 0) {
      toast.error("Please enter rent payment greater than ZERO", {
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

    if (!month) {
      toast.error(
        "Please select number of monhts for which rent is being paid",
        {
          autoClose: 2500,
        }
      );
      return;
    }

    if (!regStatus) {
      toast.error("Please Select registration type of Taxpayer", {
        autoClose: 2500,
      });
      return;
    }

    if (!filingStatus) {
      toast.error("Please select the filing status of taxpayer", {
        autoClose: 2500,
      });
      return;
    }

    await new Promise((resolve) => setTimeout(resolve)); // Simulate an asynchronous operation
    // Call the taxCalc function
    taxCalc(salary, month, taxYear, regStatus);
    setLoading(false); // Set loading to false when the calculation is complete

    // taxCalc(salary, month, taxYear, regStatus);
  };
  React.useEffect(() => {
    // Check if taxSlab data is available
    if (taxSlabProperty && taxSlabProperty.length > 0) {
      setLoading(false); // Set loading to false when taxSlab data is available
    }
  }, [taxSlabProperty]);

  return (
    <div className="mx-auto max-w-2xl p-4">
      <div>
        <h1 className="text-center text-3xl font-bold my-5">
          Witholding tax on Payment of Rent of Immoveable Property
        </h1>
      </div>

      <div>{loading && <Loading />}</div>

      <div>
        {!loading && (
          <div className="flex flex-col items-center justify-center ">
            <div>
              <ToastContainer />
            </div>
            <div>
              <Input
                className="border w-[200px] md:w-[250px] shadow-xl"
                type="text"
                placeholder="Enter Monthly Rent"
                pattern="[0-9]*"
                onChange={(e) => setRent(parseInt(e.target.value))}
              />
            </div>
            <div className="md:flex gap-2 ">
              <div className="">
                <Select onValueChange={(e: any) => setTaxYear(e)}>
                  <SelectTrigger className=" w-[200px] md:w-[106px] my-2 shadow-xl ">
                    <SelectValue placeholder="Tax Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select onValueChange={(e: any) => setMonth(e)}>
                  <SelectTrigger className=" w-[200px] md:w-[132px] my-2 shadow-xl ">
                    <SelectValue placeholder="No of Months" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="9">9</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="11">11</SelectItem>
                    <SelectItem value="12">12</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="md:flex gap-2 ">
              <div>
                <Select onValueChange={(e: any) => setRegStatus(e)}>
                  <SelectTrigger className=" w-[200px] md:w-[120px] my-2 shadow-xl ">
                    <SelectValue placeholder="Reg: Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ind">Individual / AOP</SelectItem>
                    <SelectItem value="Com">Company</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select onValueChange={(e: any) => setFilingStatus(e)}>
                  <SelectTrigger className=" w-[200px] md:w-[120px] my-2 shadow-xl ">
                    <SelectValue placeholder="Filing Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="filer">Filer</SelectItem>
                    <SelectItem value="nonfiler">Non Filer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Button
                className="mt-2 w-[200px] md:w-[250px] shadow-xl"
                onClick={() =>
                  handleClick(rent, month, Number(taxYear), regStatus)
                }
              >
                Calculate
              </Button>
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
                      {annualRent.toLocaleString()}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tax Rate:</TableCell>
                    <TableCell className="text-right">
                      {((drate || 0) * 100).toLocaleString()}%
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
                      Monthly Deduction( for {dmonth} month(s))
                    </TableCell>
                    <TableCell className="text-right font-bold text-rose-600">
                      {(
                        (Number(totalTax.fixedTax) + Number(totalTax.varTax)) /
                        dmonth
                      )
                        .toFixed(0)
                        .toLocaleString()}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <h1 className="text-center text-gray-400">
                Information pertains to PSID / eFiling{" "}
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

export default Property;
