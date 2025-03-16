import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("http://equran.id/api/v2/surat");

    if (!response.ok) {
      throw new Error(`External API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Fetch Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch Alquran data" },
      { status: 500 }
    );
  }
}
