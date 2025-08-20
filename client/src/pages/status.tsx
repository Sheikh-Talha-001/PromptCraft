import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedHeading from "@/components/AnimatedHeading";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Clock,
  Server,
  Database,
  Globe,
  Zap,
  Shield,
  Activity
} from "lucide-react";

export default function Status() {
  const services = [
    {
      name: "JSON Converter API",
      status: "operational",
      uptime: "99.99%",
      responseTime: "45ms",
      description: "Core JSON conversion service"
    },
    {
      name: "Web Application",
      status: "operational", 
      uptime: "99.98%",
      responseTime: "120ms",
      description: "Frontend web interface"
    },
    {
      name: "Database",
      status: "operational",
      uptime: "100%",
      responseTime: "8ms",
      description: "PostgreSQL database cluster"
    },
    {
      name: "Authentication Service",
      status: "operational",
      uptime: "99.95%",
      responseTime: "25ms",
      description: "User authentication and authorization"
    },
    {
      name: "CDN & Static Assets",
      status: "maintenance",
      uptime: "99.90%",
      responseTime: "35ms",
      description: "Content delivery network for static files"
    }
  ];

  const incidents = [
    {
      id: 1,
      title: "Scheduled Maintenance - CDN Optimization",
      status: "in-progress",
      severity: "low",
      startTime: "2025-01-20 10:00 UTC",
      description: "We're performing scheduled maintenance to optimize our CDN performance. Some static assets may load slower during this time.",
      updates: [
        {
          time: "2025-01-20 10:00 UTC",
          message: "Maintenance window has started. CDN optimization in progress."
        }
      ]
    },
    {
      id: 2,
      title: "Brief API Latency Spike",
      status: "resolved",
      severity: "medium", 
      startTime: "2025-01-19 14:30 UTC",
      endTime: "2025-01-19 14:45 UTC",
      description: "Users experienced increased response times for API requests due to a temporary database connection issue.",
      updates: [
        {
          time: "2025-01-19 14:45 UTC",
          message: "Issue has been resolved. All systems are operating normally."
        },
        {
          time: "2025-01-19 14:35 UTC", 
          message: "We've identified the issue and are implementing a fix."
        },
        {
          time: "2025-01-19 14:30 UTC",
          message: "We're investigating reports of increased API response times."
        }
      ]
    },
    {
      id: 3,
      title: "System Performance Improvements",
      status: "resolved",
      severity: "low",
      startTime: "2025-01-18 08:00 UTC",
      endTime: "2025-01-18 08:30 UTC", 
      description: "Deployed optimizations to improve overall system performance.",
      updates: [
        {
          time: "2025-01-18 08:30 UTC",
          message: "Performance improvements have been successfully deployed."
        }
      ]
    }
  ];

  const metrics = [
    { label: "Overall Uptime", value: "99.97%", icon: Activity },
    { label: "Avg Response Time", value: "42ms", icon: Zap },
    { label: "Active Users", value: "25.3K", icon: Globe },
    { label: "Security Score", value: "A+", icon: Shield }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "maintenance":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case "outage":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, any> = {
      operational: { variant: "default", className: "bg-green-100 text-green-800" },
      maintenance: { variant: "secondary", className: "bg-yellow-100 text-yellow-800" },
      outage: { variant: "destructive", className: "bg-red-100 text-red-800" }
    };
    
    return variants[status] || { variant: "outline" };
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-yellow-600"; 
      case "low":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">
              System Status
            </Badge>
            <AnimatedHeading 
              variant="h1" 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
              All Systems
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Operational</span>
            </AnimatedHeading>
            <motion.p 
              className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Real-time status and performance metrics for all JSON Converter services.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Metrics Overview */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <metric.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Services Status */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Status</h2>
          <Card>
            <CardContent className="p-0">
              {services.map((service, index) => (
                <div key={service.name} className={`p-6 ${index < services.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      {getStatusIcon(service.status)}
                      <div>
                        <h3 className="font-semibold text-gray-900">{service.name}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-center">
                        <div className="font-medium text-gray-900">{service.uptime}</div>
                        <div className="text-gray-500">Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-gray-900">{service.responseTime}</div>
                        <div className="text-gray-500">Response</div>
                      </div>
                      <Badge {...getStatusBadge(service.status)}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        {/* Incidents */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident) => (
              <Card key={incident.id}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{incident.title}</CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <Badge variant={incident.status === 'resolved' ? 'default' : incident.status === 'in-progress' ? 'secondary' : 'outline'}>
                          {incident.status.replace('-', ' ')}
                        </Badge>
                        <span className={`font-medium ${getSeverityColor(incident.severity)}`}>
                          {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)} Severity
                        </span>
                        <span>{incident.startTime}</span>
                        {incident.endTime && <span>- {incident.endTime}</span>}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{incident.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Updates:</h4>
                    {incident.updates.map((update, index) => (
                      <div key={index} className="flex gap-3 text-sm">
                        <div className="text-gray-500 font-mono whitespace-nowrap">{update.time}</div>
                        <div className="text-gray-700">{update.message}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Footer Note */}
        <motion.div 
          className="mt-12 text-center text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>Status page last updated: {new Date().toLocaleString()}</p>
          <p className="mt-2">For technical support, please visit our <a href="/help" className="text-blue-600 hover:text-blue-700">Help Center</a> or <a href="/contact" className="text-blue-600 hover:text-blue-700">contact us</a>.</p>
        </motion.div>
      </div>
    </div>
  );
}