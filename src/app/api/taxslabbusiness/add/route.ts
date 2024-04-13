// import { NextRequest, NextResponse } from "next/server";
// import {
//   taxslab,
//   TaxSlab,
//   InsertTaxSlab,
//   db,
//   taxslabbusiness,
//   TaxSlabBusiness,
// } from "@/lib/drizzle";
// import { sql } from "@vercel/postgres";
// import { eq } from "drizzle-orm";

// const API_KEY = process.env.TAX_SLAB_ADD_SECRET_KEY;

// export async function POST(request: NextRequest) {
//   const apiKey = request.headers.get("auth") ?? "";

//   const req = await request.json();

//   try {
//     if (apiKey !== API_KEY) {
//       throw new Error("Invalid API key");
//     }

//     if (req) {
//       const res = await db
//         .insert(taxslabbusiness)
//         .values({
//           mid: req.mid,
//           taxyear: req.taxyear,
//           sid: req.sid,
//           paymentsection: req.paymentsection,
//           paymenttype: req.paymenttype,
//           regstatus: req.regstatus,
//           residency: req.residency,
//           commodity: req.commodity,
//           taxrate: req.taxrate,
//           psidsection: req.psidsection,
//           efilingcode: req.efilingcode,
//           taxnature: req.taxnature,
//           //   status: req.status,
//         })
//         .returning()
//         .execute();

//       // console.log(res)

//       // Assuming you want to return the inserted data in the response
//       // const insertedData = insertResult[0];

//       // return NextResponse.json({ data: insertedData, message: 'Tax Slab inserted successfully' });
//       return NextResponse.json({ message: "Tax Slab inserted successfully" });
//     } else {
//       throw new Error("Failed to add record");
//     }
//   } catch (error) {
//     console.log((error as { message: string }).message);
//     return NextResponse.json({
//       message:
//         "Authentication failed or " + (error as { message: string }).message,
//     });
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import { db, taxslabbusiness } from "@/lib/drizzle";

const API_KEY = process.env.TAX_SLAB_ADD_SECRET_KEY;

export async function POST(request: NextRequest) {
  const apiKey = request.headers.get("auth") ?? "";

  try {
    if (apiKey !== API_KEY) {
      throw new Error("Invalid API key");
    }

    const req = await request.json();

    if (!Array.isArray(req)) {
      throw new Error("Request body should be an array of records");
    }

    const insertedRecords = [];

    for (const record of req) {
      const res = await db
        .insert(taxslabbusiness)
        .values({
          mid: record.mid,
          taxyear: record.taxyear,
          sid: record.sid,
          paymentsection: record.paymentsection,
          paymenttype: record.paymenttype,
          regstatus: record.regstatus,
          residency: record.residency,
          commodity: record.commodity,
          taxrate: record.taxrate,
          psidsection: record.psidsection,
          efilingcode: record.efilingcode,
          taxnature: record.taxnature,
          //   status: record.status,
        })
        .returning()
        .execute();

      insertedRecords.push(res);
    }

    return NextResponse.json({
      data: insertedRecords,
      message: "Tax Slabs inserted successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      message: "Failed to add records: " + error,
    });
  }
}
