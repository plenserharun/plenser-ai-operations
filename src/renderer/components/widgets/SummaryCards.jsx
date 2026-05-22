import React from "react";

import {
  BrainCircuit,
  FileText,
  Users,
  ShieldCheck
} from "lucide-react";

import useLiveSummary
from "../../hooks/useLiveSummary";

export default function SummaryCards() {

  const summary =
    useLiveSummary();

  if (!summary) {

    return (

      <div style={{

        color: "white",

        marginBottom: "30px"

      }}>

        Loading live analytics...

      </div>

    );

  }

  const cards = [

    {
      title: "AI Efficiency",
      value: "92%",
      icon: <BrainCircuit size={26} />,
      color: "#22c55e",
      bg: "#052e16",
      sub: "Operational intelligence active"
    },

    {
      title: "Drawings Tracked",
      value: summary.drawings,

      icon: <FileText size={26} />,
      color: "#8b5cf6",
      bg: "#2e1065",
      sub: "Daily engineering analysis"
    },

    {
      title: "Internal Emails",
      value: summary.internal,

      icon: <ShieldCheck size={26} />,
      color: "#3b82f6",
      bg: "#172554",
      sub: "Plenser operational traffic"
    },

    {
      title: "Interactions",
      value: summary.totalEmails,

      icon: <Users size={26} />,
      color: "#f59e0b",
      bg: "#451a03",
      sub: "Frequent communication patterns"
    }

  ];

  return (

    <div style={{

      display: "grid",

      gridTemplateColumns:
        "repeat(4,1fr)",

      gap: "22px",

      marginBottom: "32px"

    }}>

      {cards.map((card) => (

        <div
          key={card.title}

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

            top: "-20px",
            right: "-20px",

            width: "120px",
            height: "120px",

            borderRadius: "50%",

            background: card.bg,

            opacity: 0.4

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

                {card.title}

              </div>

              <div style={{

                fontSize: "42px",
                fontWeight: "bold",

                marginTop: "12px",

                color: "white"

              }}>

                {card.value}

              </div>

            </div>

            <div style={{

              width: "58px",
              height: "58px",

              borderRadius: "18px",

              background: card.bg,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              color: card.color

            }}>

              {card.icon}

            </div>

          </div>

          <div style={{

            marginTop: "20px",

            color: "#64748b",

            fontSize: "13px",

            position: "relative",
            zIndex: 2

          }}>

            {card.sub}

          </div>

        </div>

      ))}

    </div>

  );

}
