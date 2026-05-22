import React from "react";

import jsPDF from "jspdf";

import {
  Download,
  FileText,
  ShieldCheck
} from "lucide-react";

import summary
from "../../data/emailSummary.json";

export default function ExportReports() {

  function exportPDF() {

    const doc = new jsPDF();

    doc.setFontSize(20);

    doc.text(
      "PLENSER AI OPERATIONAL REPORT",
      20,
      20
    );

    doc.setFontSize(12);

    doc.text(
      `Generated: ${summary.generatedAt}`,
      20,
      40
    );

    doc.text(
      `Total Emails: ${summary.totalEmails}`,
      20,
      55
    );

    doc.text(
      `Internal Emails: ${summary.plenserEmails}`,
      20,
      70
    );

    doc.text(
      `External Emails: ${summary.externalEmails}`,
      20,
      85
    );

    doc.text(
      "TOP INTERACTIONS",
      20,
      110
    );

    let y = 125;

    summary.topSenders.forEach(
      (sender,index) => {

        doc.text(

          `${index + 1}. ${sender.name} (${sender.count})`,

          20,

          y

        );

        y += 12;

      }
    );

    doc.save(
      "plenser-operational-report.pdf"
    );

  }

  return (

    <div style={{

      background: "#081225",

      border:
        "1px solid #1e293b",

      borderRadius: "24px",

      padding: "30px",

      marginBottom: "32px"

    }}>

      <div style={{

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"

      }}>

        <div>

          <div style={{

            fontSize: "28px",
            fontWeight: "bold"

          }}>

            Export Intelligence Reports

          </div>

          <div style={{

            marginTop: "8px",

            color: "#64748b"

          }}>

            Download operational AI analytics reports

          </div>

        </div>

        <button

          onClick={exportPDF}

          style={{

            background:
              "linear-gradient(90deg,#2563eb,#7c3aed)",

            border: "none",

            color: "white",

            padding:
              "14px 22px",

            borderRadius: "16px",

            display: "flex",
            alignItems: "center",

            gap: "10px",

            cursor: "pointer",

            fontWeight: "bold"

          }}
        >

          <Download size={18} />

          Export PDF

        </button>

      </div>

      <div style={{

        display: "grid",

        gridTemplateColumns:
          "repeat(3,1fr)",

        gap: "20px",

        marginTop: "28px"

      }}>

        <div style={{

          background: "#020617",

          border:
            "1px solid #1e293b",

          borderRadius: "20px",

          padding: "22px"

        }}>

          <FileText size={28} />

          <div style={{

            marginTop: "16px",

            fontWeight: "bold",

            fontSize: "18px"

          }}>

            Operational Reports

          </div>

          <div style={{

            marginTop: "8px",

            color: "#64748b"

          }}>

            Export executive operational intelligence summaries

          </div>

        </div>

        <div style={{

          background: "#020617",

          border:
            "1px solid #1e293b",

          borderRadius: "20px",

          padding: "22px"

        }}>

          <ShieldCheck size={28} />

          <div style={{

            marginTop: "16px",

            fontWeight: "bold",

            fontSize: "18px"

          }}>

            Internal Analytics

          </div>

          <div style={{

            marginTop: "8px",

            color: "#64748b"

          }}>

            Export internal communication intelligence metrics

          </div>

        </div>

        <div style={{

          background: "#020617",

          border:
            "1px solid #1e293b",

          borderRadius: "20px",

          padding: "22px"

        }}>

          <Download size={28} />

          <div style={{

            marginTop: "16px",

            fontWeight: "bold",

            fontSize: "18px"

          }}>

            Engineering Reports

          </div>

          <div style={{

            marginTop: "8px",

            color: "#64748b"

          }}>

            Download engineering drawings intelligence reports

          </div>

        </div>

      </div>

    </div>

  );

}
