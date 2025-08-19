import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Code, 
  Database, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Settings,
  Shield,
  Download,
  Copy
} from "lucide-react";
import { Link } from "wouter";

export default function Tools() {
  const tools = [
    {
      title: "Text to JSON Converter",
      description: "Transform natural language descriptions into structured JSON prompts with intelligent parsing and validation.",
      icon: FileText,
      status: "Available",
      features: ["Real-time validation", "Copy to clipboard", "Download JSON", "Smart parsing"],
      href: "/",
      category: "Converter",
      color: "blue"
    },
    {
      title: "JSON Schema Generator",
      description: "Generate comprehensive JSON schemas from your existing JSON data with validation rules.",
      icon: Code,
      status: "Coming Soon",
      features: ["Auto-generate schemas", "Validation rules", "Type inference", "Documentation"],
      href: "/tools/schema-generator",
      category: "Generator",
      color: "green"
    },
    {
      title: "JSON Validator & Formatter",
      description: "Validate, format, and beautify your JSON with detailed error reporting and syntax highlighting.",
      icon: CheckCircle,
      status: "Coming Soon",
      features: ["Syntax validation", "Pretty formatting", "Error highlighting", "Multiple formats"],
      href: "/tools/validator",
      category: "Utility",
      color: "purple"
    },
    {
      title: "API Mock Generator",
      description: "Generate realistic API mocks from JSON schemas for rapid prototyping and testing.",
      icon: Database,
      status: "Coming Soon",
      features: ["Realistic data", "Multiple endpoints", "Custom rules", "Export options"],
      href: "/tools/mock-generator",
      category: "Generator",
      color: "orange"
    },
    {
      title: "JSON to Code Generator",
      description: "Convert JSON structures to type definitions in multiple programming languages.",
      icon: Settings,
      status: "Coming Soon",
      features: ["TypeScript types", "Python classes", "Java models", "Go structs"],
      href: "/tools/code-generator",
      category: "Generator",
      color: "red"
    },
    {
      title: "JSON Diff & Merge",
      description: "Compare JSON objects, visualize differences, and merge changes with conflict resolution.",
      icon: Shield,
      status: "Coming Soon",
      features: ["Visual diff", "Merge conflicts", "History tracking", "Export patches"],
      href: "/tools/diff-merge",
      category: "Utility",
      color: "indigo"
    }
  ];

  const categories = ["All", "Converter", "Generator", "Utility"];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      red: "bg-red-100 text-red-600",
      indigo: "bg-indigo-100 text-indigo-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">
              Developer Tools
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              JSON Development Tools
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive suite of tools to streamline your JSON workflow. 
              From conversion to validation, we've got all your JSON needs covered.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <Card key={tool.title} className="border-0 shadow-sm hover:shadow-md transition-all duration-200 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(tool.color)}`}>
                      <tool.icon className="w-6 h-6" />
                    </div>
                    <Badge 
                      variant={tool.status === "Available" ? "default" : "secondary"}
                      className={tool.status === "Available" ? "bg-green-100 text-green-800" : ""}
                    >
                      {tool.status}
                    </Badge>
                  </div>
                  
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {tool.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {tool.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {tool.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href={tool.href}>
                    <Button 
                      className="w-full group-hover:bg-blue-700 transition-colors"
                      variant={tool.status === "Available" ? "default" : "outline"}
                      disabled={tool.status !== "Available"}
                    >
                      {tool.status === "Available" ? "Use Tool" : "Coming Soon"}
                      {tool.status === "Available" && <ArrowRight className="w-4 h-4 ml-2" />}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Tools?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built by developers for developers, our tools prioritize speed, accuracy, and ease of use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Lightning Fast
              </h3>
              <p className="text-gray-600 text-sm">
                Optimized for performance with real-time processing and instant results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Secure & Private
              </h3>
              <p className="text-gray-600 text-sm">
                All processing happens client-side. Your data never leaves your browser.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Export Ready
              </h3>
              <p className="text-gray-600 text-sm">
                Easy export options including copy to clipboard and file downloads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Tool Section */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need a Specific Tool?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always working on new tools to help developers. 
              Have an idea for a JSON-related tool? Let us know!
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Request a Tool
              </Button>
              <Link href="/blog">
                <Button size="lg" variant="outline">
                  Read Our Roadmap
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}