import fs from "fs";
import path from "path";

const profileRoot =
"C:/Users/Heisnberg/AppData/Roaming/Thunderbird/Profiles/7ili2kdu.default-release/ImapMail";

const inboxFiles = [

  path.join(
    profileRoot,
    "imap.gmail.com",
    "INBOX"
  ),

  path.join(
    profileRoot,
    "imap.mail.yahoo.com",
    "INBOX"
  )

];

function classifyEmail(subject) {

  const text =
    subject.toLowerCase();

  if (
    text.includes("drawing") ||
    text.includes("layout") ||
    text.includes("hvac") ||
    text.includes("technical")
  ) {
    return "Drawings";
  }

  if (
    text.includes("poster") ||
    text.includes("design") ||
    text.includes("banner") ||
    text.includes("branding") ||
    text.includes("flyer")
  ) {
    return "Design Posters";
  }

  if (
    text.includes("server") ||
    text.includes("vpn") ||
    text.includes("security") ||
    text.includes("system") ||
    text.includes("network")
  ) {
    return "IT";
  }

  return "General";

}

function isHumanOperationalEmail(sender) {

  const value =
    sender.toLowerCase();

  if (
    value.includes("no-reply") ||
    value.includes("noreply") ||
    value.includes("notification") ||
    value.includes("yahoo") ||
    value.includes("google") ||
    value.includes("support") ||
    value.includes("mailer-daemon")
  ) {
    return false;
  }

  return true;

}

function parseMailbox(rawText) {

  return rawText
    .split("From - ")
    .filter(
      chunk => chunk.includes("Subject:")
    )
    .map(chunk => {

      const sender =
        chunk.match(/From:\s(.+)/)?.[1]?.trim()
        || "Unknown Sender";

      const subject =
        chunk.match(/Subject:\s(.+)/)?.[1]?.trim()
        || "No Subject";

      const date =
        chunk.match(/Date:\s(.+)/)?.[1]?.trim()
        || "Unknown Date";

      return {

        sender,
        subject,
        date,
        category:
          classifyEmail(subject),

        isPlenser:
          sender.toLowerCase().includes("@plenser.com")

      };

    });

}

function readInbox(filePath) {

  if (!fs.existsSync(filePath)) {
    return "";
  }

  return fs.readFileSync(
    filePath,
    "utf8"
  );

}

let emails = [];

for (const inbox of inboxFiles) {

  const raw =
    readInbox(inbox);

  if (raw) {

    const parsed =
      parseMailbox(raw);

    const filtered =
      parsed.filter(email =>
        isHumanOperationalEmail(
          email.sender
        )
      );

    emails.push(...filtered);

  }

}

const totalEmails =
  emails.length;

const categoryStats = {};

const senderStats = {};

const plenserEmails =
  emails.filter(
    email => email.isPlenser
  );

for (const email of emails) {

  if (!categoryStats[email.category]) {
    categoryStats[email.category] = 0;
  }

  categoryStats[email.category]++;

  if (!senderStats[email.sender]) {
    senderStats[email.sender] = 0;
  }

  senderStats[email.sender]++;

}

const categories =
  Object.entries(categoryStats)
    .map(([name, count]) => ({

      name,

      count,

      percentage:
        Number(
          (
            (count / totalEmails) * 100
          ).toFixed(1)
        )

    }))
    .sort((a, b) =>
      b.count - a.count
    );

const topSenders =
  Object.entries(senderStats)
    .map(([name, count]) => ({

      name,

      count,

      percentage:
        Number(
          (
            (count / totalEmails) * 100
          ).toFixed(1)
        )

    }))
    .sort((a, b) =>
      b.count - a.count
    );

const summary = {

  generatedAt:
    new Date().toISOString(),

  totalEmails,

  plenserEmails:
    plenserEmails.length,

  externalEmails:
    totalEmails -
    plenserEmails.length,

  categories,

  topSenders

};

fs.mkdirSync(
  "src/renderer/data",
  { recursive: true }
);

fs.writeFileSync(

  "src/renderer/data/emailSummary.json",

  JSON.stringify(
    summary,
    null,
    2
  ),

  "utf8"

);

console.log(
  "\n=== PLENSER OPERATIONAL SUMMARY ===\n"
);

console.log(summary);
