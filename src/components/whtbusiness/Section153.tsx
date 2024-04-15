import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Section153Props {
  paymentType: string;
  commodity: string;
  regStatus: string;
  setPaymentType: (value: string) => void;
  setCommodity: (value: string) => void;
  setRegStatus: (value: string) => void;
  setFilingStatus: (value: string) => void;
}

const Section153: React.FC<Section153Props> = ({
  paymentType,
  commodity,
  regStatus,
  setPaymentType,
  setCommodity,
  setRegStatus,
  setFilingStatus,
}) => {
  //   console.log(paymentType, "153");
  return (
    <div>
      <div className="">
        <Select onValueChange={(e: any) => setPaymentType(e)}>
          <SelectTrigger className=" w-[200px] md:w-[275px] my-2 shadow-xl ">
            <SelectValue placeholder="Type of Payment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Goods">Goods</SelectItem>
            <SelectItem value="Services">Services</SelectItem>
            <SelectItem value="Contract">Contract</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="">
        <Select onValueChange={(e: any) => setCommodity(e)}>
          <SelectTrigger className=" w-[200px] md:w-[275px] my-2 shadow-xl ">
            <SelectValue placeholder="Srvice or Commodity" />
          </SelectTrigger>
          {paymentType === "Goods" && (
            <SelectContent>
              <SelectItem value="Other Goods">Other Goods</SelectItem>
              <SelectItem value="Rice">Rice</SelectItem>
              <SelectItem value="Edible Oil">Edible Oil</SelectItem>
            </SelectContent>
          )}
          {paymentType === "Services" && (
            <SelectContent>
              <SelectItem value="Other Services">Other Services</SelectItem>
              <SelectItem value="Media (Print Electronic)">
                Print & Electronic Media
              </SelectItem>
              <SelectItem value="transport services">
                Transport Service
              </SelectItem>
            </SelectContent>
          )}
          {paymentType === "Contract" && (
            <SelectContent>
              <SelectItem value="Sports Person">Sports Person</SelectItem>
              <SelectItem value="Other Contract">Other Contract</SelectItem>
            </SelectContent>
          )}
        </Select>
      </div>

      <div className="md:flex gap-2 ">
        <div>
          {paymentType === "" && (
            <Select>
              <SelectTrigger className=" w-[200px] md:w-[120px] my-2 shadow-xl ">
                <SelectValue placeholder="Reg: Status" />
              </SelectTrigger>
            </Select>
          )}
          {paymentType === "Goods" && (
            <Select onValueChange={(e: any) => setRegStatus(e)}>
              <SelectTrigger className=" w-[200px] md:w-[120px] my-2 shadow-xl ">
                <SelectValue placeholder="Reg: Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Oth">Individual / AOP</SelectItem>
                <SelectItem value="Com">Company</SelectItem>
              </SelectContent>
            </Select>
          )}
          {paymentType === "Services" && (
            <Select onValueChange={(e: any) => setRegStatus(e)}>
              <SelectTrigger className=" w-[200px] md:w-[120px] my-2 shadow-xl ">
                <SelectValue placeholder="Reg: Status" />
              </SelectTrigger>
              {commodity === "Other Services" && (
                <SelectContent>
                  <SelectItem value="Oth">Individual / AOP</SelectItem>
                  <SelectItem value="Com">Company</SelectItem>
                </SelectContent>
              )}
              {commodity !== "Other Services" && (
                <SelectContent>
                  <SelectItem value="Com/Ind">Individual / AOP</SelectItem>
                  <SelectItem value="Com/Ind">Company</SelectItem>
                </SelectContent>
              )}
            </Select>
          )}
          {paymentType === "Contract" && (
            <Select onValueChange={(e: any) => setRegStatus(e)}>
              <SelectTrigger className=" w-[200px] md:w-[120px] my-2 shadow-xl ">
                <SelectValue placeholder="Reg: Status" />
              </SelectTrigger>
              {commodity === "Sports Person" && (
                <SelectContent>
                  <SelectItem value="Ind">Individual </SelectItem>
                  {/* <SelectItem value="Com">Company</SelectItem> */}
                </SelectContent>
              )}
              {commodity === "Other Contract" && (
                <SelectContent>
                  <SelectItem value="Ind">Individual /AOP </SelectItem>
                  <SelectItem value="Com">Company</SelectItem>
                </SelectContent>
              )}
            </Select>
          )}
        </div>
        <div>
          <Select onValueChange={(e: any) => setFilingStatus(e)}>
            <SelectTrigger className=" w-[200px] md:w-[145px] my-2 shadow-xl ">
              <SelectValue placeholder="Filing Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="filer">Filer</SelectItem>
              <SelectItem value="nonfiler">Non Filer</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Section153;
