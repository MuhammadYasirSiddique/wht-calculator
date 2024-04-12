import NoInternet from "@/components/nointernet";
import UnderDevelopment from "@/components/underdevelopment";
import Business from "@/components/whtbusiness";
import React from "react";

interface TaxSlabBusiness {
  mid: number;
  taxyear: number;
  sid: number;
  paymentsection: number;
  paymenttype: string;
  regstatus: string;
  residency: string;
  commodity: string;
  taxrate: number;
  psidsection: string;
  efilingcode: number;
  taxnature: string;
  status: string;
}

const getTaxSlabBusiness = async () => {
  try {
    const res = await fetch(
      "https://wht-calculator.vercel.app/api/taxslabbusiness",
      //   "http://127.0.0.1:3000/taxslabbusiness",
      {
        method: "GET",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch the data");
    }
    const result = await res.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const Home = async () => {
  const res = await getTaxSlabBusiness();

  if (!res) {
    return <NoInternet />;
  }
  const taxSlab = res.data;

  // console.log(res.data)
  // console.log((taxSlab.data).filter((slab: any) => slab.mid === 5))

  return (
    <div>
      <Business TaxSlabBusiness={taxSlab} />
    </div>
  );
};

export default Home;
