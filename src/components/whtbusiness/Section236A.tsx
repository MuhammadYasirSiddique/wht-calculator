import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Section236Props {
  paymentType: string;
  commodity: string;
  regStatus: string;
  setPaymentType: (value: string) => void;
  setCommodity: (value: string) => void;
  setRegStatus: (value: string) => void;
  setFilingStatus: (value: string) => void;
}

const Section236: React.FC<Section236Props> = ({
  paymentType,
  commodity,
  regStatus,
  setPaymentType,
  setCommodity,
  setRegStatus,
  setFilingStatus,
}) => {
  // console.log(paymentType, "236");
  return (
    <div>
      <div className="">
        <Select onValueChange={(e: any) => setPaymentType(e)}>
          <SelectTrigger className=" w-[200px] md:w-[275px] my-2 shadow-xl ">
            <SelectValue placeholder="Type of Payment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Auction">Public Auction / Tender</SelectItem>
            {/* <SelectItem value="Services">Services</SelectItem>
            <SelectItem value="Contract">Contract</SelectItem> */}
          </SelectContent>
        </Select>
      </div>
      <div className="">
        <Select onValueChange={(e: any) => setCommodity(e)}>
          <SelectTrigger className=" w-[200px] md:w-[275px] my-2 shadow-xl ">
            <SelectValue placeholder="Goods or Property" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="Goods">Goods</SelectItem>
            <SelectItem value="Property">Property</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="md:flex gap-2 ">
        <div>
          <Select onValueChange={(e: any) => setRegStatus(e)}>
            <SelectTrigger className=" w-[200px] md:w-[120px] my-2 shadow-xl ">
              <SelectValue placeholder="Reg: Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ind+">Individual / AOP</SelectItem>
              <SelectItem value="Com">Company</SelectItem>
            </SelectContent>
          </Select>
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

export default Section236;
