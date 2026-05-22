function analyzeEmail(text) {
  const urgent = text.toLowerCase().includes('urgent');

  return {
    summary: text.substring(0, 150),
    urgent,
    draftReply: urgent
      ? 'Thank you. I will respond urgently.'
      : 'Thank you for your email.'
  };
}

module.exports = analyzeEmail;
