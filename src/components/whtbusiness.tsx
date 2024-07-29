"use client";
import CustomScript from "@/components/CustomScript";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
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
import Section153 from "./whtbusiness/Section153";
import Section236A from "./whtbusiness/Section236A";

interface TaxSlabBusiness {
  mid: number;
  taxyear: number;
  sid: number;
  paymentsection: string;
  paymenttype: string;
  regstatus: string;
  residency: string;
  commodity: string;
  taxrate: number;
  psidsection: string;
  efilingcode: string;
  taxnature: string;
  status: string;
}

interface taxSlabProps {
  TaxSlabBusiness: TaxSlabBusiness[];
}

const Business = ({ TaxSlabBusiness }: taxSlabProps) => {
  // console.log(TaxSlabBusiness);
  // const [loading, setLoading] = useState(true); // Set loading to true initially
  const [amount, setAmount] = useState<number>(0);
  const [payment, setPayment] = useState<number>(0);
  const [taxYear, setTaxYear] = useState<number>(0);
  const [paymentSection, setPaymentSection] = useState<string>("");
  const [paymentType, setPaymentType] = useState<string>("");
  const [regStatus, setRegStatus] = useState<string>("");
  const [filingStatus, setFilingStatus] = useState<string>("");
  const [residency, setResidency] = useState<string>("");
  const [commodity, setCommodity] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [renderTaxRate, setRenderTaxRate] = useState<number>(0);
  const [renderPSIDsection, setRenderPSIDsawection] = useState<string>("");
  const [renderPaymentNature, setRenderPaymentNature] = useState<string>("");
  const [renderEfilingCode, setRenderEfilingCode] = useState<string>("");

  const taxCalc = (
    amount: number,
    taxYear: number,
    paymentSection: string,
    regStatus: string,
    filingStatus: string,
    paymentType: string,
    commodity: string
  ) => {
    setPayment(amount);
    let result: {
      mid: number;
      taxyear: number;
      taxrate: number;
      psidsection: string;
      efilingcode: string;
      taxnature: string;
    } = {
      mid: 0,
      taxyear: 0,
      taxrate: 0,
      psidsection: "",
      efilingcode: "",
      taxnature: "",
    };

    if (amount > 999999999) {
      toast.error(
        "Payment is out of range. Value cannot be greater than 999,999,999"
      );
      return;
    }
    console.log(taxYear);
    console.log(paymentSection, "in Tax Calc");
    const filteredSlabs: TaxSlabBusiness[] = Object.values(
      TaxSlabBusiness
    ).filter((taxslab) => {
      console.log("slab.taxyear:", taxslab.taxyear);
      return (
        taxslab.taxyear === Number(taxYear) &&
        taxslab.paymentsection === paymentSection &&
        taxslab.regstatus === regStatus &&
        taxslab.paymenttype === paymentType &&
        taxslab.commodity === commodity
      );
    });

    // console.log("paymentsection:", paymentSection);
    console.log(JSON.parse(JSON.stringify(filteredSlabs)));

    for (const slab of filteredSlabs) {
      result = {
        mid: slab.mid,
        taxyear: slab.taxyear,
        taxrate: slab.taxrate,
        psidsection: slab.psidsection,
        efilingcode: slab.efilingcode,
        taxnature: slab.taxnature,
      };

      break;
    }

    // console.log(result.psidsection);
    if (filingStatus === "nonfiler") {
      setRenderTaxRate(result.taxrate * 2);
    } else {
      setRenderTaxRate(result.taxrate);
    }

    setRenderPSIDsawection(result.psidsection);
    setRenderPaymentNature(result.taxnature);
    setRenderEfilingCode(result.efilingcode);
  };

  const handleClick = async (
    amount: number,
    taxYear: number,
    paymentSection: string,
    // residency: string,
    regStatus: string,
    filingStatus: string,
    paymentType: string,
    commodity: string
  ) => {
    // console.log(regStatus, " from handleClick");

    if (amount <= 0) {
      toast.error("Please enter Amount greater than ZERO", {
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
    // console.log(paymentSection, "Handle Click");
    if (!paymentSection) {
      toast.error("Please select the Payment Section", {
        autoClose: 2500,
      });
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

    if (!paymentType) {
      toast.error("Please select the Paymnet Type", {
        autoClose: 2500,
      });
      return;
    }

    if (!commodity) {
      toast.error("Please select the Service or Commodity Type", {
        autoClose: 2500,
      });
      return;
    }

    // await new Promise((resolve) => setTimeout(resolve)); // Simulate an asynchronous operation
    // Call the taxCalc function
    // taxCalc(amount, taxYear, regStatus);
    // setLoading(false); // Set loading to false when the calculation is complete

    taxCalc(
      amount,
      taxYear,
      paymentSection,
      regStatus,
      filingStatus,
      paymentType,
      commodity
    );
  };
  // React.useEffect(() => {
  //   // Check if taxSlab data is available
  //   if (TaxSlabBusiness && TaxSlabBusiness.length > 0) {
  //     setLoading(false); // Set loading to false when taxSlab data is available
  //   }
  // }, [TaxSlabBusiness]);

  return (
    <div className="mx-auto max-w-2xl p-4">
      <div>
        <h1 className="text-center text-3xl font-bold my-5">
          Witholding tax on Payment of Goods and Services
        </h1>
      </div>

      {/* <div>{loading && <Loading />}</div> */}

      <div>
        {/* {!loading && ( */}
        <div className="flex flex-col items-center justify-center ">
          {/* <div className="flex gap-4 justify-center"> */}
          <div className="mt-6">
            <div>
              <ToastContainer />
            </div>
            <div>
              <Input
                className="border w-[200px] md:w-[275px] shadow-xl"
                type="text"
                placeholder="Enter Gross Payable Amount"
                pattern="[0-9]*"
                onChange={(e) => setAmount(parseInt(e.target.value))}
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
              <div className="">
                <Select onValueChange={(e: any) => setPaymentSection(e)}>
                  <SelectTrigger className=" w-[200px] md:w-[160px] my-2 shadow-xl ">
                    <SelectValue placeholder="Payment Section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="153">
                      153-Payment of Goods and Serives
                    </SelectItem>
                    <SelectItem value="236A">
                      236A-Advance Tax on Sale by Auction
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              {paymentSection === "153" && (
                <Section153
                  paymentType={paymentType}
                  commodity={commodity}
                  regStatus={regStatus}
                  setPaymentType={setPaymentType}
                  setCommodity={setCommodity}
                  setRegStatus={setRegStatus}
                  setFilingStatus={setFilingStatus}
                  // setMessage={setMessage}
                />
              )}
              {paymentSection === "236A" && (
                <Section236A
                  paymentType={paymentType}
                  commodity={commodity}
                  regStatus={regStatus}
                  setPaymentType={setPaymentType}
                  setCommodity={setCommodity}
                  setRegStatus={setRegStatus}
                  setFilingStatus={setFilingStatus}
                />
              )}
            </div>
            {message && <div className="mt-4 text-red-500">{message}</div>}
            <div>
              <Button
                className="mt-2 w-[200px] md:w-[275px] shadow-xl"
                onClick={() =>
                  handleClick(
                    amount,
                    Number(taxYear),
                    paymentSection,
                    regStatus,
                    filingStatus,

                    paymentType,
                    commodity
                  )
                }
              >
                Calculate
              </Button>
            </div>
          </div>

          <div>
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
                    <TableCell className="font-medium">Gross Payment</TableCell>
                    <TableCell className="text-right">
                      {payment.toLocaleString()}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tax Rate</TableCell>
                    <TableCell className="text-right">
                      {renderTaxRate.toLocaleString()}%
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Total Tax</TableCell>
                    <TableCell className="text-right">
                      {(payment * renderTaxRate) / 100}
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
                      {renderPSIDsection}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Payment Nature
                    </TableCell>
                    <TableCell className="text-right">
                      {renderPaymentNature}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Tax Code (eFiling)
                    </TableCell>
                    <TableCell className="text-right">
                      {renderEfilingCode}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Business;
