import React, {
  useEffect,
  useState
} from "react";

import {
  Activity,
  Wifi,
  BrainCircuit,
  ShieldCheck,
  Database,
  Cpu
} from "lucide-react";

export default function LiveStatusBar() {

  const statuses = [

    "AI operational intelligence synchronized",

    "Thunderbird monitoring active",

    "Email classification engine healthy",

    "Engineering analytics pipeline stable",

    "Operational anomaly engine active",

    "Live communication monitoring enabled"

  ];

  const [index,setIndex] =
    useState(0);

  useEffect(() => {

    const interval =
      setInterval(() => {

        setIndex(prev =>

          (prev + 1)
          % statuses.length

        );

      },4000);

    return () =>
      clearInterval(interval);

  },[]);

  const systems = [

    {
      icon:
        <Activity size={16} />,
      label: "LIVE"
    },

    {
      icon:
        <Wifi size={16} />,
      label: "SYNCED"
    },

    {
      icon:
        <BrainCircuit size={16} />,
      label: "AI ACTIVE"
    },

    {
      icon:
        <ShieldCheck size={16} />,
      label: "SECURE"
    },

    {
      icon:
        <Database size={16} />,
      label: "DATA LIVE"
    },

    {
      icon:
        <Cpu size={16} />,
      label: "ENGINE READY"
    }

  ];

  return (

    <div style={{

      background: "#081225",

      border:
        "1px solid #1e293b",

      borderRadius: "22px",

      padding: "18px 24px",

      marginBottom: "32px",

      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      overflow: "hidden"

    }}>

      <div style={{

        display: "flex",
        alignItems: "center",

        gap: "16px"

      }}>

        <div className="live-pulse" />

        <div style={{

          fontWeight: "bold",

          color: "#22c55e"

        }}>

          LIVE STATUS

        </div>

        <div style={{
          color: "#475569"
        }}>

          |

        </div>

        <div
          className="fade-in"

          style={{

            color: "#cbd5e1"

          }}
        >

          {statuses[index]}

        </div>

      </div>

      <div style={{

        display: "flex",
        alignItems: "center",

        gap: "14px"

      }}>

        {systems.map((item,index) => (

          <div
            key={index}

            style={{

              background: "#020617",

              border:
                "1px solid #1e293b",

              borderRadius: "14px",

              padding: "10px 14px",

              display: "flex",
              alignItems: "center",

              gap: "8px",

              color: "#94a3b8",

              fontSize: "13px"

            }}
          >

            {item.icon}

            {item.label}

          </div>

        ))}

      </div>

    </div>

  );

}
