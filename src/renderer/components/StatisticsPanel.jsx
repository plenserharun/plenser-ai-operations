import React from "react";

import operationalData from "../../backend/storage/operationalData";

export default function StatisticsPanel() {

  const metrics = operationalData.metrics;

  const stats = [

    {
      title: "Emails Responded",
      value: metrics.emailsResponded,
      trend: "+12%",
      color: "#8b5cf6"
    },

    {
      title: "Completed Actions",
      value: metrics.completedActions,
      trend: "+8%",
      color: "#22c55e"
    },

    {
      title: "Pending Tasks",
      value: metrics.pendingTasks,
      trend: "-3%",
      color: "#f59e0b"
    },

    {
      title: "Proactive Actions",
      value: metrics.proactiveActions,
      trend: "+18%",
      color: "#3b82f6"
    }

  ];

  return (

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px"
    }}>

      {stats.map((stat, index) => (

        <div
          key={index}
          style={{
            background: "#0f172a",
            padding: "25px",
            borderRadius: "24px",
            border: "1px solid #1e293b",
            position: "relative",
            overflow: "hidden",
            boxShadow: `0 0 25px ${stat.color}22`
          }}
        >

          <div style={{
            position: "absolute",
            top: "-20px",
            right: "-20px",
            width: "100px",
            height: "100px",
            borderRadius: "100%",
            background: `${stat.color}22`
          }} />

          <div style={{
            color: "#94a3b8",
            marginBottom: "15px",
            fontSize: "15px"
          }}>
            {stat.title}
          </div>

          <div style={{
            fontSize: "40px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "12px"
          }}>
            {stat.value}
          </div>

          <div style={{
            color: stat.color,
            fontWeight: "bold",
            fontSize: "15px"
          }}>
            {stat.trend} this week
          </div>

          <div style={{
            marginTop: "20px",
            height: "8px",
            borderRadius: "20px",
            background: "#1e293b",
            overflow: "hidden"
          }}>

            <div style={{
              width:
                index === 0
                  ? "78%"
                  : index === 1
                  ? "65%"
                  : index === 2
                  ? "48%"
                  : "82%",
              height: "100%",
              background: stat.color,
              borderRadius: "20px"
            }} />

          </div>

        </div>

      ))}

    </div>

  );

}
