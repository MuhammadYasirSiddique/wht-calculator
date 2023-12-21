
import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

// async function doesTableExist(client: any, tableName: string): Promise<boolean> {
//     const result = await client.query(
//         `SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = $1)`,
//         [tableName]
//     );
    
//     return result.rows[0].exists;
// }


export async function GET(request: NextRequest) {

    
    const client = await db.connect();

    try {
        // const tableName = 'taxslab';
        // const tableExists = await doesTableExist(client, tableName);
        
        // if (!tableExists) {
        //     await client.query(`
        //         CREATE TABLE IF NOT EXISTS taxslab (
        //             id SERIAL PRIMARY KEY,
        //             min INTEGER,
        //             max INTEGER,
        //             fixtax DECIMAL(10, 2),
        //             taxrate DECIMAL(5, 2),
        //             taxyear VARCHAR(255)
        //         );
        //     `);
           
        //     return NextResponse.json({ message: 'Table created successfully' });
        // }
        
        
        // else {

            // If the table already exists, fetch data from it
            const fetchDataQuery = 'SELECT * FROM taxslab';
            const result = await client.query(fetchDataQuery);
            // const data = result.rows.find(row => row.id === 2);
            const data = result.rows;

            return NextResponse.json({ message: 'Data Fetched', data });
        // }


    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Something went wrong' });
    } finally {
        client.release();
    }
}
