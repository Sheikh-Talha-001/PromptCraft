import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedHeading from "@/components/AnimatedHeading";
import SearchBar from "@/components/SearchBar";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  HelpCircle, 
  Book, 
  MessageSquare, 
  Mail,
  FileText,
  Settings,
  Code,
  Zap,
  Shield,
  Globe,
  Search,
  ExternalLink
} from "lucide-react";
import { Link } from "wouter";

export default function Help() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      icon: Code,
      title: "Getting Started",
      description: "Learn the basics of using our JSON converter",
      articles: [
        "How to convert text to JSON",
        "Understanding JSON structure", 
        "Your first JSON conversion",
        "Common JSON patterns"
      ]
    },
    {
      icon: Settings,
      title: "Advanced Features",
      description: "Discover powerful features and customization options",
      articles: [
        "AI-powered prompt enhancement",
        "Custom JSON schemas",
        "Batch conversions",
        "API integration"
      ]
    },
    {
      icon: Zap,
      title: "Troubleshooting",
      description: "Solutions to common problems and error messages",
      articles: [
        "JSON validation errors",
        "Performance optimization",
        "Browser compatibility",
        "Common syntax mistakes"
      ]
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Learn about data protection and security practices",
      articles: [
        "Data encryption",
        "Privacy policy overview",
        "GDPR compliance",
        "Secure API usage"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does the JSON converter work?",
      answer: "Our JSON converter uses advanced natural language processing to understand your text descriptions and automatically generates properly structured JSON. Simply describe what you want in plain English, and our AI will create the corresponding JSON structure with appropriate data types and formatting."
    },
    {
      question: "Is my data secure when using the converter?",
      answer: "Yes, absolutely. We take data security seriously. All conversions are processed securely, we don't store your input data permanently, and all communications are encrypted using industry-standard SSL/TLS protocols. Your data is processed and immediately discarded after conversion."
    },
    {
      question: "What types of JSON structures can I create?",
      answer: "You can create virtually any JSON structure including objects, arrays, nested structures, API responses, configuration files, database schemas, and more. Our AI understands complex requirements and can generate sophisticated JSON with proper data types, validation rules, and documentation."
    },
    {
      question: "Do you offer API access for developers?",
      answer: "Yes! We provide a comprehensive REST API for developers who want to integrate our JSON conversion capabilities into their applications. The API includes endpoints for text-to-JSON conversion, schema validation, and batch processing. Visit our API documentation for detailed integration guides."
    },
    {
      question: "Can I customize the generated JSON format?",
      answer: "Absolutely! You can specify formatting preferences, naming conventions, data types, required fields, and validation rules. Our AI enhancement feature can also suggest improvements and optimizations based on best practices and your specific use case."
    },
    {
      question: "What browsers are supported?",
      answer: "Our tool works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest versions for the best experience. The interface is fully responsive and works great on both desktop and mobile devices."
    },
    {
      question: "Is there a limit to conversion size?",
      answer: "For optimal performance, we recommend keeping individual conversions under 10KB of input text. For larger requirements, consider breaking your input into smaller chunks or contact us about our enterprise solutions which offer higher limits and batch processing capabilities."
    },
    {
      question: "How can I report bugs or suggest features?",
      answer: "We love hearing from our users! You can report bugs or suggest features through our contact form, by emailing support@jsonconverter.com, or by reaching out through our social media channels. We review all feedback and regularly update our tool based on user suggestions."
    },
    {
      question: "Do you offer support for teams or enterprises?",
      answer: "Yes! We offer enterprise plans with additional features like team collaboration, advanced security, custom schemas, priority support, and on-premises deployment options. Contact our sales team to discuss your organization's specific needs."
    },
    {
      question: "How accurate is the AI conversion?",
      answer: "Our AI model achieves over 95% accuracy for common JSON structures and continues to improve through machine learning. For complex or ambiguous requirements, the AI provides multiple suggestions and explanations. You can always review and modify the generated JSON before use."
    }
  ];

  const quickActions = [
    {
      title: "Contact Support",
      description: "Get help from our support team",
      icon: MessageSquare,
      href: "/contact"
    },
    {
      title: "API Documentation",
      description: "Technical documentation for developers",
      icon: Book,
      href: "/docs"
    },
    {
      title: "Status Page",
      description: "Check service status and uptime",
      icon: Globe,
      href: "/status"
    },
    {
      title: "Feature Requests",
      description: "Suggest new features or improvements",
      icon: FileText,
      href: "/contact"
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    searchQuery === "" || 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 bg-white">
              Help Center
            </Badge>
            <AnimatedHeading 
              variant="h1" 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              How can we
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> help you?</span>
            </AnimatedHeading>
            <motion.p 
              className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Find answers to common questions, browse our guides, or get in touch with our support team.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <SearchBar 
                onSearch={setSearchQuery}
                placeholder="Search for help articles..."
                initialValue={searchQuery}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Quick Actions */}
        <section className="mb-16">
          <AnimatedHeading variant="h2" className="text-2xl font-bold text-gray-900 mb-8">
            Quick Actions
          </AnimatedHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={action.href}>
                  <Card className="text-center cursor-pointer hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6">
                      <action.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                      <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                      <ExternalLink className="w-4 h-4 mx-auto mt-3 text-gray-400" />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Help Categories */}
        <section className="mb-16">
          <AnimatedHeading variant="h2" className="text-2xl font-bold text-gray-900 mb-8">
            Browse by Category
          </AnimatedHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {category.articles.map((article) => (
                        <li key={article} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                          <HelpCircle className="w-3 h-3" />
                          {article}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <AnimatedHeading variant="h2" className="text-2xl font-bold text-gray-900">
              Frequently Asked Questions
            </AnimatedHeading>
            {searchQuery && (
              <span className="text-sm text-gray-600">
                {filteredFaqs.length} of {faqs.length} questions shown
              </span>
            )}
          </div>
          
          {filteredFaqs.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Search className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-4">Try searching with different keywords or browse our categories above.</p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold text-gray-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Contact Section */}
        <section>
          <Card className="bg-blue-600 text-white">
            <CardContent className="p-8 text-center">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <AnimatedHeading variant="h2" className="text-2xl font-bold mb-4">
                Still need help?
              </AnimatedHeading>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help. 
                Get in touch and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="secondary" size="lg">
                    Contact Support
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-blue-300 text-white hover:bg-blue-500">
                  Live Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}