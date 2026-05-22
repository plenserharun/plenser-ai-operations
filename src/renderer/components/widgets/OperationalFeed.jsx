import React from "react";

export default function OperationalFeed() {

  const items = [

    {
      level: "HIGH",
      title: "Drawing Revision Pending",
      color: "text-red-400"
    },

    {
      level: "MEDIUM",
      title: "IT Synchronization Active",
      color: "text-orange-400"
    },

    {
      level: "LOW",
      title: "General Coordination Active",
      color: "text-green-400"
    }

  ];

  return (

    <div className="
      dashboard-card
      p-6
      mt-6
    ">

      <div className="
        flex
        justify-between
        items-center
        mb-6
      ">

        <h3 className="
          text-xl
          font-bold
        ">
          AI OPERATIONAL FEED
        </h3>

        <div className="
          flex
          items-center
          gap-2
        ">

          <div className="live-pulse" />

          <span className="
            text-green-400
            text-sm
          ">
            LIVE
          </span>

        </div>

      </div>

      <div className="
        flex
        flex-col
        gap-4
      ">

        {items.map((item) => (

          <div
            key={item.title}

            className="
              bg-slate-900
              border
              border-slate-800
              rounded-xl
              p-4
              flex
              justify-between
              items-center
            "
          >

            <div>

              <div className={`
                font-bold
                ${item.color}
              `}>

                {item.level}

              </div>

              <div className="
                text-slate-300
                mt-1
              ">

                {item.title}

              </div>

            </div>

            <div className="
              text-slate-500
              text-sm
            ">

              AI detected

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}