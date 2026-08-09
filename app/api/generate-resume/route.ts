import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Resume data received:", body);

    return NextResponse.json({
      success: true,
      message: "Backend connected successfully!",
      data: body,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}