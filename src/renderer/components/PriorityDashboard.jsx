import React from "react";
import {
  AlertTriangle,
  Package,
  FileText,
  Wrench,
  DollarSign
} from "lucide-react";

const cards = [
  {
    title: "Immediate Action",
    icon: <AlertTriangle size={28} />,
    message: "3 emails require urgent response"
  },
  {
    title: "Stores Alerts",
    icon: <Package size={28} />,
    message: "Low stock request pending approval"
  },
  {
    title: "Drawing Reviews",
    icon: <FileText size={28} />,
    message: "2 technical drawings awaiting response"
  },
  {
    title: "Operations Delays",
    icon: <Wrench size={28} />,
    message: "Installation update overdue"
  },
  {
    title: "Budget Risks",
    icon: <DollarSign size={28} />,
    message: "Project cost increase detected"
  }
];

export default function PriorityDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8">
        Plenser AI Work Radar
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-4 mb-4">
              {card.icon}
              <h2 className="text-2xl font-semibold">
                {card.title}
              </h2>
            </div>

            <p className="text-gray-600 text-lg">
              {card.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
