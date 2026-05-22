import React from "react";

import {
  TrendingUp,
  Activity,
  Cpu,
  FileBarChart
} from "lucide-react";

import summary
from "../../data/emailSummary.json";

export default function AnalyticsPanel() {

  const drawings =
    summary.categories.find(
      c => c.name === "Drawings"
    )?.percentage || 0;

  const it =
    summary.categories.find(
      c => c.name === "IT"
    )?.percentage || 0;

  const general =
    summary.categories.find(
      c => c.name === "General"
    )?.percentage || 0;

  return (

    <div style={{

      display: "grid",
      gridTemplateColumns:
        "2fr 1fr",

      gap: "24px",

      marginBottom: "32px"

    }}>

      <div style={{

        background: "#081225",
        border: "1px solid #1e293b",

        borderRadius: "24px",

        padding: "28px"

      }}>

        <div style={{

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          marginBottom: "28px"

        }}>

          <div>

            <div style={{

              fontSize: "26px",
              fontWeight: "bold"

            }}>

              Operational Analytics

            </div>

            <div style={{

              color: "#64748b",
              marginTop: "6px"

            }}>

              AI classified communication intelligence

            </div>

          </div>

          <div style={{

            background: "#172554",

            width: "56px",
            height: "56px",

            borderRadius: "18px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            color: "#60a5fa"

          }}>

            <FileBarChart size={26} />

          </div>

        </div>

        <div style={{

          display: "flex",
          flexDirection: "column",
          gap: "24px"

        }}>

          <div>

            <div style={{

              display: "flex",
              justifyContent: "space-between",

              marginBottom: "10px"

            }}>

              <span style={{
                color: "#cbd5e1"
              }}>

                General Operations

              </span>

              <span style={{
                color: "#3b82f6"
              }}>

                {general}%

              </span>

            </div>

            <div style={{

              background: "#1e293b",
              height: "12px",

              borderRadius: "999px",
              overflow: "hidden"

            }}>

              <div style={{

                width: `${general}%`,
                height: "100%",

                background:
                  "linear-gradient(90deg,#2563eb,#38bdf8)"

              }} />

            </div>

          </div>

          <div>

            <div style={{

              display: "flex",
              justifyContent: "space-between",

              marginBottom: "10px"

            }}>

              <span style={{
                color: "#cbd5e1"
              }}>

                IT Operations

              </span>

              <span style={{
                color: "#f59e0b"
              }}>

                {it}%

              </span>

            </div>

            <div style={{

              background: "#1e293b",
              height: "12px",

              borderRadius: "999px",
              overflow: "hidden"

            }}>

              <div style={{

                width: `${it}%`,
                height: "100%",

                background:
                  "linear-gradient(90deg,#f59e0b,#facc15)"

              }} />

            </div>

          </div>

          <div>

            <div style={{

              display: "flex",
              justifyContent: "space-between",

              marginBottom: "10px"

            }}>

              <span style={{
                color: "#cbd5e1"
              }}>

                Drawings Analytics

              </span>

              <span style={{
                color: "#8b5cf6"
              }}>

                {drawings}%

              </span>

            </div>

            <div style={{

              background: "#1e293b",
              height: "12px",

              borderRadius: "999px",
              overflow: "hidden"

            }}>

              <div style={{

                width: `${drawings}%`,
                height: "100%",

                background:
                  "linear-gradient(90deg,#7c3aed,#a855f7)"

              }} />

            </div>

          </div>

        </div>

      </div>

      <div style={{

        display: "flex",
        flexDirection: "column",

        gap: "22px"

      }}>

        <div style={{

          background: "#081225",
          border: "1px solid #1e293b",

          borderRadius: "24px",

          padding: "24px"

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

                AI Load

              </div>

              <div style={{

                marginTop: "10px",
                fontSize: "38px",
                fontWeight: "bold"

              }}>

                86%

              </div>

            </div>

            <div style={{

              width: "52px",
              height: "52px",

              borderRadius: "16px",

              background: "#052e16",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              color: "#22c55e"

            }}>

              <Cpu size={24} />

            </div>

          </div>

        </div>

        <div style={{

          background: "#081225",
          border: "1px solid #1e293b",

          borderRadius: "24px",

          padding: "24px"

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

                Operational Growth

              </div>

              <div style={{

                marginTop: "10px",
                fontSize: "38px",
                fontWeight: "bold"

              }}>

                +18%

              </div>

            </div>

            <div style={{

              width: "52px",
              height: "52px",

              borderRadius: "16px",

              background: "#172554",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              color: "#60a5fa"

            }}>

              <TrendingUp size={24} />

            </div>

          </div>

        </div>

        <div style={{

          background: "#081225",
          border: "1px solid #1e293b",

          borderRadius: "24px",

          padding: "24px"

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

                Live Monitoring

              </div>

              <div style={{

                marginTop: "10px",
                fontSize: "38px",
                fontWeight: "bold"

              }}>

                ACTIVE

              </div>

            </div>

            <div style={{

              width: "52px",
              height: "52px",

              borderRadius: "16px",

              background: "#451a03",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              color: "#f59e0b"

            }}>

              <Activity size={24} />

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}
