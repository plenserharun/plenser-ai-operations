const categories = {

  stores: [
    "stock",
    "inventory",
    "materials",
    "restock"
  ],

  technical: [
    "drawing",
    "revision",
    "layout",
    "approval"
  ],

  operations: [
    "installation",
    "delay",
    "site",
    "operations"
  ],

  budget: [
    "budget",
    "cost",
    "overrun"
  ]

};

function categorizeEmail(text) {

  const lowerText = text.toLowerCase();

  for (const category in categories) {

    for (const keyword of categories[category]) {

      if (lowerText.includes(keyword)) {
        return category;
      }

    }

  }

  return "general";

}

export default categorizeEmail;
