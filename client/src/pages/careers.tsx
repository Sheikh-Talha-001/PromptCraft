import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedHeading from "@/components/AnimatedHeading";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Code, 
  Heart, 
  Globe,
  Zap,
  Shield,
  Award,
  ChevronRight
} from "lucide-react";
import { Link } from "wouter";

export default function Careers() {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$120k - $160k",
      description: "Join our frontend team to build beautiful, performant web applications using React, TypeScript, and modern tooling.",
      requirements: [
        "5+ years of experience with React and TypeScript",
        "Experience with modern build tools and testing frameworks",
        "Strong understanding of web performance optimization",
        "Experience with design systems and component libraries"
      ],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Backend Engineer",
      department: "Engineering", 
      location: "Remote / New York",
      type: "Full-time",
      salary: "$110k - $150k",
      description: "Build and scale our API infrastructure using Node.js, PostgreSQL, and cloud technologies.",
      requirements: [
        "4+ years of backend development experience",
        "Proficiency with Node.js and PostgreSQL",
        "Experience with cloud platforms (AWS, GCP, or Azure)",
        "Knowledge of microservices architecture"
      ],
      posted: "5 days ago"
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time", 
      salary: "$100k - $140k",
      description: "Help us build and maintain our CI/CD pipelines, monitoring systems, and cloud infrastructure.",
      requirements: [
        "3+ years of DevOps or SRE experience",
        "Experience with Docker, Kubernetes, and CI/CD tools",
        "Knowledge of monitoring and observability tools",
        "Scripting experience with Python or Bash"
      ],
      posted: "1 week ago"
    },
    {
      id: 4,
      title: "Product Designer",
      department: "Design",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$90k - $120k", 
      description: "Design intuitive user experiences for our developer tools, from conception to implementation.",
      requirements: [
        "3+ years of product design experience",
        "Proficiency with Figma and design systems",
        "Experience designing for developer tools",
        "Strong understanding of user research methods"
      ],
      posted: "3 days ago"
    },
    {
      id: 5,
      title: "Technical Writer",
      department: "Marketing",
      location: "Remote",
      type: "Contract",
      salary: "$60k - $80k",
      description: "Create comprehensive documentation, tutorials, and technical content for our developer community.",
      requirements: [
        "2+ years of technical writing experience",
        "Strong programming background",
        "Experience with developer documentation",
        "Excellent communication skills"
      ],
      posted: "4 days ago"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: Globe,
      title: "Remote-First",
      description: "Work from anywhere with flexible hours and home office stipend"
    },
    {
      icon: Code,
      title: "Learning & Growth", 
      description: "Annual learning budget, conference tickets, and mentorship programs"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Collaborative culture with regular team events and pair programming"
    },
    {
      icon: Zap,
      title: "Innovation Time",
      description: "20% time for personal projects and contributing to open source"
    },
    {
      icon: Award,
      title: "Equity & Bonuses",
      description: "Competitive equity package and performance-based bonuses"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 bg-white">
              Join Our Team
            </Badge>
            <AnimatedHeading 
              variant="h1" 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Build the Future of
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Developer Tools</span>
            </AnimatedHeading>
            <motion.p 
              className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join our mission to simplify JSON development for developers worldwide. 
              We're building tools that make complex data structures accessible to everyone.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="w-4 h-4 text-green-600" />
                <span>50+ team members</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Globe className="w-4 h-4 text-green-600" />
                <span>Remote-first culture</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Heart className="w-4 h-4 text-green-600" />
                <span>Great benefits</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimatedHeading 
              variant="h2" 
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              Why You'll Love Working Here
            </AnimatedHeading>
            <motion.p 
              className="mt-4 text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We believe in taking care of our team so they can do their best work.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <motion.div 
                      className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </motion.div>
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimatedHeading 
              variant="h2" 
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              Open Positions
            </AnimatedHeading>
            <motion.p 
              className="mt-4 text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Find your next challenge and join our growing team.
            </motion.p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                              <Badge variant="outline">{job.department}</Badge>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {job.type}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                {job.salary}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap ml-4">{job.posted}</span>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {job.requirements.slice(0, 2).map((req, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <ChevronRight className="w-3 h-3 mt-0.5 text-gray-400 flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="lg:ml-6 lg:flex-shrink-0">
                        <Button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedHeading 
              variant="h2" 
              className="text-3xl font-bold text-white mb-4"
            >
              Don't See Your Role?
            </AnimatedHeading>
            <motion.p 
              className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We're always looking for talented people to join our team. 
              Send us your resume and tell us how you'd like to contribute.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Get In Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}