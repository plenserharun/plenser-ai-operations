import axios from "axios";
import { useEffect, useState } from "react";

export default function useLiveSummary() {

  const [summary,setSummary] =
    useState(null);

  useEffect(()=>{

    async function load() {

      try {

        const response =
          await axios.get(
            "http://localhost:3000/emails"
          );

        setSummary(
          response.data
        );

      }

      catch(error){

        console.log(
          error.message
        );

      }

    }

    load();

    const interval =
      setInterval(load,5000);

    return ()=>clearInterval(interval);

  },[]);

  return summary;

}
