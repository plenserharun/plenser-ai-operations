const emailData = [

  {
    sender: "Procurement Department",
    subject: "Urgent Valve Delivery Delay",
    category: "Operational",
    priority: "High",
    status: "Pending",
    requiresAction: true,
    resolved: false,
    responseTime: "32m"
  },

  {
    sender: "IT Support",
    subject: "ERP Login Synchronization Failure",
    category: "IT & Tech",
    priority: "High",
    status: "Resolved",
    requiresAction: true,
    resolved: true,
    responseTime: "18m"
  },

  {
    sender: "Site Engineer",
    subject: "Kisumu Installation Progress Update",
    category: "Operational",
    priority: "Medium",
    status: "Monitoring",
    requiresAction: false,
    resolved: false,
    responseTime: "1h 10m"
  },

  {
    sender: "Management",
    subject: "Weekly Operations Performance Review",
    category: "Management",
    priority: "Medium",
    status: "Completed",
    requiresAction: true,
    resolved: true,
    responseTime: "25m"
  },

  {
    sender: "Network Administrator",
    subject: "VPN Access Restored",
    category: "IT & Tech",
    priority: "Low",
    status: "Resolved",
    requiresAction: false,
    resolved: true,
    responseTime: "12m"
  }

];

export default emailData;
