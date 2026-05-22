import React from "react";

import {
  Mail,
  Globe,
  Server,
  ShieldCheck,
  BrainCircuit,
  BarChart3
} from "lucide-react";

import useLiveSummary from "../../hooks/useLiveSummary";
import useNotifications from "../../hooks/useNotifications";

import summary
from "../../data/emailSummary.json";

export default function EmailInsightsPanel() {

  const liveSummary =
    useLiveSummary();

  useNotifications(
    liveSummary
  );

  const internal =
    summary.plenserEmails;

  const external =
    summary.externalEmails;

  const total =
    summary.totalEmails;

  const internalPercent =
    total
      ? ((internal / total) * 100).toFixed(1)
      : 0;

  const externalPercent =
    total
      ? ((external / total) * 100).toFixed(1)
      : 0;

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

            Email Intelligence Center

          </div>

          <div style={{

            marginTop: "8px",
            color: "#64748b"

          }}>

            AI powered operational communication analytics

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

        display: "grid",
        gridTemplateColumns:
          "1.4fr 1fr",

        gap: "24px"

      }}>

        <div style={{

          display: "grid",
          gridTemplateColumns:
            "repeat(2,1fr)",

          gap: "22px"

        }}>

          <div style={{

            background: "#020617",

            border:
              "1px solid #1e293b",

            borderRadius: "22px",

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

                  Total Emails

                </div>

                <div style={{

                  marginTop: "10px",

                  fontSize: "40px",
                  fontWeight: "bold"

                }}>

                  {total}

                </div>

              </div>

              <div style={{

                width: "54px",
                height: "54px",

                borderRadius: "18px",

                background: "#172554",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                color: "#60a5fa"

              }}>

                <Mail size={24} />

              </div>

            </div>

          </div>

          <div style={{

            background: "#020617",

            border:
              "1px solid #1e293b",

            borderRadius: "22px",

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

                  Internal (Plenser)

                </div>

                <div style={{

                  marginTop: "10px",

                  fontSize: "40px",
                  fontWeight: "bold",

                  color: "#22c55e"

                }}>

                  {internal}

                </div>

              </div>

              <div style={{

                width: "54px",
                height: "54px",

                borderRadius: "18px",

                background: "#052e16",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                color: "#22c55e"

              }}>

                <ShieldCheck size={24} />

              </div>

            </div>

          </div>

          <div style={{

            background: "#020617",

            border:
              "1px solid #1e293b",

            borderRadius: "22px",

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

                  External Emails

                </div>

                <div style={{

                  marginTop: "10px",

                  fontSize: "40px",
                  fontWeight: "bold",

                  color: "#60a5fa"

                }}>

                  {external}

                </div>

              </div>

              <div style={{

                width: "54px",
                height: "54px",

                borderRadius: "18px",

                background: "#172554",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                color: "#60a5fa"

              }}>

                <Globe size={24} />

              </div>

            </div>

          </div>

          <div style={{

            background: "#020617",

            border:
              "1px solid #1e293b",

            borderRadius: "22px",

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

                  Mail Host Activity

                </div>

                <div style={{

                  marginTop: "10px",

                  fontSize: "40px",
                  fontWeight: "bold",

                  color: "#f59e0b"

                }}>

                  LIVE

                </div>

              </div>

              <div style={{

                width: "54px",
                height: "54px",

                borderRadius: "18px",

                background: "#451a03",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                color: "#f59e0b"

              }}>

                <Server size={24} />

              </div>

            </div>

          </div>

        </div>

        <div style={{

          background: "#020617",

          border:
            "1px solid #1e293b",

          borderRadius: "22px",

          padding: "26px"

        }}>

          <div style={{

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            marginBottom: "24px"

          }}>

            <div>

              <div style={{

                fontWeight: "bold",
                fontSize: "20px"

              }}>

                Efficiency Metrics

              </div>

              <div style={{

                marginTop: "6px",
                color: "#64748b"

              }}>

                AI communication intelligence

              </div>

            </div>

            <BarChart3 size={24} />

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

                marginBottom: "8px"

              }}>

                <span>

                  Internal Efficiency

                </span>

                <span style={{
                  color: "#22c55e"
                }}>

                  {internalPercent}%

                </span>

              </div>

              <div style={{

                background: "#1e293b",

                height: "12px",

                borderRadius: "999px",

                overflow: "hidden"

              }}>

                <div style={{

                  width:
                    `${internalPercent}%`,

                  height: "100%",

                  background:
                    "linear-gradient(90deg,#22c55e,#4ade80)"

                }} />

              </div>

            </div>

            <div>

              <div style={{

                display: "flex",
                justifyContent: "space-between",

                marginBottom: "8px"

              }}>

                <span>

                  External Efficiency

                </span>

                <span style={{
                  color: "#60a5fa"
                }}>

                  {externalPercent}%

                </span>

              </div>

              <div style={{

                background: "#1e293b",

                height: "12px",

                borderRadius: "999px",

                overflow: "hidden"

              }}>

                <div style={{

                  width:
                    `${externalPercent}%`,

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

                marginBottom: "8px"

              }}>

                <span>

                  AI Classification

                </span>

                <span style={{
                  color: "#a855f7"
                }}>

                  96%

                </span>

              </div>

              <div style={{

                background: "#1e293b",

                height: "12px",

                borderRadius: "999px",

                overflow: "hidden"

              }}>

                <div style={{

                  width: "96%",

                  height: "100%",

                  background:
                    "linear-gradient(90deg,#7c3aed,#c084fc)"

                }} />

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}
