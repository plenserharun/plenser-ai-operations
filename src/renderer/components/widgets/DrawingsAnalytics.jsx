import React from "react";

import {
  FileText,
  CalendarDays,
  BarChart3,
  BrainCircuit
} from "lucide-react";

import summary
from "../../data/emailSummary.json";

export default function DrawingsAnalytics() {

  const drawings =
    summary.categories.find(
      c => c.name === "Drawings"
    )?.count || 0;

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

            Drawings Intelligence

          </div>

          <div style={{

            marginTop: "8px",
            color: "#64748b"

          }}>

            AI monitored engineering communication analytics

          </div>

        </div>

        <div style={{

          width: "58px",
          height: "58px",

          borderRadius: "18px",

          background: "#2e1065",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          color: "#a855f7"

        }}>

          <FileText size={28} />

        </div>

      </div>

      <div style={{

        display: "grid",
        gridTemplateColumns:
          "1.4fr 1fr",

        gap: "28px"

      }}>

        <div style={{

          background: "#020617",

          borderRadius: "22px",

          padding: "24px",

          border: "1px solid #1e293b"

        }}>

          <div style={{

            display: "flex",
            justifyContent: "space-between",

            marginBottom: "26px"

          }}>

            <div>

              <div style={{
                color: "#64748b"
              }}>

                Drawings Overview

              </div>

              <div style={{

                marginTop: "10px",

                fontSize: "46px",
                fontWeight: "bold",

                color: "#a855f7"

              }}>

                {drawings}

              </div>

            </div>

            <div style={{

              width: "64px",
              height: "64px",

              borderRadius: "20px",

              background: "#2e1065",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              color: "#c084fc"

            }}>

              <BrainCircuit size={30} />

            </div>

          </div>

          <div style={{

            display: "flex",
            alignItems: "flex-end",
            gap: "14px",

            height: "180px"

          }}>

            {[35,60,42,80,56,92,70].map((h,i) => (

              <div
                key={i}
                style={{

                  flex: 1,

                  background:
                    "linear-gradient(180deg,#7c3aed,#c084fc)",

                  height: `${h}%`,

                  borderRadius: "14px 14px 6px 6px",

                  opacity:
                    i === 5 ? 1 : 0.7

                }}
              />

            ))}

          </div>

          <div style={{

            display: "flex",
            justifyContent: "space-between",

            marginTop: "18px",

            color: "#64748b",
            fontSize: "13px"

          }}>

            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>

          </div>

        </div>

        <div style={{

          display: "flex",
          flexDirection: "column",

          gap: "22px"

        }}>

          <div style={{

            background: "#020617",

            borderRadius: "22px",

            padding: "22px",

            border: "1px solid #1e293b"

          }}>

            <div style={{

              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"

            }}>

              <div>

                <div style={{
                  color: "#64748b"
                }}>

                  Daily Drawings

                </div>

                <div style={{

                  marginTop: "10px",
                  fontSize: "36px",
                  fontWeight: "bold"

                }}>

                  12

                </div>

              </div>

              <div style={{

                width: "50px",
                height: "50px",

                borderRadius: "16px",

                background: "#172554",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                color: "#60a5fa"

              }}>

                <CalendarDays size={24} />

              </div>

            </div>

          </div>

          <div style={{

            background: "#020617",

            borderRadius: "22px",

            padding: "22px",

            border: "1px solid #1e293b"

          }}>

            <div style={{

              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"

            }}>

              <div>

                <div style={{
                  color: "#64748b"
                }}>

                  Weekly Drawings

                </div>

                <div style={{

                  marginTop: "10px",
                  fontSize: "36px",
                  fontWeight: "bold"

                }}>

                  48

                </div>

              </div>

              <div style={{

                width: "50px",
                height: "50px",

                borderRadius: "16px",

                background: "#052e16",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                color: "#22c55e"

              }}>

                <BarChart3 size={24} />

              </div>

            </div>

          </div>

          <div style={{

            background: "#020617",

            borderRadius: "22px",

            padding: "22px",

            border: "1px solid #1e293b"

          }}>

            <div style={{

              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"

            }}>

              <div>

                <div style={{
                  color: "#64748b"
                }}>

                  Annual Efficiency

                </div>

                <div style={{

                  marginTop: "10px",
                  fontSize: "36px",
                  fontWeight: "bold"

                }}>

                  94%

                </div>

              </div>

              <div style={{

                width: "50px",
                height: "50px",

                borderRadius: "16px",

                background: "#451a03",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                color: "#f59e0b"

              }}>

                <BrainCircuit size={24} />

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}
