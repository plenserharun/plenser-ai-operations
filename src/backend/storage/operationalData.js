const operationalData = {

  metrics: {

    emailsResponded: 38,
    pendingTasks: 14,
    completedActions: 27,
    operationalDelays: 3,
    techIssues: 2,
    proactiveActions: 6

  },

  tasks: [

    {
      id: 1,
      category: "Stores",
      title: "Steel Plate Restocking",
      type: "Reactive",
      priority: "High",
      status: "Pending"
    },

    {
      id: 2,
      category: "Drawings",
      title: "HVAC Layout Approval",
      type: "Reactive",
      priority: "Medium",
      status: "Pending"
    },

    {
      id: 3,
      category: "IT & Tech",
      title: "Internet Stability Optimization",
      type: "Proactive",
      priority: "Medium",
      status: "Completed"
    },

    {
      id: 4,
      category: "Operations",
      title: "Site Installation Follow-up",
      type: "Reactive",
      priority: "High",
      status: "In Progress"
    },

    {
      id: 5,
      category: "Productivity",
      title: "Drawing Folder Reorganization",
      type: "Proactive",
      priority: "Low",
      status: "Completed"
    }

  ],

  resolvedActions: [

    {
      title: "VPN Access Issue",
      resolvedBy: "Email Confirmation",
      resolutionTime: "2h 14m"
    },

    {
      title: "Drawing Synchronization Delay",
      resolvedBy: "System Optimization",
      resolutionTime: "1h 05m"
    }

  ]

};

export default operationalData;
