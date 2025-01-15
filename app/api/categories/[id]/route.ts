import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") || "";

  try {
    const category = await db.category.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(
      {
        status: "fetched",
        data: category,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        status: "failed",
        data: null,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") || "";
  try {
    await db.category.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(
      {
        message: "Deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed",
      },
      { status: 500 }
    );
  }
}
