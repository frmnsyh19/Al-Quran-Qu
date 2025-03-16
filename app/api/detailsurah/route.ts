import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const nomor = req.nextUrl.searchParams.get("nomor");

    if (!nomor) {
      return NextResponse.json(
        { statusCode: 400, message: "Nomor surah tidak ditemukan" },
        { status: 400 }
      );
    }

    const baseUrl = "http://equran.id/api/v2/surat/";
    const { data } = await axios.get(`${baseUrl}${nomor}`);

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
