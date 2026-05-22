import { useEffect, useRef } from "react";

export default function useNotifications(summary) {

  const previousCount =
    useRef(0);

  useEffect(() => {

    if(!summary) return;

    if(
      Notification.permission !== "granted"
    ) {

      Notification.requestPermission();

    }

    if(
      previousCount.current === 0
    ) {

      previousCount.current =
        summary.totalEmails;

      return;

    }

    if(
      summary.totalEmails >
      previousCount.current
    ) {

      const latestSender =
        summary.topSenders?.[0]?.name
        || "Unknown";

      new Notification(

        "Plenser Operations Alert",

        {

          body:
            `New operational email detected from ${latestSender}`

        }

      );

      previousCount.current =
        summary.totalEmails;

    }

  },[summary]);

}
