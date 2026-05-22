import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { ImapFlow }
from "imapflow";

dotenv.config();

const app = express();

app.use(cors());

function classify(subject="",from="") {

  const text =
    `${subject} ${from}`.toLowerCase();

  if (
    text.includes("drawing") ||
    text.includes("cad") ||
    text.includes("design")
  ) {
    return "Drawings";
  }

  if (
    text.includes("server") ||
    text.includes("hosting") ||
    text.includes("domain") ||
    text.includes("website") ||
    text.includes("email")
  ) {
    return "IT";
  }

  if (
    text.includes("@plenser.com")
  ) {
    return "Internal";
  }

  return "Operations";
}

app.get("/emails", async (req,res)=>{

  try {

    const client =
      new ImapFlow({

        host: "imap.gmail.com",

        port: 993,

        secure: true,

        auth: {

          user:
            process.env.GMAIL_USER,

          pass:
            process.env.GMAIL_PASS

        }

      });

    await client.connect();

    let lock =
      await client.getMailboxLock("INBOX");

    let emails = [];

    for await (
      let message of client.fetch(
        "1:*",
        {
          envelope: true
        }
      )
    ) {

      emails.push({

        subject:
          message.envelope.subject,

        from:
          message.envelope.from?.[0]?.address || "",

        category:
          classify(

            message.envelope.subject,

            message.envelope.from?.[0]?.address || ""

          )

      });

    }

    lock.release();

    await client.logout();

    const summary = {

      totalEmails:
        emails.length,

      drawings:
        emails.filter(
          e => e.category === "Drawings"
        ).length,

      it:
        emails.filter(
          e => e.category === "IT"
        ).length,

      internal:
        emails.filter(
          e => e.category === "Internal"
        ).length,

      operations:
        emails.filter(
          e => e.category === "Operations"
        ).length,

      recent:
        emails.slice(-10).reverse()

    };

    res.json(summary);

  }

  catch(error){

    res.json({

      status:"FAILED",

      error:error.message

    });

  }

});

app.listen(3000,()=>{

  console.log(
    "PLENSER AI LIVE ANALYTICS ACTIVE"
  );

});
