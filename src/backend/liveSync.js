import { exec } from "child_process";

console.log(
  "LIVE AI ANALYTICS ENGINE ACTIVE"
);

setInterval(() => {

  exec(
    "node src/backend/ai/buildEmailSummary.js",

    (error,stdout,stderr) => {

      if(error) {

        console.log(error);

        return;

      }

      console.log(
        "Operational analytics synchronized"
      );

    }

  );

},10000);
