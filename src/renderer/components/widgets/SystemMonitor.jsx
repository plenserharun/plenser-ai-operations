import React from "react";

import {
  Cpu,
  Database,
  Wifi,
  ShieldCheck,
  Activity,
  HardDrive
} from "lucide-react";

export default function SystemMonitor() {

  const systems = [

    {
      name: "AI Classification Engine",
      value: "ONLINE",
      percent: 96,

      color: "#22c55e",

      icon: <Cpu size={20} />
    },

    {
      name: "Thunderbird Sync",
      value: "ACTIVE",
      percent: 91,

      color: "#3b82f6",

      icon: <Wifi size={20} />
    },

    {
      name: "Email Database",
      value: "STABLE",
      percent: 88,

      color: "#a855f7",

      icon: <Database size={20} />
    },

    {
      name: "Security Layer",
      value: "SECURED",
      percent: 98,

      color: "#f59e0b",

      icon: <ShieldCheck size={20} />
    }

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

        marginBottom: "30px"

      }}>

        <div>

          <div style={{

            fontSize: "28px",
            fontWeight: "bold"

          }}>

            Live AI System Monitor

          </div>

          <div style={{

            marginTop: "8px",
            color: "#64748b"

          }}>

            Real-time operational backend intelligence monitoring

          </div>

        </div>

        <div style={{

          display: "flex",
          alignItems: "center",
          gap: "10px",

          color: "#22c55e",
          fontWeight: "bold"

        }}>

          <div style={{

            width: "10px",
            height: "10px",

            borderRadius: "50%",

            background: "#22c55e"

          }} />

          SYSTEM HEALTHY

        </div>

      </div>

      <div style={{

        display: "grid",
        gridTemplateColumns:
          "1.3fr 1fr",

        gap: "24px"

      }}>

        <div style={{

          display: "flex",
          flexDirection: "column",

          gap: "18px"

        }}>

          {systems.map((system,index) => (

            <div
              key={index}
              style={{

                background: "#020617",

                border:
                  "1px solid #1e293b",

                borderRadius: "20px",

                padding: "22px"

              }}
            >

              <div style={{

                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                marginBottom: "14px"

              }}>

                <div style={{

                  display: "flex",
                  alignItems: "center",

                  gap: "14px"

                }}>

                  <div style={{

                    width: "50px",
                    height: "50px",

                    borderRadius: "16px",

                    background:
                      `${system.color}20`,

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    color: system.color

                  }}>

                    {system.icon}

                  </div>

                  <div>

                    <div style={{
                      fontWeight: "bold"
                    }}>

                      {system.name}

                    </div>

                    <div style={{

                      marginTop: "4px",

                      color: system.color,

                      fontSize: "13px"

                    }}>

                      {system.value}

                    </div>

                  </div>

                </div>

                <div style={{

                  fontSize: "24px",
                  fontWeight: "bold",

                  color: system.color

                }}>

                  {system.percent}%

                </div>

              </div>

              <div style={{

                background: "#1e293b",

                height: "12px",

                borderRadius: "999px",

                overflow: "hidden"

              }}>

                <div style={{

                  width:
                    `${system.percent}%`,

                  height: "100%",

                  background: system.color

                }} />

              </div>

            </div>

          ))}

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
            alignItems: "center",

            marginBottom: "24px"

          }}>

            <div>

              <div style={{

                fontSize: "22px",
                fontWeight: "bold"

              }}>

                System Resources

              </div>

              <div style={{

                marginTop: "6px",
                color: "#64748b"

              }}>

                Live backend operational metrics

              </div>

            </div>

            <HardDrive size={24} />

          </div>

          <div style={{

            display: "flex",
            flexDirection: "column",

            gap: "22px"

          }}>

            <div>

              <div style={{

                display: "flex",
                justifyContent: "space-between",

                marginBottom: "8px"

              }}>

                <span>

                  CPU Usage

                </span>

                <span style={{
                  color: "#22c55e"
                }}>

                  42%

                </span>

              </div>

              <div style={{

                background: "#1e293b",

                height: "10px",

                borderRadius: "999px",

                overflow: "hidden"

              }}>

                <div style={{

                  width: "42%",

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

                  Memory Usage

                </span>

                <span style={{
                  color: "#60a5fa"
                }}>

                  63%

                </span>

              </div>

              <div style={{

                background: "#1e293b",

                height: "10px",

                borderRadius: "999px",

                overflow: "hidden"

              }}>

                <div style={{

                  width: "63%",

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

                  AI Load

                </span>

                <span style={{
                  color: "#a855f7"
                }}>

                  86%

                </span>

              </div>

              <div style={{

                background: "#1e293b",

                height: "10px",

                borderRadius: "999px",

                overflow: "hidden"

              }}>

                <div style={{

                  width: "86%",

                  height: "100%",

                  background:
                    "linear-gradient(90deg,#7c3aed,#c084fc)"

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

                  Operational Stability

                </span>

                <span style={{
                  color: "#f59e0b"
                }}>

                  97%

                </span>

              </div>

              <div style={{

                background: "#1e293b",

                height: "10px",

                borderRadius: "999px",

                overflow: "hidden"

              }}>

                <div style={{

                  width: "97%",

                  height: "100%",

                  background:
                    "linear-gradient(90deg,#f59e0b,#facc15)"

                }} />

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}
