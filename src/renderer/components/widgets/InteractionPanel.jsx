import React from "react";

import {
  Users,
  ShieldCheck,
  Globe,
  MessageSquare
} from "lucide-react";

import summary
from "../../data/emailSummary.json";

export default function InteractionPanel() {

  const colors = [

    "#2563eb",
    "#7c3aed",
    "#22c55e",
    "#f59e0b",
    "#ec4899"

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

            People & Interactions

          </div>

          <div style={{

            marginTop: "8px",
            color: "#64748b"

          }}>

            AI tracked operational communication intelligence

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

          <Users size={28} />

        </div>

      </div>

      <div style={{

        display: "grid",
        gridTemplateColumns:
          "repeat(3,1fr)",

        gap: "22px"

      }}>

        {summary.topSenders.map((person,index) => {

          const isInternal =
            person.name
              .toLowerCase()
              .includes("@plenser.com");

          return (

            <div
              key={person.name}
              style={{

                background: "#020617",

                border:
                  "1px solid #1e293b",

                borderRadius: "22px",

                padding: "22px",

                position: "relative",

                overflow: "hidden"

              }}
            >

              <div style={{

                position: "absolute",
                top: "-20px",
                right: "-20px",

                width: "110px",
                height: "110px",

                borderRadius: "50%",

                background:
                  colors[index % colors.length],

                opacity: 0.15

              }} />

              <div style={{

                display: "flex",
                alignItems: "center",
                gap: "16px",

                position: "relative",
                zIndex: 2

              }}>

                <div style={{

                  width: "68px",
                  height: "68px",

                  borderRadius: "20px",

                  background:
                    colors[index % colors.length],

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  fontSize: "22px",
                  fontWeight: "bold",

                  color: "white"

                }}>

                  AI

                </div>

                <div>

                  <div style={{

                    fontWeight: "bold",
                    fontSize: "17px"

                  }}>

                    {person.name
                      .split("<")[0]
                      .trim()}

                  </div>

                  <div style={{

                    marginTop: "6px",

                    display: "flex",
                    alignItems: "center",
                    gap: "8px",

                    color:
                      isInternal
                        ? "#22c55e"
                        : "#60a5fa",

                    fontSize: "13px"

                  }}>

                    {

                      isInternal

                      ? <ShieldCheck size={14} />

                      : <Globe size={14} />

                    }

                    {

                      isInternal
                        ? "Internal (Plenser)"
                        : "External"

                    }

                  </div>

                </div>

              </div>

              <div style={{

                marginTop: "24px",

                display: "flex",
                justifyContent: "space-between",

                position: "relative",
                zIndex: 2

              }}>

                <div>

                  <div style={{
                    color: "#64748b",
                    fontSize: "13px"
                  }}>

                    Interactions

                  </div>

                  <div style={{

                    marginTop: "8px",

                    fontSize: "30px",
                    fontWeight: "bold"

                  }}>

                    {person.count}

                  </div>

                </div>

                <div>

                  <div style={{
                    color: "#64748b",
                    fontSize: "13px"
                  }}>

                    Contribution

                  </div>

                  <div style={{

                    marginTop: "8px",

                    fontSize: "30px",
                    fontWeight: "bold",

                    color:
                      colors[index % colors.length]

                  }}>

                    {person.percentage}%

                  </div>

                </div>

              </div>

              <div style={{

                marginTop: "22px",

                background: "#081225",

                borderRadius: "16px",

                padding: "14px",

                display: "flex",
                alignItems: "center",
                gap: "10px",

                position: "relative",
                zIndex: 2

              }}>

                <MessageSquare size={18} />

                Frequent operational interaction detected

              </div>

            </div>

          );

        })}

      </div>

    </div>

  );

}
