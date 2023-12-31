import { NextRequest, NextResponse } from 'next/server';
import { taxslab, TaxSlab, InsertTaxSlab, db, taxslabproperty, TaxSlabProperty } from "@/lib/drizzle";
import { sql } from '@vercel/postgres';


const API_KEY = process.env.TAX_SLAB_ADD_SECRET_KEY;



export async function POST(request: NextRequest) {
    const apiKey = request.headers.get('auth') ?? '';

    const req = await request.json();

    try {
        if (apiKey !== API_KEY) {
            throw new Error('Invalid API key');
        }

        if(req){

        
        const res = await db
        .insert(taxslabproperty).values({
            mid: req.mid,
            taxyear: req.taxyear,
            sid: req.sid,
            min: req.min,
            max: req.max,
            fixtax: req.fixtax,
            taxrate: req.taxrate
         })
        .returning()
        .execute();

        // console.log(res)

        // Assuming you want to return the inserted data in the response
        // const insertedData = insertResult[0];

        // return NextResponse.json({ data: insertedData, message: 'Tax Slab inserted successfully' });
        return NextResponse.json({ message: 'Tax Slab inserted successfully' });
    } else{
        throw new Error('Failed to add record');

    }
    } catch (error) {
        console.log((error as { message: string }).message)
        return NextResponse.json({ message: 'Authentication failed or ' + (error as { message: string }).message });
    }
}
