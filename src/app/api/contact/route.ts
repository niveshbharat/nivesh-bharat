import contacts from "@/models/contact";
import { connectToDB } from "@/lib/helpers";

export async function POST(request: Request) {
  const { email, name, message } = await request.json();

  if (!email || !name || !message) {
    return new Response("Invalid data", { status: 400 });
  }

  if (message.length < 20) {
    return new Response("Message too short", { status: 400 });
  }

  try {
    await connectToDB();

    const existingContact = await contacts
      .findOne({ email })
      .sort({ createdAt: -1 })
      .exec();
    if (existingContact) {
      const currentTime = new Date();
      const timeDifference =
        currentTime.getTime() - existingContact.createdAt.getTime();

        console.log(timeDifference)
      const minutesDifference = Math.floor(timeDifference / (1000 * 30));
      console.log(minutesDifference);
      if (minutesDifference < 1) {
        return new Response("Wait before sending another message", {
          status: 400,
        });
      }
    }

    const newContact = new contacts({
      email,
      name,
      message,
    });
    await newContact.save();
    return new Response("Saved", { status: 200 });
  } catch (error) {
    return new Response("Failed to send", { status: 500 });
  }
}
