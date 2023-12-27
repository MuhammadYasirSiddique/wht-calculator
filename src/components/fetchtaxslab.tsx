import { Salad } from "lucide-react"
import Salary from "./whtsalary"


const getTaxSlab = async() =>{
try {
    const res = await fetch("/api/taxslab", {
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

const TaxSlab =async() =>{

    const res = await getTaxSlab();

return(
    <div>
        <Salary taxSlab = {res} />
    </div>
)}

export default TaxSlab;