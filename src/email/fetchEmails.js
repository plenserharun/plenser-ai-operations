const { ImapFlow } = require('imapflow');

async function fetchEmails(config) {
  const client = new ImapFlow({
    host: config.imap.host,
    port: config.imap.port,
    secure: config.imap.secure,
    auth: {
      user: config.imap.user,
      pass: config.imap.password
    }
  });

  await client.connect();

  let lock = await client.getMailboxLock('INBOX');

  try {
    for await (let message of client.fetch('1:*', {
      envelope: true
    })) {
      console.log(message.envelope.subject);
    }
  } finally {
    lock.release();
  }

  await client.logout();
}

module.exports = fetchEmails;
