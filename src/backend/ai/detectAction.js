function detectAction(email) {

  const text = email.toLowerCase();

  if (text.includes("awaiting approval")) {
    return "Approval Needed";
  }

  if (text.includes("low stock")) {
    return "Restock Required";
  }

  if (text.includes("revision")) {
    return "Drawing Review Needed";
  }

  if (text.includes("delay")) {
    return "Operations Follow-up";
  }

  if (text.includes("budget")) {
    return "Budget Attention Needed";
  }

  return "Monitor";

}

export default detectAction;
