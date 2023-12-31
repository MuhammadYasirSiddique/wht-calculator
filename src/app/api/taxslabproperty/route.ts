
import { NextRequest, NextResponse } from "next/server";
import { taxslabproperty, TaxSlabProperty, InsertTaxSlabProperty, db } from "@/lib/drizzle";
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {
    
   
    try {
            
        const result = await db.select().from(taxslabproperty).execute();
    //    console.log(result)
        
        const data = result
        return NextResponse.json({  data});
    


} catch (error) {
    // console.error(error);
    console.log((error as { message: string }).message)
    return NextResponse.json({ message: 'Something went wrong' });

}
}
