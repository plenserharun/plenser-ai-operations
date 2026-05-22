import React from "react";

import {
  Bell,
  Search,
  Activity,
  Cpu,
  Wifi
} from "lucide-react";

export default function Header() {

  const now =
    new Date().toLocaleString();

  return (

    <div className="header-row fade-in" style={{

      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      marginBottom: "35px"

    }}>

      <div>

        <div className="header-row fade-in" style={{

          fontSize: "38px",
          fontWeight: "bold",
          color: "white"

        }}>

          Harun G

        </div>

        <div className="header-row fade-in" style={{

          marginTop: "8px",
          color: "#94a3b8",
          display: "flex",
          alignItems: "center",
          gap: "12px"

        }}>

          <div className="header-row fade-in" style={{

            display: "flex",
            alignItems: "center",
            gap: "6px",

            color: "#22c55e"

          }}>

            <Activity size={16} />

            LIVE OPERATIONS

          </div>

          <div className="header-row fade-in" style={{
            color: "#475569"
          }}>

            |

          </div>

          <div>

            {now}

          </div>

        </div>

      </div>

      <div className="header-row fade-in" style={{

        display: "flex",
        alignItems: "center",
        gap: "18px"

      }}>

        <div className="header-row fade-in" style={{

          background: "#081225",
          border: "1px solid #1e293b",

          display: "flex",
          alignItems: "center",
          gap: "10px",

          padding: "14px 18px",

          borderRadius: "16px",

          width: "280px"

        }}>

          <Search size={18} color="#94a3b8" />

          <input
            placeholder="Search operations..."
            style={{

              background: "transparent",
              border: "none",
              outline: "none",
              color: "white",
              width: "100%"

            }}
          />

        </div>

        <div className="header-row fade-in" style={{

          background: "#081225",
          border: "1px solid #1e293b",

          width: "52px",
          height: "52px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          borderRadius: "16px"

        }}>

          <Bell size={20} />

        </div>

        <div className="header-row fade-in" style={{

          background: "#081225",
          border: "1px solid #1e293b",

          padding: "12px 18px",

          borderRadius: "16px",

          display: "flex",
          alignItems: "center",
          gap: "12px"

        }}>

          <div className="header-row fade-in" style={{

            width: "42px",
            height: "42px",

            borderRadius: "50%",

            background:
              "linear-gradient(135deg,#2563eb,#7c3aed)",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            fontWeight: "bold"

          }}>

            HG

          </div>

          <div>

            <div className="header-row fade-in" style={{

              fontWeight: "bold"

            }}>

              Harun G

            </div>

            <div className="header-row fade-in" style={{

              color: "#94a3b8",
              fontSize: "13px",

              display: "flex",
              alignItems: "center",
              gap: "6px"

            }}>

              <Cpu size={13} />

              AI Operations Lead

            </div>

          </div>

        </div>

        <div className="header-row fade-in" style={{

          background: "#081225",
          border: "1px solid #1e293b",

          padding: "12px 16px",

          borderRadius: "16px",

          display: "flex",
          alignItems: "center",
          gap: "10px",

          color: "#22c55e"

        }}>

          <Wifi size={18} />

          SYNCED

        </div>

      </div>

    </div>

  );

}
