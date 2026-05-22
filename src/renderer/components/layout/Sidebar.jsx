import React from "react";

import {
  LayoutDashboard,
  Activity,
  FileText,
  Users,
  Globe,
  Server,
  BrainCircuit,
  Workflow,
  Bot,
  ShieldCheck,
  Database,
  Settings,
  BarChart3
} from "lucide-react";

import plenserLogo
from "../../assets/plenser-logo.png";

export default function Sidebar() {

  const menuItems = [

    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard"
    },

    {
      icon: <Activity size={20} />,
      label: "AI Insights"
    },

    {
      icon: <FileText size={20} />,
      label: "Drawings Analytics"
    },

    {
      icon: <Users size={20} />,
      label: "People & Interactions"
    },

    {
      icon: <Server size={20} />,
      label: "Internal (Plenser)"
    },

    {
      icon: <Database size={20} />,
      label: "Mail Host (Mailsafi)"
    },

    {
      icon: <Globe size={20} />,
      label: "Web Host"
    },

    {
      icon: <BrainCircuit size={20} />,
      label: "AI Efficiency"
    },

    {
      icon: <Workflow size={20} />,
      label: "Workflow Automation"
    },

    {
      icon: <Bot size={20} />,
      label: "AI Assistant"
    }

  ];

  const developerItems = [

    {
      icon: <ShieldCheck size={18} />,
      label: "System Health"
    },

    {
      icon: <Database size={18} />,
      label: "Email Logs"
    },

    {
      icon: <BrainCircuit size={18} />,
      label: "AI Classifier"
    },

    {
      icon: <BarChart3 size={18} />,
      label: "Reports & Exports"
    },

    {
      icon: <Settings size={18} />,
      label: "Settings"
    }

  ];

  return (

    <div className="sidebar fade-in" style={{

      width: "280px",
      background: "#020817",
      borderRight: "1px solid #1e293b",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"

    }}>

      <div>

        <div className="sidebar fade-in" style={{

          marginBottom: "35px"

        }}>

          <img
            src={plenserLogo}
            alt="Plenser Logo"
            style={{

              width: "100%",
              borderRadius: "14px"

            }}
          />

          <div className="sidebar fade-in" style={{

            marginTop: "18px",
            color: "#94a3b8",
            fontSize: "14px",
            letterSpacing: "1px"

          }}>

            OPERATIONS COMMAND CENTER

          </div>

        </div>

        <div className="sidebar fade-in" style={{

          display: "flex",
          flexDirection: "column",
          gap: "10px"

        }}>

          {menuItems.map((item) => (

            <div
              key={item.label}
              style={{

                display: "flex",
                alignItems: "center",
                gap: "14px",

                padding: "14px 16px",

                borderRadius: "14px",

                cursor: "pointer",

                background:
                  item.label === "Dashboard"
                    ? "#1d4ed8"
                    : "transparent",

                color: "white"

              }}
            >

              {item.icon}

              <span>

                {item.label}

              </span>

            </div>

          ))}

        </div>

        <div className="sidebar fade-in" style={{

          marginTop: "40px"

        }}>

          <div className="sidebar fade-in" style={{

            color: "#64748b",
            fontSize: "13px",
            marginBottom: "18px",
            letterSpacing: "1px"

          }}>

            DEVELOPER TOOLS

          </div>

          <div className="sidebar fade-in" style={{

            display: "flex",
            flexDirection: "column",
            gap: "10px"

          }}>

            {developerItems.map((item) => (

              <div
                key={item.label}
                style={{

                  display: "flex",
                  alignItems: "center",
                  gap: "12px",

                  padding: "12px 14px",

                  borderRadius: "12px",

                  color: "#cbd5e1"

                }}
              >

                {item.icon}

                <span>

                  {item.label}

                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

      <div className="sidebar fade-in" style={{

        background: "#081225",
        border: "1px solid #1e293b",
        borderRadius: "20px",
        padding: "20px"

      }}>

        <div className="sidebar fade-in" style={{

          color: "#94a3b8",
          marginBottom: "10px"

        }}>

          AI Efficiency Score

        </div>

        <div className="sidebar fade-in" style={{

          fontSize: "42px",
          fontWeight: "bold",
          color: "#22c55e"

        }}>

          92%

        </div>

        <div className="sidebar fade-in" style={{

          marginTop: "10px",
          color: "#22c55e"

        }}>

          Excellent

        </div>

      </div>

    </div>

  );

}
