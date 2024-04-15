import { NextRequest, NextResponse } from "next/server";
import {
  taxslabbusiness,
  TaxSlabBusiness,
  InsertTaxSlabBusiness,
  db,
} from "@/lib/drizzle";
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {
  try {
    const result = await db.select().from(taxslabbusiness).execute();
    // console.log(result);

    const data = result;
    // console.log(data);
    return NextResponse.json({ data });
  } catch (error) {
    // console.error(error);
    console.log((error as { message: string }).message);
    return NextResponse.json({ message: "Something went wrong" });
  }
}
