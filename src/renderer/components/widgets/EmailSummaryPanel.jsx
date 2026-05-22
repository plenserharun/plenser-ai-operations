import React from "react";

import summary
from "../../data/emailSummary.json";

export default function EmailSummaryPanel() {

  return (

    <div style={{

      background: "#081225",
      border: "1px solid #1e293b",
      borderRadius: "24px",
      padding: "30px",
      marginTop: "30px"

    }}>

      <div style={{

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "25px"

      }}>

        <h2 style={{

          color: "white",
          fontSize: "28px"

        }}>

          LIVE EMAIL INTELLIGENCE

        </h2>

        <div style={{

          color: "#22c55e",
          fontWeight: "bold"

        }}>

          ● ACTIVE

        </div>

      </div>

      <div style={{

        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "25px"

      }}>

        <div style={{

          background: "#0f172a",
          borderRadius: "20px",
          padding: "25px"

        }}>

          <h3 style={{

            color: "white",
            marginBottom: "20px"

          }}>

            CATEGORY ANALYTICS

          </h3>

          <div style={{

            display: "flex",
            flexDirection: "column",
            gap: "18px"

          }}>

            {summary.categories.map((item) => (

              <div key={item.name}>

                <div style={{

                  display: "flex",
                  justifyContent: "space-between",
                  color: "#cbd5e1",
                  marginBottom: "6px"

                }}>

                  <span>

                    {item.name}

                  </span>

                  <span>

                    {item.count}
                    {" "}
                    (
                    {item.percentage}
                    %)

                  </span>

                </div>

                <div style={{

                  background: "#1e293b",
                  height: "10px",
                  borderRadius: "999px",
                  overflow: "hidden"

                }}>

                  <div style={{

                    width:
                      `${item.percentage}%`,

                    height: "100%",

                    background:

                      item.name === "IT"
                        ? "#f59e0b"

                      : item.name === "Drawings"
                        ? "#8b5cf6"

                      : item.name === "Design Posters"
                        ? "#22c55e"

                      : "#3b82f6"

                  }} />

                </div>

              </div>

            ))}

          </div>

        </div>

        <div style={{

          background: "#0f172a",
          borderRadius: "20px",
          padding: "25px"

        }}>

          <h3 style={{

            color: "white",
            marginBottom: "20px"

          }}>

            TOP COMMUNICATORS

          </h3>

          <div style={{

            display: "flex",
            flexDirection: "column",
            gap: "16px"

          }}>

            {summary.topSenders.map((sender) => (

              <div
                key={sender.name}
                style={{

                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom:
                    "1px solid #1e293b",

                  paddingBottom: "10px",

                  color: "#cbd5e1"

                }}
              >

                <span>

                  {sender.name}

                </span>

                <span>

                  {sender.count}
                  {" "}
                  (
                  {sender.percentage}
                  %)

                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

      <div style={{

        display: "grid",
        gridTemplateColumns:
          "repeat(3, 1fr)",

        gap: "20px",

        marginTop: "30px"

      }}>

        <div style={{

          background: "#0f172a",
          borderRadius: "18px",
          padding: "20px"

        }}>

          <div style={{

            fontSize: "34px",
            color: "#60a5fa",
            fontWeight: "bold"

          }}>

            {summary.totalEmails}

          </div>

          <div style={{
            color: "#cbd5e1",
            marginTop: "8px"
          }}>

            Total Operational Emails

          </div>

        </div>

        <div style={{

          background: "#0f172a",
          borderRadius: "18px",
          padding: "20px"

        }}>

          <div style={{

            fontSize: "34px",
            color: "#22c55e",
            fontWeight: "bold"

          }}>

            {summary.plenserEmails}

          </div>

          <div style={{
            color: "#cbd5e1",
            marginTop: "8px"
          }}>

            Internal Plenser Emails

          </div>

        </div>

        <div style={{

          background: "#0f172a",
          borderRadius: "18px",
          padding: "20px"

        }}>

          <div style={{

            fontSize: "34px",
            color: "#f59e0b",
            fontWeight: "bold"

          }}>

            {summary.externalEmails}

          </div>

          <div style={{
            color: "#cbd5e1",
            marginTop: "8px"
          }}>

            External Emails

          </div>

        </div>

      </div>

    </div>

  );

}