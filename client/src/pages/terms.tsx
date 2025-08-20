import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedHeading from "@/components/AnimatedHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Terms() {
  const sections = [
    {
      title: "Agreement to Terms",
      content: {
        description: "By accessing or using JSON Converter ('the Service'), you agree to be bound by these Terms of Service ('Terms'). If you disagree with any part of these terms, then you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.",
        keyPoints: [
          "These Terms constitute a legally binding agreement",
          "By using our Service, you accept all terms and conditions",
          "You must be at least 13 years old to use our Service",
          "Business users must have authority to bind their organization"
        ]
      }
    },
    {
      title: "Description of Service",
      content: {
        description: "JSON Converter is a web-based tool that converts natural language text descriptions into structured JSON format using AI-powered processing.",
        subsections: [
          {
            subtitle: "Core Features",
            list: [
              "Text-to-JSON conversion with AI enhancement",
              "Real-time validation and error checking",
              "Multiple output formats and customization options",
              "Blog content and educational resources",
              "Customer support and documentation"
            ]
          },
          {
            subtitle: "Service Availability",
            list: [
              "Service is provided 'as available' without uptime guarantees",
              "We may modify, suspend, or discontinue any part of the Service",
              "Scheduled maintenance may temporarily affect availability",
              "Emergency maintenance may occur without prior notice"
            ]
          }
        ]
      }
    },
    {
      title: "User Accounts and Registration",
      content: {
        subsections: [
          {
            subtitle: "Account Creation",
            list: [
              "You may create an account to access enhanced features",
              "You must provide accurate and complete information",
              "You are responsible for maintaining account security",
              "You must notify us immediately of any unauthorized access"
            ]
          },
          {
            subtitle: "Account Responsibilities",
            list: [
              "Keep your password secure and confidential",
              "You are liable for all activities under your account",
              "Do not share your account credentials with others",
              "Update your information when it changes"
            ]
          }
        ]
      }
    },
    {
      title: "Acceptable Use Policy",
      content: {
        description: "You agree to use our Service responsibly and in compliance with all applicable laws and regulations.",
        subsections: [
          {
            subtitle: "Permitted Uses",
            list: [
              "Personal and commercial JSON conversion projects",
              "Educational and research purposes",
              "Integration with your own applications (subject to API terms)",
              "Sharing generated JSON output (you retain ownership)"
            ]
          },
          {
            subtitle: "Prohibited Activities",
            list: [
              "Illegal activities or content that violates laws",
              "Malicious code, viruses, or harmful content",
              "Automated scraping or data harvesting",
              "Attempting to breach security or access controls",
              "Reverse engineering or copying our technology",
              "Spamming, harassment, or abusive behavior",
              "Impersonating others or providing false information"
            ]
          }
        ]
      }
    },
    {
      title: "Intellectual Property Rights",
      content: {
        subsections: [
          {
            subtitle: "Our Rights",
            description: "JSON Converter and all related technology, content, and materials are owned by us or our licensors.",
            list: [
              "The Service name, logo, and branding are our trademarks",
              "All software, algorithms, and technology are proprietary",
              "Content, design, and user interface are protected by copyright",
              "You may not copy, modify, or distribute our intellectual property"
            ]
          },
          {
            subtitle: "Your Rights",
            description: "You retain ownership of content you create and input into our Service.",
            list: [
              "You own the text you input for conversion",
              "You own the JSON output generated from your input",
              "You may use, modify, and distribute your generated content",
              "You grant us permission to process your input to provide the Service"
            ]
          }
        ]
      }
    },
    {
      title: "Privacy and Data Protection",
      content: {
        description: "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.",
        keyPoints: [
          "Most processing happens locally in your browser",
          "We don't permanently store your conversion data",
          "We collect minimal information necessary for service operation",
          "We comply with GDPR, CCPA, and other privacy regulations",
          "You can control your privacy settings and data"
        ]
      }
    },
    {
      title: "Disclaimers and Limitations",
      content: {
        subsections: [
          {
            subtitle: "Service Disclaimer",
            list: [
              "The Service is provided 'as is' without warranties of any kind",
              "We don't guarantee accuracy of AI-generated JSON output",
              "You should review and validate all generated content",
              "We disclaim all express and implied warranties"
            ]
          },
          {
            subtitle: "Limitation of Liability",
            list: [
              "We are not liable for any indirect or consequential damages",
              "Our liability is limited to the amount you paid for the Service",
              "We are not responsible for third-party content or services",
              "You use the Service at your own risk"
            ]
          }
        ]
      }
    },
    {
      title: "Termination",
      content: {
        subsections: [
          {
            subtitle: "Termination by You",
            list: [
              "You may stop using the Service at any time",
              "You may delete your account through your account settings",
              "Termination does not affect your rights to content you created"
            ]
          },
          {
            subtitle: "Termination by Us",
            list: [
              "We may terminate accounts for Terms violations",
              "We may suspend Service for maintenance or legal reasons",
              "We will provide reasonable notice when possible",
              "Upon termination, your access to the Service ends immediately"
            ]
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
            Terms of Service
          </Badge>
          <AnimatedHeading 
            variant="h1" 
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Terms of Service
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
            These Terms of Service govern your use of JSON Converter and constitute a legal agreement between you and us. Please read these terms carefully before using our Service.
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
                <CardTitle className="text-xl">Questions About These Terms?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-4">
                  If you have any questions about these Terms of Service or need clarification about your rights and responsibilities, please don't hesitate to contact us.
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> legal@jsonconverter.com</p>
                  <p><strong>Support:</strong> <Link href="/help" className="text-blue-200 hover:text-white underline">Visit our Help Center</Link></p>
                  <p><strong>Contact:</strong> <Link href="/contact" className="text-blue-200 hover:text-white underline">Get in Touch</Link></p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}