import contacts from "@/models/contact";
import { connectToDB } from "@/lib/helpers";
import { type NextRequest } from 'next/server'

export async function POST(request: Request) {
  try {
    const { secret, page, limit } = await request.json();
    await connectToDB();

    if (secret !== "nivesh@100") {
      return new Response("Unauthorized", { status: 401 });
    }

    const skip = ((page || 1) - 1) * limit;
    const allContacts = await contacts
      .find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();

    return new Response(JSON.stringify(allContacts));
  } catch (error) {
    return new Response("Server Error", { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get('id');
    await connectToDB();
    const deletedContact = await contacts.findByIdAndDelete(id).exec();
    return new Response(JSON.stringify(deletedContact));
  } catch (error) {
    return new Response("Server Error", { status: 500 });
  }
}