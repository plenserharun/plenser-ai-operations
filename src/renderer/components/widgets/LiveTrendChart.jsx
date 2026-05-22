import React from "react";

import {

  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip

} from "recharts";

export default function LiveTrendChart() {

  const data = [

    {
      day: "Mon",
      emails: 12,
      drawings: 2
    },

    {
      day: "Tue",
      emails: 18,
      drawings: 4
    },

    {
      day: "Wed",
      emails: 10,
      drawings: 1
    },

    {
      day: "Thu",
      emails: 22,
      drawings: 6
    },

    {
      day: "Fri",
      emails: 17,
      drawings: 5
    },

    {
      day: "Sat",
      emails: 26,
      drawings: 8
    },

    {
      day: "Sun",
      emails: 20,
      drawings: 4
    }

  ];

  return (

    <div style={{

      background: "#081225",
      border: "1px solid #1e293b",

      borderRadius: "24px",

      padding: "30px",

      marginBottom: "32px"

    }}>

      <div style={{

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        marginBottom: "28px"

      }}>

        <div>

          <div style={{

            fontSize: "28px",
            fontWeight: "bold"

          }}>

            Operational Trend Intelligence

          </div>

          <div style={{

            marginTop: "8px",
            color: "#64748b"

          }}>

            AI monitored operational activity trends

          </div>

        </div>

        <div style={{

          color: "#22c55e",
          fontWeight: "bold"

        }}>

          LIVE DATA

        </div>

      </div>

      <div style={{
        width: "100%",
        height: "340px"
      }}>

        <ResponsiveContainer>

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="emails"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#2563eb"
                  stopOpacity={0.8}
                />

                <stop
                  offset="95%"
                  stopColor="#2563eb"
                  stopOpacity={0}
                />

              </linearGradient>

              <linearGradient
                id="drawings"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#7c3aed"
                  stopOpacity={0.8}
                />

                <stop
                  offset="95%"
                  stopColor="#7c3aed"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <XAxis
              dataKey="day"
              stroke="#64748b"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="emails"

              stroke="#2563eb"

              fillOpacity={1}
              fill="url(#emails)"
            />

            <Area
              type="monotone"
              dataKey="drawings"

              stroke="#7c3aed"

              fillOpacity={1}
              fill="url(#drawings)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}
