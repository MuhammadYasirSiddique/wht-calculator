    // import { db } from '@vercel/postgres';
    // import { NextRequest, NextResponse } from 'next/server';

    // import jwt, { Secret } from 'jsonwebtoken';


    // const SECRET_KEY = process.env.TAX_SLAB_ADD_SECRET_KEY as Secret; 

    // export async function POST(request: NextRequest) {
    //     console.log('SECRET_KEY',SECRET_KEY)
    //     const client = await db.connect();  
        
    //     const requestData = await request.json()
    //     console.log("Request Data", requestData)
    //     const authToken = request.headers.get('Authorization') ?? '';
    //     console.log('authToken', authToken)

    //     try {
    //         // Validate the JWT token
    //         const decodedToken = jwt.verify(authToken, SECRET_KEY)  as { userId: string };
    //         console.log('Decoded Token',decodedToken)

    //         // Assuming decodedToken has the user ID information
    //         const { userId } = decodedToken;
    //         console.log('UserID',userId)

    //         if (requestData) {
    //             // Assuming requestData has the necessary fields for insertion
    //             const { id, min, max, fixtax, taxrate, taxyear } = requestData;

    //             // Use the userId in your SQL query, e.g., WHERE user_id = $6
    //             await client.sql`
    //                 INSERT INTO taxslab(id, min, max, fixtax, taxrate, taxyear, user_id)
    //                 VALUES (${id}, ${min}, ${max}, ${fixtax}, ${taxrate}, ${taxyear}, ${userId})`;

    //             return NextResponse.json({ message: 'Record added successfully' });
    //         } else {
    //             throw new Error('Failed to add record');
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         return NextResponse.json({ message: 'Authentication failed or ' + (error as { message: string }).message });
    //     } finally {
    //         client.release();
    //     }
    // }



    // import { db } from '@vercel/postgres';
    // import { NextRequest, NextResponse } from 'next/server';

   
    // export async function POST(request: NextRequest) {
        
    //     const client = await db.connect();
        
    //     const requestData = await request.json()
        
    //     try {
    //         if (requestData) {
                
    //             const { id, min, max, fixtax, taxrate, taxyear } = requestData;

                
    //             await client.sql`
    //                             INSERT INTO taxslab(id, min, max, fixtax, taxrate, taxyear)
    //                             VALUES(${id}, ${min}, ${max}, ${fixtax}, ${taxrate}, ${taxyear})
    //                             `;

    //             return NextResponse.json({ message: 'Record added successfully' });
    //         } else {
    //             throw new Error('Failed to add record');
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         return NextResponse.json({ message: 'Something went wrong :- ' + (error as { message: string }).message });
    //     } finally {
    //         client.release();
    //     }
    // }



    import { db } from '@vercel/postgres';
    import { NextRequest, NextResponse } from 'next/server';
    
    // Use your API key instead of the JWT secret key
    const API_KEY = process.env.TAX_SLAB_ADD_SECRET_KEY;
    
    export async function POST(request: NextRequest) {
        console.log('API_KEY', API_KEY);
        const client = await db.connect();
    
        const requestData = await request.json();
        console.log("Request Data", requestData);
    
        const apiKey = request.headers.get('auth') ?? '';
        console.log('apiKey', apiKey);
    
        try {
            // Validate the API key
            if (apiKey !== API_KEY) {
                throw new Error('Invalid API key');
            }
    
            if (requestData) {
                // Assuming requestData has the necessary fields for insertion
                const { id, min, max, fixtax, taxrate, taxyear } = requestData;
    
                // You might need to modify this query based on your database structure
                await client.sql`
                    INSERT INTO taxslab(id, min, max, fixtax, taxrate, taxyear)
                    VALUES (${id}, ${min}, ${max}, ${fixtax}, ${taxrate}, ${taxyear})`;
    
                return NextResponse.json({ message: 'Record added successfully' });
            } else {
                throw new Error('Failed to add record');
            }
        } catch (error) {
            console.error(error);
            return NextResponse.json({ message: 'Authentication failed or ' + (error as { message: string }).message });
        } finally {
            client.release();
        }
    }
    