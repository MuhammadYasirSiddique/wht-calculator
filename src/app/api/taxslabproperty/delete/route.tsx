import {  db, taxslabproperty, TaxSlabProperty } from "@/lib/drizzle";
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';


const API_KEY = process.env.TAX_SLAB_DELETE_SECRET_KEY;


export async function DELETE(request: NextRequest) {
    const apiKey = request.headers.get('auth') ?? '';

    // const req = await request.json();

    const url = new URL(request.url);
    
    const id = url.searchParams.get("mid");
    

    if (!id || isNaN(parseInt(id, 10))) {
        return NextResponse.json(
          {
            message: "Invalid Slab ID",
          },
          { status: 400 }
        );
      }
   
    const slabmid: number = parseInt(id, 10);

    try {
        if (apiKey !== API_KEY) {
            throw new Error('Invalid API key');
        }

       
            const existingSlab = await db
              .select()
              .from(taxslabproperty)
              .where(eq(taxslabproperty.mid, slabmid))
              .limit(1);
      
            if (existingSlab.length === 0) {
              return NextResponse.json({
                message: `No Tas Slab with ID ${id} is found to delete`,
              });
            }
          
        if (id) {
            const res = await db
                .delete(taxslabproperty)
                .where(eq(taxslabproperty.mid, slabmid )) // Assuming mid is the primary key for the update
                        
                return NextResponse.json({ message: 'Tax Slab deleted successfully' });
            
        } else {
            throw new Error('Failed to delete record');
        }
    } catch (error) {
        console.log((error as { message: string }).message);
        return NextResponse.json({ message: 'Authentication failed or ' + (error as { message: string }).message });
    }
}


