import React from "react";

import {
  AlertTriangle,
  ShieldAlert,
  Siren,
  FileWarning,
  BrainCircuit
} from "lucide-react";

import summary
from "../../data/emailSummary.json";

export default function PriorityEngine() {

  const alerts = [];

  if(summary.externalEmails >
    summary.plenserEmails * 4) {

    alerts.push({

      level: "HIGH",

      title:
        "External communication spike detected",

      description:
        "External operational activity significantly exceeds internal communication",

      color: "#ef4444",
      bg: "#450a0a",

      icon:
        <Siren size={22} />

    });

  }

  if(
    summary.topSenders?.[0]?.count > 5
  ) {

    alerts.push({

      level: "MEDIUM",

      title:
        "Heavy sender interaction detected",

      description:
        "High communication concentration identified from one source",

      color: "#f59e0b",
      bg: "#451a03",

      icon:
        <AlertTriangle size={22} />

    });

  }

  if(
    summary.categories.find(
      c => c.name === "Drawings"
    )?.count < 1
  ) {

    alerts.push({

      level: "MEDIUM",

      title:
        "Low engineering drawing activity",

      description:
        "Engineering communication volume below expected operational threshold",

      color: "#8b5cf6",
      bg: "#2e1065",

      icon:
        <FileWarning size={22} />

    });

  }

  alerts.push({

    level: "AI",

    title:
      "AI operational intelligence stable",

    description:
      "Classification systems, sync engines and analytics are operating normally",

    color: "#22c55e",
    bg: "#052e16",

    icon:
      <BrainCircuit size={22} />

  });

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

            AI Priority & Anomaly Engine

          </div>

          <div style={{

            marginTop: "8px",
            color: "#64748b"

          }}>

            Real-time operational risk intelligence monitoring

          </div>

        </div>

        <div style={{

          display: "flex",
          alignItems: "center",

          gap: "10px",

          color: "#22c55e",

          fontWeight: "bold"

        }}>

          <div className="live-pulse" />

          ACTIVE

        </div>

      </div>

      <div style={{

        display: "flex",
        flexDirection: "column",

        gap: "18px"

      }}>

        {alerts.map((alert,index) => (

          <div
            key={index}
            style={{

              background: "#020617",

              border:
                `1px solid ${alert.color}40`,

              borderRadius: "20px",

              padding: "22px",

              display: "flex",
              alignItems: "center",

              gap: "18px"

            }}
          >

            <div style={{

              width: "58px",
              height: "58px",

              borderRadius: "18px",

              background: alert.bg,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              color: alert.color

            }}>

              {alert.icon}

            </div>

            <div style={{ flex: 1 }}>

              <div style={{

                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"

              }}>

                <div style={{

                  fontWeight: "bold",
                  fontSize: "17px"

                }}>

                  {alert.title}

                </div>

                <div style={{

                  padding:
                    "6px 12px",

                  borderRadius: "999px",

                  background:
                    `${alert.color}20`,

                  color: alert.color,

                  fontSize: "12px",
                  fontWeight: "bold"

                }}>

                  {alert.level}

                </div>

              </div>

              <div style={{

                marginTop: "8px",

                color: "#64748b"

              }}>

                {alert.description}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}
