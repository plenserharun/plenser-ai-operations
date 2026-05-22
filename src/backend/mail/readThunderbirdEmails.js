import fs from "fs";
import path from "path";

const thunderbirdInboxPath =
  "C:/Users/Heisnberg/AppData/Roaming/Thunderbird/Profiles/7ili2kdu.default-release/ImapMail";

function scanDirectory(directory) {

  const folders = fs.readdirSync(directory);

  let inboxFiles = [];

  for (const folder of folders) {

    const folderPath = path.join(directory, folder);

    if (fs.statSync(folderPath).isDirectory()) {

      const files = fs.readdirSync(folderPath);

      for (const file of files) {

        if (
          file === "INBOX" ||
          file.endsWith(".sbd")
        ) {

          inboxFiles.push(
            path.join(folderPath, file)
          );

        }

      }

    }

  }

  return inboxFiles;

}

function readInboxContent(filePath) {

  try {

    const content = fs.readFileSync(
      filePath,
      "utf8"
    );

    return content.slice(0, 5000);

  }
  catch (error) {

    return `Failed to read: ${filePath}`;

  }

}

const inboxFiles = scanDirectory(
  thunderbirdInboxPath
);

console.log("\n=== DETECTED MAILBOX FILES ===\n");

console.log(inboxFiles);

console.log("\n=== EMAIL CONTENT PREVIEW ===\n");

for (const file of inboxFiles) {

  console.log(
    `\n--- ${file} ---\n`
  );

  console.log(
    readInboxContent(file)
  );

}