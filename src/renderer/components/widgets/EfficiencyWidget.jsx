import React from "react";

import calculateEfficiency from "../../../backend/ai/calculateEfficiency";

export default function EfficiencyWidget() {

  const efficiency = calculateEfficiency();

  return (

    <div style={{
      background: "#081225",
      borderRadius: "24px",
      padding: "30px",
      border: "1px solid #1e293b",
      marginBottom: "30px",
      position: "relative",
      overflow: "hidden"
    }}>

      <div style={{
        position: "absolute",
        top: "-40px",
        right: "-40px",
        width: "160px",
        height: "160px",
        borderRadius: "100%",
        background: "rgba(59,130,246,0.15)"
      }} />

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}>

        <div>

          <div style={{
            color: "#94a3b8",
            fontSize: "15px",
            marginBottom: "10px"
          }}>
            OVERALL OPERATIONAL EFFICIENCY
          </div>

          <div style={{
            fontSize: "52px",
            fontWeight: "bold",
            color: "white"
          }}>
            {efficiency.score}%
          </div>

        </div>

        <div style={{
          background:
            efficiency.score >= 85
              ? "#22c55e22"
              : efficiency.score >= 70
              ? "#3b82f622"
              : "#f59e0b22",
          color:
            efficiency.score >= 85
              ? "#22c55e"
              : efficiency.score >= 70
              ? "#3b82f6"
              : "#f59e0b",
          padding: "12px 20px",
          borderRadius: "18px",
          fontWeight: "bold",
          fontSize: "16px"
        }}>
          {efficiency.rating}
        </div>

      </div>

      <div style={{
        height: "14px",
        background: "#1e293b",
        borderRadius: "20px",
        overflow: "hidden",
        marginBottom: "18px"
      }}>

        <div style={{
          width: `${efficiency.score}%`,
          height: "100%",
          background:
            efficiency.score >= 85
              ? "#22c55e"
              : efficiency.score >= 70
              ? "#3b82f6"
              : "#f59e0b",
          borderRadius: "20px"
        }} />

      </div>

      <div style={{
        color: "#cbd5e1",
        fontSize: "15px"
      }}>
        Performance is calculated from completed actions,
        proactive improvements, operational delays,
        IT disruptions and pending responsibilities.
      </div>

    </div>

  );

}
