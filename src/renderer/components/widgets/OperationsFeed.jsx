import React from "react";

import {
  Activity,
  ShieldAlert,
  FileText,
  Cpu,
  Globe,
  CheckCircle2
} from "lucide-react";

export default function OperationsFeed() {

  const feed = [

    {
      title: "AI classified engineering drawing",
      description:
        "HVAC drawing interaction detected and categorized",

      time: "2 mins ago",

      icon: <FileText size={18} />,

      color: "#8b5cf6",
      bg: "#2e1065"
    },

    {
      title: "Operational synchronization active",
      description:
        "Thunderbird intelligence pipeline synchronized",

      time: "5 mins ago",

      icon: <Activity size={18} />,

      color: "#22c55e",
      bg: "#052e16"
    },

    {
      title: "Internal Plenser interaction detected",
      description:
        "Operational communication identified from Plenser domain",

      time: "9 mins ago",

      icon: <CheckCircle2 size={18} />,

      color: "#3b82f6",
      bg: "#172554"
    },

    {
      title: "IT operational classification active",
      description:
        "System identified IT related operational activity",

      time: "15 mins ago",

      icon: <ShieldAlert size={18} />,

      color: "#f59e0b",
      bg: "#451a03"
    },

    {
      title: "External communication monitored",
      description:
        "AI interaction tracking active on external communication",

      time: "21 mins ago",

      icon: <Globe size={18} />,

      color: "#06b6d4",
      bg: "#083344"
    },

    {
      title: "AI operational engine healthy",
      description:
        "Classifier, analytics and dashboard systems stable",

      time: "35 mins ago",

      icon: <Cpu size={18} />,

      color: "#ec4899",
      bg: "#4a044e"
    }

  ];

  return (

    <div style={{

      background: "#081225",
      border: "1px solid #1e293b",

      borderRadius: "24px",

      padding: "30px",

      marginBottom: "30px"

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

            Live Operations Feed

          </div>

          <div style={{

            marginTop: "8px",
            color: "#64748b"

          }}>

            Real-time AI operational activity monitoring

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

          LIVE STREAM

        </div>

      </div>

      <div style={{

        display: "flex",
        flexDirection: "column",

        gap: "18px"

      }}>

        {feed.map((item,index) => (

          <div
            key={index}
            style={{

              background: "#020617",

              border:
                "1px solid #1e293b",

              borderRadius: "20px",

              padding: "22px",

              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"

            }}
          >

            <div style={{

              display: "flex",
              alignItems: "center",

              gap: "18px"

            }}>

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

            <div style={{

              color: "#94a3b8",
              fontSize: "13px"

            }}>

              {item.time}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}
