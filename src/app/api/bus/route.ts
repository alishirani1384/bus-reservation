import { NextResponse } from "next/server";

export async function GET(req:Request) {
    const res=await fetch("https://mrbilit.com/buses/esfahan-yazd?departureDate=1402-09-10");
    const data=await res.text();
    return NextResponse.json({text:"hello world"})
}