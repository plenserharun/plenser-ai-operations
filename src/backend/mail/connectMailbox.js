import imaps from "imap-simple";
import { simpleParser } from "mailparser";
import dotenv from "dotenv";

dotenv.config();

const config = {

  imap: {
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD,
    host: process.env.IMAP_HOST,
    port: Number(process.env.IMAP_PORT),
    tls: true,
    authTimeout: 10000
  }

};

async function connectMailbox() {

  try {

    const connection = await imaps.connect(config);

    await connection.openBox("INBOX");

    console.log("Mailbox connected successfully.");

    const searchCriteria = ["ALL"];

    const fetchOptions = {
      bodies: [""],
      markSeen: false
    };

    const messages = await connection.search(
      searchCriteria,
      fetchOptions
    );

    const emails = [];

    for (const item of messages.slice(-5)) {

      const all = item.parts.find(
        part => part.which === ""
      );

      const parsed = await simpleParser(
        all.body
      );

      emails.push({

        from: parsed.from?.text || "Unknown",
        subject: parsed.subject || "No Subject",
        date: parsed.date || "",
        text: parsed.text?.slice(0, 200) || ""

      });

    }

    console.log(emails);

    connection.end();

  }

  catch (error) {

    console.error(
      "Mailbox connection failed:",
      error.message
    );

  }

}

connectMailbox();