import { NextResponse } from "next/server";

export async function GET(
    req: Request
) {

    console.log('Olá')
    return NextResponse.json({message: "Hello world backend"})
}