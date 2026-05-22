import React from "react";
import {
  LayoutDashboard,
  Package,
  FileText,
  Wrench,
  DollarSign,
  Inbox
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard size={22} />
  },
  {
    title: "Stores",
    icon: <Package size={22} />
  },
  {
    title: "Technical",
    icon: <FileText size={22} />
  },
  {
    title: "Operations",
    icon: <Wrench size={22} />
  },
  {
    title: "Budgets",
    icon: <DollarSign size={22} />
  },
  {
    title: "Inbox",
    icon: <Inbox size={22} />
  }
];

export default function Sidebar() {
  return (
    <div className="w-72 h-screen bg-gray-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        Plenser AI
      </h1>

      <div className="flex flex-col gap-4">

        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-800 cursor-pointer transition"
          >
            {item.icon}

            <span className="text-lg">
              {item.title}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}
