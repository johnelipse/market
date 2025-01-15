import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { title, description, rating, price, quantity, images, categoryId } =
      await request.json();
    const newSlug = title.split(" ").join("-").toLowerCase();
    const newProduct = await db.product.create({
      data: {
        title,
        slug: newSlug,
        description,
        price,
        rating,
        quantity,
        images,
        categoryId,
      },
    });
    return NextResponse.json(
      {
        message: "created",
        data: newProduct,
      },
      { status: 201 }
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

export async function GET() {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(
      {
        message: "fetched",
        data: products,
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
