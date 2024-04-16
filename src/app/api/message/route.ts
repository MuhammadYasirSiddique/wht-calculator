// import { db } from "@vercel/postgres";
// import { NextRequest, NextResponse } from "next/server";

// const API_KEY = process.env.MESSAGE_ADD_SECRET_KEY;

// export async function POST(request: NextRequest) {

//   const client = await db.connect();

//   const requestData = await request.json();
//   // console.log("Request Data", requestData);

//   const apiKey = request.headers.get("auth") ?? "";
//   // console.log('apiKey', apiKey);

//   try {
//     // Validate the API key
//     if (apiKey !== API_KEY) {
//       throw new Error("Invalid API key");
//     }

//     if (requestData) {
//       // Assuming requestData has the necessary fields for insertion
//       const { name, email, message } = requestData;

//       // You might need to modify this query based on your database structure
//       await client.sql`
//                 INSERT INTO messages(name, email, message)
//                 VALUES (${name}, ${email}, ${message})`;

//       return NextResponse.json({ message: "Message Sent successfully" });
//     } else {
//       throw new Error("Failed to send message");
//     }
//   } catch (error) {
//     // console.error(error);
//     console.log((error as { message: string }).message);
//     return NextResponse.json({
//       message:
//         "Authentication failed or " + (error as { message: string }).message,
//     });
//   } finally {
//     client.release();
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import { db, messages } from "@/lib/drizzle";
// import { sql } from "@vercel/postgres";
import { eq, sql } from "drizzle-orm";

const API_KEY = process.env.MESSAGE_ADD_SECRET_KEY;

export async function GET(request: NextRequest) {
  try {
    const result = await db.select().from(messages).execute();
    //    console.log(result)

    const data = result;
    return NextResponse.json({ data });
  } catch (error) {
    // console.error(error);
    console.log((error as { message: string }).message);
    return NextResponse.json({ message: "Something went wrong" });
    // } finally {
    //     release();
  }
}

export async function POST(request: NextRequest) {
  const apiKey = request.headers.get("auth") ?? "";

  const req = await request.json();

  try {
    if (apiKey !== API_KEY) {
      throw new Error("Invalid API key");
    }
    console.log(req);
    if (req) {
      const res = await db
        .insert(messages)
        .values({
          id: sql`gen_random_uuid()`,
          name: req.name,
          email: req.email,
          message: req.message,
        })
        .returning()
        .execute();

      return NextResponse.json({ message: "Message sent successfully" });
    } else {
      throw new Error("Failed to to send message");
    }
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({
      message:
        "Authentication failed or " + (error as { message: string }).message,
    });
  }
}
