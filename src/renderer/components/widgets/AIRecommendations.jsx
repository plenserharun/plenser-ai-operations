import React from "react";

import {
  BrainCircuit,
  AlertTriangle,
  ShieldCheck,
  TrendingUp,
  FileWarning,
  Globe
} from "lucide-react";

import summary
from "../../data/emailSummary.json";

export default function AIRecommendations() {

  const recommendations = [];

  if(summary.externalEmails >
    summary.plenserEmails * 3) {

    recommendations.push({

      title:
        "High External Communication",

      description:
        "External communication volume exceeds internal operational traffic",

      icon:
        <Globe size={20} />,

      color: "#60a5fa",
      bg: "#172554"

    });

  }

  if(
    summary.categories.find(
      c => c.name === "Drawings"
    )?.count < 2
  ) {

    recommendations.push({

      title:
        "Low Drawings Activity",

      description:
        "Engineering drawing communication volume appears below operational baseline",

      icon:
        <FileWarning size={20} />,

      color: "#a855f7",
      bg: "#2e1065"

    });

  }

  if(
    summary.plenserEmails < 3
  ) {

    recommendations.push({

      title:
        "Low Internal Engagement",

      description:
        "Plenser internal operational communication appears limited",

      icon:
        <ShieldCheck size={20} />,

      color: "#22c55e",
      bg: "#052e16"

    });

  }

  recommendations.push({

    title:
      "AI Operational Stability High",

    description:
      "Operational intelligence systems are synchronized and healthy",

    icon:
      <TrendingUp size={20} />,

    color: "#f59e0b",
    bg: "#451a03"

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

            AI Recommendations Engine

          </div>

          <div style={{

            marginTop: "8px",
            color: "#64748b"

          }}>

            Predictive operational intelligence & optimization

          </div>

        </div>

        <div style={{

          width: "58px",
          height: "58px",

          borderRadius: "18px",

          background: "#172554",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          color: "#60a5fa"

        }}>

          <BrainCircuit size={28} />

        </div>

      </div>

      <div style={{

        display: "flex",
        flexDirection: "column",

        gap: "18px"

      }}>

        {recommendations.map((item,index) => (

          <div
            key={index}
            style={{

              background: "#020617",

              border:
                "1px solid #1e293b",

              borderRadius: "20px",

              padding: "22px",

              display: "flex",
              alignItems: "center",

              gap: "18px"

            }}
          >

            <div style={{

              width: "56px",
              height: "56px",

              borderRadius: "18px",

              background: item.bg,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              color: item.color

            }}>

              {item.icon}

            </div>

            <div>

              <div style={{

                fontWeight: "bold",
                fontSize: "17px"

              }}>

                {item.title}

              </div>

              <div style={{

                marginTop: "6px",
                color: "#64748b"

              }}>

                {item.description}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}
