import NoInternet from '@/components/nointernet';
import UnderDevelopment from '@/components/underdevelopment';
import Business from '@/components/whtbusiness';
import React from 'react'

interface TaxSlabProperty {
  id: number;
  taxyear: number;
  min: number;
  max: number;
  fixTax: number;
  taxRate: number;
  regStatus: string;
  status?: string | null; // Add status prop with optional type

}

const getTaxSlabProperty = async() =>{
   
try {
    const res = await fetch("https://wht-calculator.vercel.app/api/taxslabproperty", {
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
    // console.log(result)
    return result

} catch (error) {
    console.log(error)
}
}

const Home =async() =>{

    const res = await getTaxSlabProperty();

    if (!res) {
        return(
            <NoInternet />
        )
    };
    const taxSlab = res.data

    // console.log(res.data)
    // console.log((taxSlab.data).filter((slab: any) => slab.mid === 5))

return(
    <div>
        <Business TaxSlabBusiness = {taxSlab} />
    </div>
)}

export default Home;