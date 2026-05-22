import fs from "fs";

const inboxPath =
"C:/Users/Heisnberg/AppData/Roaming/Thunderbird/Profiles/7ili2kdu.default-release/ImapMail/imap.gmail.com/INBOX";

function extractEmails(rawText) {

  const emails = rawText.split("From - ");

  return emails
    .filter(email => email.includes("Subject:"))
    .map(email => {

      const subjectMatch =
        email.match(/Subject:\s(.+)/);

      const fromMatch =
        email.match(/From:\s(.+)/);

      const dateMatch =
        email.match(/Date:\s(.+)/);

      const subject =
        subjectMatch
          ? subjectMatch[1]
          : "No Subject";

      const sender =
        fromMatch
          ? fromMatch[1]
          : "Unknown Sender";

      const date =
        dateMatch
          ? dateMatch[1]
          : "Unknown Date";

      let category = "General";

      if (
        subject.toLowerCase().includes("invoice") ||
        subject.toLowerCase().includes("payment")
      ) {
        category = "Finance";
      }

      else if (
        subject.toLowerCase().includes("drawing") ||
        subject.toLowerCase().includes("hvac") ||
        subject.toLowerCase().includes("installation")
      ) {
        category = "Engineering";
      }

      else if (
        subject.toLowerCase().includes("vpn") ||
        subject.toLowerCase().includes("server") ||
        subject.toLowerCase().includes("system")
      ) {
        category = "IT & Tech";
      }

      let priority = "Normal";

      if (
        subject.toLowerCase().includes("urgent") ||
        subject.toLowerCase().includes("critical") ||
        subject.toLowerCase().includes("asap")
      ) {
        priority = "High";
      }

      return {

        sender,
        subject,
        date,
        category,
        priority

      };

    });

}

const rawInbox = fs.readFileSync(
  inboxPath,
  "utf8"
);

const parsedEmails =
  extractEmails(rawInbox);

export default parsedEmails;