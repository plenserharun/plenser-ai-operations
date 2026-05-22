import React from "react";

import operationalData from "../../../backend/storage/operationalData";

export default function PriorityAlerts() {

  const tasks = operationalData.tasks;

  const alerts = [

    {
      title: "Pending Operational Tasks",
      value: tasks.filter(
        task => task.status !== "Completed"
      ).length,
      priority: "High",
      color: "#ef4444"
    },

    {
      title: "Drawings Awaiting Review",
      value: tasks.filter(
        task => task.category === "Drawings"
      ).length,
      priority: "Medium",
      color: "#f59e0b"
    },

    {
      title: "IT & Tech Issues",
      value: tasks.filter(
        task => task.category === "IT & Tech"
      ).length,
      priority: "High",
      color: "#8b5cf6"
    },

    {
      title: "Proactive Improvements",
      value: tasks.filter(
        task => task.type === "Proactive"
      ).length,
      priority: "Low",
      color: "#22c55e"
    }

  ];

  return (

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
      marginBottom: "30px"
    }}>

      {alerts.map((alert, index) => (

        <div
          key={index}
          style={{
            background: "#0f172a",
            borderRadius: "24px",
            padding: "25px",
            border: "1px solid #1e293b",
            boxShadow: `0 0 20px ${alert.color}22`,
            position: "relative",
            overflow: "hidden"
          }}
        >

          <div style={{
            position: "absolute",
            top: "-20px",
            right: "-20px",
            width: "90px",
            height: "90px",
            borderRadius: "100%",
            background: `${alert.color}22`
          }} />

          <div style={{
            fontSize: "42px",
            fontWeight: "bold",
            marginBottom: "12px",
            color: "white"
          }}>
            {alert.value}
          </div>

          <div style={{
            color: "white",
            marginBottom: "12px",
            fontSize: "16px"
          }}>
            {alert.title}
          </div>

          <div style={{
            color: alert.color,
            fontWeight: "bold",
            fontSize: "14px"
          }}>
            {alert.priority} Priority
          </div>

        </div>

      ))}

    </div>

  );

}
