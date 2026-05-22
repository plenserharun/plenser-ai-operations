import { useEffect, useState } from "react";

export default function useLiveSummary() {

  const [summary,setSummary] =
    useState(null);

  async function loadData() {

    try {

      const response =
        await fetch(
          "/src/renderer/data/emailSummary.json?t=" +
          Date.now()
        );

      const data =
        await response.json();

      setSummary(data);

    }

    catch(error) {

      console.log(
        "Live sync failed",
        error
      );

    }

  }

  useEffect(() => {

    loadData();

    const interval =
      setInterval(() => {

        loadData();

      },5000);

    return () =>
      clearInterval(interval);

  },[]);

  return summary;

}
