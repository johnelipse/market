import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

//creating a category
export async function POST(request: NextRequest) {
  try {
    const { title, description, image } = await request.json();
    const newSlug = title.split(" ").join("-").toLowerCase();
    const category = await db.category.create({
      data: { title, slug: newSlug, description, image },
    });
    return NextResponse.json(
      {
        status: "created",
        data: category,
      },
      { status: 201 }
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

export async function GET() {
  try {
    const categories = await db.category.findMany();
    return NextResponse.json(
      {
        status: "fetched",
        data: categories,
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
