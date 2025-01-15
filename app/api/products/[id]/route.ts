import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { Params } from "../../categories/[id]/route";

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: Params }
) {
  try {
    const product = await db.product.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(
      {
        message: "fetched",
        data: product,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed",
        data: null,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: Params }
) {
  try {
    await db.product.delete({
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
        message: "Failed",
      },
      { status: 500 }
    );
  }
}
