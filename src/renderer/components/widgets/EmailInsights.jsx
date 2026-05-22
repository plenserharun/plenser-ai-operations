import React from "react";

import summary
from "../../data/emailSummary.json";

export default function EmailInsights() {

  return (

    <div className="
      grid
      grid-cols-4
      gap-6
      mt-6
    ">

      <div className="dashboard-card p-6">

        <div className="text-slate-400">

          TOTAL EMAILS

        </div>

        <div className="
          text-4xl
          mt-3
          text-blue-400
          font-bold
        ">

          {summary.totalEmails}

        </div>

      </div>

      <div className="dashboard-card p-6">

        <div className="text-slate-400">

          INTERNAL

        </div>

        <div className="
          text-4xl
          mt-3
          text-green-400
          font-bold
        ">

          {summary.plenserEmails}

        </div>

      </div>

      <div className="dashboard-card p-6">

        <div className="text-slate-400">

          EXTERNAL

        </div>

        <div className="
          text-4xl
          mt-3
          text-orange-400
          font-bold
        ">

          {summary.externalEmails}

        </div>

      </div>

      <div className="dashboard-card p-6">

        <div className="text-slate-400">

          AI CATEGORIES

        </div>

        <div className="
          text-4xl
          mt-3
          text-purple-400
          font-bold
        ">

          {summary.categories.length}

        </div>

      </div>

    </div>

  );

}