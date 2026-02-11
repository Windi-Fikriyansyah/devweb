import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
    try {
        const [rows] = await db.query(`
            SELECT 
                id, 
                title, 
                category, 
                description as \`desc\`, 
                image_url as image, 
                image_alt, 
                tags, 
                color 
            FROM portfolios 
            ORDER BY created_at DESC
        `);
        return NextResponse.json(rows);
    } catch (error) {
        console.error('Error fetching portfolios:', error);
        return NextResponse.json({ error: 'Failed to fetch portfolios' }, { status: 500 });
    }
}
