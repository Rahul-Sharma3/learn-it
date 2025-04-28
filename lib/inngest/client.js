import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "learn-it", name :"learn-it" , 
    credentials: {
        gemini: {
          apiKey: process.env.GEMINI_API_KEY,
        },
      },
});
