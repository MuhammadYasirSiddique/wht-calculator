import NoInternet from "@/components/nointernet";
import Salary from "@/components/whtsalary";

interface TaxSlab {
  id: number;
  taxyear: number;
  min: number;
  max: number;
  fixTax: number;
  taxRate: number;
  status?: string | null; // Add status prop with optional type
}

const getTaxSlab = async () => {
  try {
    const res = await fetch("https://wht-calculator.vercel.app/api/taxslab", {
      // const res = await fetch("http://127.0.0.1:3000/api/taxslab", {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch the data");
    }
    const result = await res.json();
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error);
  }
};

const Home = async () => {
  const res = await getTaxSlab();
  if (!res) {
    return <NoInternet />;
  }
  const taxSlab = res.data;

  //   console.log(res.data);
  // console.log((taxSlab.data).filter((slab: any) => slab.mid === 3))

  return (
    <div>
      <Salary taxSlab={taxSlab} />
    </div>
  );
};

export default Home;
