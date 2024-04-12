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
import * as excel from "exceljs";

const API_KEY = process.env.TAX_SLAB_ADD_SECRET_KEY;

export async function POST(request: NextRequest) {
  const apiKey = request.headers.get("auth") ?? "";

  try {
    if (apiKey !== API_KEY) {
      throw new Error("Invalid API key");
    }

    const buffer = await request.body.arrayBuffer();
    const workbook = new excel.Workbook();
    await workbook.xlsx.load(buffer);

    const worksheet = workbook.worksheets[0]; // Assuming data is in the first sheet

    const rows = worksheet.getRows(); // Get all rows

    const insertedRecords = [];

    for (const row of rows) {
      const res = await db
        .insert(taxslabbusiness)
        .values({
          mid: row.getCell(1).value,
          taxyear: row.getCell(2).value,
          sid: row.getCell(3).value,
          paymentsection: row.getCell(4).value,
          paymenttype: row.getCell(5).value,
          regstatus: row.getCell(6).value,
          residency: row.getCell(7).value,
          commodity: row.getCell(8).value,
          taxrate: row.getCell(9).value,
          psidsection: row.getCell(10).value,
          efilingcode: row.getCell(11).value,
          taxnature: row.getCell(12).value,
          //   status: row.getCell(13).value,
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
