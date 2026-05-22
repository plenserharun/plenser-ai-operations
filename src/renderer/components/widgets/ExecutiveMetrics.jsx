import React from "react";

import {
  Activity,
  Gauge,
  Zap,
  BrainCircuit,
  TimerReset,
  Workflow
} from "lucide-react";

export default function ExecutiveMetrics() {

  const metrics = [

    {
      title: "Operational Throughput",
      value: "1.8K",
      sub: "Processed operational events",
      color: "#3b82f6",
      bg: "#172554",
      icon: <Activity size={24} />
    },

    {
      title: "AI Processing Speed",
      value: "98ms",
      sub: "Average classification latency",
      color: "#22c55e",
      bg: "#052e16",
      icon: <Zap size={24} />
    },

    {
      title: "System Uptime",
      value: "99.9%",
      sub: "Operational availability",
      color: "#a855f7",
      bg: "#2e1065",
      icon: <Gauge size={24} />
    },

    {
      title: "Workflow Stability",
      value: "94%",
      sub: "Automation confidence score",
      color: "#f59e0b",
      bg: "#451a03",
      icon: <Workflow size={24} />
    },

    {
      title: "AI Intelligence",
      value: "ACTIVE",
      sub: "Predictive monitoring enabled",
      color: "#ec4899",
      bg: "#4a044e",
      icon: <BrainCircuit size={24} />
    },

    {
      title: "Live Sync Rate",
      value: "5s",
      sub: "Thunderbird synchronization",
      color: "#06b6d4",
      bg: "#083344",
      icon: <TimerReset size={24} />
    }

  ];

  return (

    <div
      className="fade-in"
      style={{

        display: "grid",

        gridTemplateColumns:
          "repeat(3,1fr)",

        gap: "22px",

        marginBottom: "32px"

      }}
    >

      {metrics.map((metric,index) => (

        <div
          key={index}

          className="dashboard-card"

          style={{

            background: "#081225",

            border:
              "1px solid #1e293b",

            borderRadius: "24px",

            padding: "24px",

            position: "relative",

            overflow: "hidden"

          }}
        >

          <div style={{

            position: "absolute",

            top: "-30px",
            right: "-30px",

            width: "120px",
            height: "120px",

            borderRadius: "50%",

            background: metric.bg,

            opacity: 0.25

          }} />

          <div style={{

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            position: "relative",
            zIndex: 2

          }}>

            <div>

              <div style={{

                color: "#94a3b8",

                fontSize: "14px"

              }}>

                {metric.title}

              </div>

              <div style={{

                marginTop: "12px",

                fontSize: "38px",
                fontWeight: "bold"

              }}>

                {metric.value}

              </div>

            </div>

            <div style={{

              width: "58px",
              height: "58px",

              borderRadius: "18px",

              background: metric.bg,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              color: metric.color

            }}>

              {metric.icon}

            </div>

          </div>

          <div style={{

            marginTop: "18px",

            color: "#64748b",

            fontSize: "13px",

            position: "relative",
            zIndex: 2

          }}>

            {metric.sub}

          </div>

        </div>

      ))}

    </div>

  );

}
