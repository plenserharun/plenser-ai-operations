import React from "react";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis
} from "recharts";

import summary from "../../data/emailSummary.json";

const COLORS = [
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
  "#8b5cf6"
];

export default function AnalyticsCharts() {

  return (

    <div className="
      grid
      grid-cols-2
      gap-6
      mt-6
    ">

      <div className="
        dashboard-card
        p-6
      ">

        <h3 className="
          text-xl
          font-bold
          mb-6
        ">
          EMAIL BREAKDOWN
        </h3>

        <div className="h-[320px]">

          <ResponsiveContainer>

            <PieChart>

              <Pie
                data={summary.categories}
                dataKey="count"
                nameKey="name"
                outerRadius={110}
              >

                {summary.categories.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index % COLORS.length
                      ]
                    }
                  />

                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

      <div className="
        dashboard-card
        p-6
      ">

        <h3 className="
          text-xl
          font-bold
          mb-6
        ">
          TOP COMMUNICATION
        </h3>

        <div className="h-[320px]">

          <ResponsiveContainer>

            <BarChart
              data={summary.topSenders}
            >

              <XAxis
                dataKey="name"
                hide
              />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="count"
                fill="#3b82f6"
                radius={[8, 8, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  );

}