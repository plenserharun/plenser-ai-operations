import React from "react";

export default function EfficiencyPanel() {

  return (

    <div className="
      grid
      grid-cols-4
      gap-6
      mt-6
    ">

      {[
        {
          title: "Daily Drawings",
          value: "12"
        },

        {
          title: "Weekly Drawings",
          value: "48"
        },

        {
          title: "Annual Drawings",
          value: "612"
        },

        {
          title: "AI Efficiency",
          value: "94%"
        }

      ].map((item) => (

        <div
          key={item.title}

          className="
            dashboard-card
            p-6
          "
        >

          <div className="
            text-slate-400
          ">

            {item.title}

          </div>

          <div className="
            text-4xl
            mt-3
            font-bold
            text-blue-400
          ">

            {item.value}

          </div>

        </div>

      ))}

    </div>

  );

}