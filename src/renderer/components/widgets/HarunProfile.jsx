import React from "react";

export default function HarunProfile() {

  return (

    <div className="
      dashboard-card
      p-6
      mt-6
    ">

      <div className="
        flex
        items-center
        justify-between
      ">

        <div className="
          flex
          items-center
          gap-5
        ">

          <img
            src="https://i.pravatar.cc/300?img=12"

            className="
              w-24
              h-24
              rounded-full
              border-4
              border-blue-500
            "
          />

          <div>

            <div className="
              text-3xl
              font-bold
            ">

              Harun G

            </div>

            <div className="
              text-slate-400
              mt-2
            ">

              AI Operations Administrator

            </div>

          </div>

        </div>

        <div className="
          text-5xl
          font-bold
          text-blue-400
        ">

          96

        </div>

      </div>

    </div>

  );

}