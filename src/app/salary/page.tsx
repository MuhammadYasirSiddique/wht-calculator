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
    const res = await fetch("https://wht-calculator.vercel.app/api/taxslab", {
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
    const taxSlab = res.data

    // console.log(res.data)
    // console.log((taxSlab.data).filter((slab: any) => slab.mid === 3))

return(
    <div>
        <Salary taxSlab = {taxSlab} />
    </div>
)}

export default Home;