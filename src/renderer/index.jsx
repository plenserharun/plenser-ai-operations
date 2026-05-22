import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

import LiveStatusBar from "./components/widgets/LiveStatusBar";

import SummaryCards from "./components/widgets/SummaryCards";
import ExecutiveMetrics from "./components/widgets/ExecutiveMetrics";

import AnalyticsPanel from "./components/widgets/AnalyticsPanel";

import DrawingsAnalytics from "./components/widgets/DrawingsAnalytics";
import LiveTrendChart from "./components/widgets/LiveTrendChart";

import EmailInsightsPanel from "./components/widgets/EmailInsightsPanel";

import InteractionPanel from "./components/widgets/InteractionPanel";

import SystemMonitor from "./components/widgets/SystemMonitor";

import PriorityEngine from "./components/widgets/PriorityEngine";

import AIRecommendations from "./components/widgets/AIRecommendations";

import OperationsFeed from "./components/widgets/OperationsFeed";
import ExportReports from "./components/widgets/ExportReports";

function App() {

  return (

    <div
      className="main-layout"
      style={{

        display: "flex",

        background: "#020617",

        color: "white",

        minHeight: "100vh",

        fontFamily: "Inter, Arial, sans-serif"

      }}
    >

      <Sidebar />

      <div
        className="main-content"
        style={{

          flex: 1,

          padding: "40px"

        }}
      >

        <Header />

        <LiveStatusBar />

        <SummaryCards />

        <ExecutiveMetrics />

        <AnalyticsPanel />

        <DrawingsAnalytics />

        <LiveTrendChart />

        <EmailInsightsPanel />

        <InteractionPanel />

        <SystemMonitor />

        <PriorityEngine />

        <AIRecommendations />

        <ExportReports />

        <OperationsFeed />

      </div>

    </div>

  );

}

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <App />

  </React.StrictMode>

);
