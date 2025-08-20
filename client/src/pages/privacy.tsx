import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedHeading from "@/components/AnimatedHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Privacy() {
  const sections = [
    {
      title: "Overview",
      content: {
        description: "JSON Converter ('we,' 'our,' or 'us') is committed to protecting your privacy and ensuring transparency about our data practices. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our JSON conversion services.",
        keyPoints: [
          "We process data to provide our JSON conversion services",
          "Your conversion data is processed locally and not stored permanently", 
          "We collect minimal information necessary for service operation",
          "We comply with GDPR, CCPA, and other applicable privacy laws",
          "You have control over your personal information and privacy settings"
        ]
      }
    },
    {
      title: "Information We Collect",
      content: {
        subsections: [
          {
            subtitle: "Information You Provide Directly",
            description: "We collect information when you voluntarily provide it to us:",
            list: [
              "Account information (name, email address, password)",
              "Text inputs submitted for JSON conversion",
              "Contact form submissions and support requests",
              "Newsletter subscription preferences",
              "Survey responses and feedback"
            ]
          },
          {
            subtitle: "Automatically Collected Information", 
            description: "When you use our services, we automatically collect:",
            list: [
              "IP address and approximate geographic location",
              "Browser type, version, and operating system",
              "Device information and screen resolution",
              "Referring website and pages visited",
              "Time spent on pages and click patterns",
              "Performance metrics and error logs"
            ]
          },
          {
            subtitle: "Cookies and Tracking Technologies",
            description: "We use cookies and similar technologies to enhance your experience:",
            list: [
              "Essential cookies for core functionality",
              "Analytics cookies to understand usage patterns",
              "Preference cookies to remember your settings",
              "Marketing cookies for relevant advertisements (with consent)"
            ]
          }
        ]
      }
    },
    {
      title: "How We Use Your Information",
      content: {
        subsections: [
          {
            subtitle: "Service Provision and Operation",
            list: [
              "Process text-to-JSON conversions and provide results",
              "Maintain user accounts and authentication",
              "Provide customer support and technical assistance",
              "Send service-related notifications and updates",
              "Ensure security and prevent fraudulent activities"
            ]
          },
          {
            subtitle: "Service Improvement and Analytics",
            list: [
              "Analyze usage patterns to enhance user experience",
              "Develop new features and functionality",
              "Optimize performance and reliability",
              "Conduct research and development activities",
              "Create aggregate, anonymized statistics"
            ]
          },
          {
            subtitle: "Communication and Marketing",
            list: [
              "Send important service announcements",
              "Provide technical support responses",
              "Share product updates and new features",
              "Send marketing communications (with your consent)",
              "Conduct customer satisfaction surveys"
            ]
          }
        ]
      }
    },
    {
      title: "Google AdSense and Advertising",
      content: {
        description: "We participate in the Google AdSense program to display relevant advertisements:",
        subsections: [
          {
            subtitle: "How Google AdSense Works",
            list: [
              "Google serves ads based on your interests and previous visits",
              "Third-party vendors use cookies to serve ads based on prior visits",
              "DoubleClick cookie enables Google and partners to serve ads",
              "Ad personalization can be controlled through Google Ad Settings"
            ]
          },
          {
            subtitle: "Your Ad Controls",
            list: [
              "Visit Google Ad Settings to control personalized ads",
              "Use aboutads.info to opt out of personalized advertising",
              "Control cookie settings in your browser preferences",
              "Request removal from targeted advertising databases"
            ]
          }
        ]
      }
    },
    {
      title: "Information Sharing and Disclosure",
      content: {
        subsections: [
          {
            subtitle: "Service Providers and Partners",
            description: "We may share information with trusted third parties who help us operate our services:",
            list: [
              "Cloud hosting and infrastructure providers (AWS, Google Cloud)",
              "Analytics services (Google Analytics, privacy-compliant alternatives)",
              "Customer support platforms and communication tools",
              "Email marketing and notification services",
              "Payment processing services (if applicable)"
            ]
          },
          {
            subtitle: "Legal Requirements",
            description: "We may disclose information when legally required or to protect rights and safety:",
            list: [
              "Comply with legal obligations, court orders, and subpoenas",
              "Respond to lawful government and law enforcement requests",
              "Protect against fraud, security threats, and illegal activities",
              "Enforce our Terms of Service and other agreements",
              "Protect the rights, property, and safety of users and the public"
            ]
          },
          {
            subtitle: "Business Transfers",
            description: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction, subject to equivalent privacy protections."
          }
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs />
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Privacy Policy
          </Badge>
          <AnimatedHeading 
            variant="h1" 
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Your Privacy Matters
          </AnimatedHeading>
          <motion.p 
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Last updated: January 20, 2025
          </motion.p>
          <motion.p 
            className="mt-2 text-sm text-gray-500 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            This Privacy Policy describes how JSON Converter collects, uses, and protects your information. We are committed to transparency and protecting your privacy rights in accordance with applicable laws including GDPR, CCPA, and other international privacy regulations.
          </motion.p>
        </div>

        <div className="space-y-8">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {section.content.description && (
                    <p className="text-gray-700 leading-relaxed">{section.content.description}</p>
                  )}
                  
                  {section.content.keyPoints && (
                    <ul className="space-y-2 ml-4">
                      {section.content.keyPoints.map((point, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.content.subsections?.map((subsection, index) => (
                    <div key={index} className="space-y-3">
                      <h4 className="font-semibold text-gray-900">{subsection.subtitle}</h4>
                      {'description' in subsection && subsection.description && (
                        <p className="text-gray-700 leading-relaxed">{subsection.description}</p>
                      )}
                      {subsection.list && (
                        <ul className="space-y-2 ml-4">
                          {subsection.list.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-600 flex items-start">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="bg-blue-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Privacy Questions or Concerns?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-4">
                  We're committed to transparency and protecting your privacy. If you have any questions about this Privacy Policy, our data practices, or want to exercise your privacy rights, please contact us.
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@jsonconverter.com</p>
                  <p><strong>Data Protection Officer:</strong> dpo@jsonconverter.com</p>
                  <p><strong>Address:</strong> JSON Converter Privacy Team, 123 Privacy Street, Data City, DC 12345</p>
                  <p><strong>Support:</strong> <Link href="/help" className="text-blue-200 hover:text-white underline">Visit our Help Center</Link></p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}