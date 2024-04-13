import { db, taxslabbusiness, TaxSlabBusiness } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.TAX_SLAB_UPDATE_SECRET_KEY;

export async function PUT(request: NextRequest) {
  const apiKey = request.headers.get("auth") ?? "";

  const req = await request.json();

  try {
    if (apiKey !== API_KEY) {
      throw new Error("Invalid API key");
    }

    if (req.mid) {
      const existingSlab = await db
        .select()
        .from(taxslabbusiness)
        .where(eq(taxslabbusiness.mid, req.mid))
        .limit(1);

      if (existingSlab.length === 0) {
        return NextResponse.json({
          message: `No Tas Slab with ID ${req.mid} is found to update`,
        });
      }
    }

    if (req.mid) {
      const res = await db
        .update(taxslabbusiness)
        .set({
          taxyear: req.taxyear,
          sid: req.sid,
          paymentsection: req.paymentsection,
          paymenttype: req.paymenttype,
          regstatus: req.regstatus,
          residency: req.residency,
          commodity: req.commodity,
          taxrate: req.taxrate,
          psidsection: req.psidsection,
          efilingcode: req.efilingcode,
          taxnature: req.taxnature,
        })
        .where(eq(taxslabbusiness.mid, req.mid)) // Assuming mid is the primary key for the update
        .returning()
        .execute();

      // Check if any rows were affected to determine if the update was successful
      if (res && res.length > 0) {
        return NextResponse.json({ message: "Tax Slab updated successfully" });
      } else {
        throw new Error("Failed to update record");
      }
    } else {
      throw new Error("Failed to update record");
    }
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({
      message:
        "Authentication failed or " + (error as { message: string }).message,
    });
  }
}
