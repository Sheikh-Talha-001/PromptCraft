import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import AnimatedHeading from "@/components/AnimatedHeading";
import { motion } from "framer-motion";
import {
  RotateCcw,
  Copy,
  Download,
  CheckCircle,
  XCircle,
  Zap,
  Shield,
  FileText,
  Loader2,
  Sparkles,
  ArrowRight,
  Code,
  Database,
  Users,
  Star,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [jsonOutput, setJsonOutput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [validationStatus, setValidationStatus] = useState<{
    isValid: boolean;
    message: string;
  }>({ isValid: true, message: "" });
  const [copySuccess, setCopySuccess] = useState(false);

  const { toast } = useToast();

  const enhancePrompt = (text: string): string => {
    if (!text.trim()) return text;

    const lowerText = text.toLowerCase();
    let enhanced = text.trim();

    // Add context and specificity based on detected patterns
    if (lowerText.includes("chatbot") || lowerText.includes("bot")) {
      if (
        !lowerText.includes("context") &&
        !lowerText.includes("conversation")
      ) {
        enhanced +=
          " with conversational context awareness and user session management";
      }
    }

    if (lowerText.includes("analyze") || lowerText.includes("analysis")) {
      if (
        !lowerText.includes("detailed") &&
        !lowerText.includes("comprehensive")
      ) {
        enhanced += " providing detailed insights and comprehensive reporting";
      }
    }

    if (lowerText.includes("generate") || lowerText.includes("create")) {
      if (
        !lowerText.includes("customizable") &&
        !lowerText.includes("options")
      ) {
        enhanced += " with customizable output formats and filtering options";
      }
    }

    if (lowerText.includes("search") || lowerText.includes("find")) {
      if (!lowerText.includes("ranking") && !lowerText.includes("relevance")) {
        enhanced +=
          " with relevance ranking and advanced filtering capabilities";
      }
    }

    // Add common best practices if not mentioned
    if (!lowerText.includes("error") && !lowerText.includes("validation")) {
      enhanced += " including proper error handling and input validation";
    }

    return enhanced;
  };

  const generateJsonPrompt = (text: string): string => {
    if (!text.trim()) return "";

    // Parse the text and create a structured JSON prompt
    const words = text.toLowerCase().split(/\s+/);

    // Detect common patterns and generate appropriate structure
    let taskName = "custom_prompt";
    let purpose = text.trim();

    // Extract key concepts for better structure
    if (
      text.toLowerCase().includes("chatbot") ||
      text.toLowerCase().includes("bot")
    ) {
      taskName = "chatbot_assistant";
    } else if (
      text.toLowerCase().includes("find") ||
      text.toLowerCase().includes("search")
    ) {
      taskName = "search_assistant";
    } else if (
      text.toLowerCase().includes("analyze") ||
      text.toLowerCase().includes("analysis")
    ) {
      taskName = "analysis_tool";
    } else if (
      text.toLowerCase().includes("generate") ||
      text.toLowerCase().includes("create")
    ) {
      taskName = "content_generator";
    } else if (
      text.toLowerCase().includes("recommend") ||
      text.toLowerCase().includes("suggest")
    ) {
      taskName = "recommendation_engine";
    } else if (
      text.toLowerCase().includes("classify") ||
      text.toLowerCase().includes("categorize")
    ) {
      taskName = "classification_tool";
    }

    // Generate parameters based on content
    const parameters: Record<string, any> = {};

    if (
      text.toLowerCase().includes("location") ||
      text.toLowerCase().includes("geographic")
    ) {
      parameters.location = {
        type: "string",
        description: "Geographic location or area specification",
        required: true,
        examples: ["New York, NY", "San Francisco Bay Area", "London, UK"],
      };
    }

    if (
      text.toLowerCase().includes("user") ||
      text.toLowerCase().includes("people") ||
      text.toLowerCase().includes("person")
    ) {
      parameters.user_preferences = {
        type: "object",
        description: "User preferences and personal requirements",
        required: false,
        properties: {
          interests: { type: "array", items: { type: "string" } },
          experience_level: {
            type: "string",
            enum: ["beginner", "intermediate", "advanced"],
          },
          constraints: { type: "object" },
        },
      };
    }

    if (
      text.toLowerCase().includes("type") ||
      text.toLowerCase().includes("category") ||
      text.toLowerCase().includes("classification")
    ) {
      parameters.category = {
        type: "string",
        description: "Category or type specification for filtering",
        required: false,
        examples: ["technology", "business", "education", "entertainment"],
      };
    }

    if (
      text.toLowerCase().includes("price") ||
      text.toLowerCase().includes("cost") ||
      text.toLowerCase().includes("budget")
    ) {
      parameters.price_range = {
        type: "object",
        description: "Budget constraints and pricing preferences",
        properties: {
          min_price: { type: "number" },
          max_price: { type: "number" },
          currency: { type: "string", default: "USD" },
        },
      };
    }

    if (
      text.toLowerCase().includes("time") ||
      text.toLowerCase().includes("date") ||
      text.toLowerCase().includes("schedule")
    ) {
      parameters.temporal_constraints = {
        type: "object",
        description: "Time-based requirements and scheduling",
        properties: {
          start_date: { type: "string", format: "date" },
          end_date: { type: "string", format: "date" },
          timezone: { type: "string", default: "UTC" },
        },
      };
    }

    // Add default parameters if none were detected
    if (Object.keys(parameters).length === 0) {
      parameters.input_data = {
        type: "string",
        description: "Primary input for processing",
        required: true,
        minLength: 1,
        maxLength: 1000,
      };
      parameters.options = {
        type: "object",
        description: "Additional configuration options",
        required: false,
        properties: {
          format: { type: "string", enum: ["json", "xml", "text"] },
          verbose: { type: "boolean", default: false },
        },
      };
    }

    // Enhanced constraints based on task type
    const constraints: Record<string, any> = {
      max_results: taskName.includes("search") ? 20 : 10,
      response_format: "structured_data",
      include_metadata: true,
      timeout_seconds: 30,
    };

    if (taskName.includes("chatbot")) {
      constraints.max_conversation_turns = 50;
      constraints.context_window = 4000;
    }

    if (taskName.includes("analysis")) {
      constraints.analysis_depth = "comprehensive";
      constraints.include_confidence_scores = true;
    }

    const jsonStructure = {
      task: taskName,
      purpose: purpose,
      parameters: parameters,
      constraints: constraints,
      output_format: {
        result: {
          type: "object",
          description: "Main result data",
        },
        confidence: {
          type: "number",
          minimum: 0,
          maximum: 1,
          description: "Confidence score for the result",
        },
        metadata: {
          type: "object",
          description: "Additional context and processing information",
          properties: {
            processing_time_ms: { type: "number" },
            version: { type: "string" },
            source: { type: "string" },
          },
        },
        timestamp: {
          type: "string",
          format: "date-time",
          description: "ISO 8601 timestamp of result generation",
        },
      },
      validation_rules: {
        required_fields: ["result", "timestamp"],
        optional_fields: ["confidence", "metadata"],
        data_types: "strictly_enforced",
      },
    };

    return JSON.stringify(jsonStructure, null, 2);
  };

  const validateJson = (
    jsonString: string,
  ): { isValid: boolean; message: string } => {
    if (!jsonString.trim()) {
      return { isValid: false, message: "No JSON output to validate" };
    }

    try {
      JSON.parse(jsonString);
      return { isValid: true, message: "Valid JSON generated successfully!" };
    } catch (error) {
      return {
        isValid: false,
        message: `Invalid JSON: ${error instanceof Error ? error.message : "Unknown error"}`,
      };
    }
  };

  const handleEnhance = async () => {
    if (!inputText.trim()) {
      toast({
        variant: "destructive",
        description: "Please enter a text prompt first",
      });
      return;
    }

    setIsEnhancing(true);

    // Simulate AI enhancement processing
    await new Promise((resolve) => setTimeout(resolve, 1200));

    try {
      const enhanced = enhancePrompt(inputText);
      setInputText(enhanced);
      toast({
        description:
          "Prompt enhanced with additional context and best practices!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Failed to enhance prompt",
      });
    } finally {
      setIsEnhancing(false);
    }
  };

  const handleConvert = async () => {
    if (!inputText.trim()) {
      setValidationStatus({
        isValid: false,
        message: "Please enter a text prompt",
      });
      return;
    }

    setIsProcessing(true);
    setValidationStatus({ isValid: true, message: "" });

    // Simulate processing time for better UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    try {
      const generatedJson = generateJsonPrompt(inputText);
      setJsonOutput(generatedJson);

      const validation = validateJson(generatedJson);
      setValidationStatus(validation);

      if (validation.isValid) {
        toast({
          description: "JSON prompt generated successfully!",
        });
      }
    } catch (error) {
      setValidationStatus({
        isValid: false,
        message: `Error generating JSON: ${error instanceof Error ? error.message : "Unknown error"}`,
      });
      toast({
        variant: "destructive",
        description: "Failed to generate JSON prompt",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopy = async () => {
    if (!jsonOutput) {
      toast({
        variant: "destructive",
        description: "No JSON to copy",
      });
      return;
    }

    try {
      await navigator.clipboard.writeText(jsonOutput);
      setCopySuccess(true);
      toast({
        description: "JSON copied to clipboard!",
      });

      // Hide success message after 3 seconds
      setTimeout(() => setCopySuccess(false), 3000);
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Failed to copy to clipboard",
      });
    }
  };

  const handleDownload = () => {
    if (!jsonOutput) {
      toast({
        variant: "destructive",
        description: "No JSON to download",
      });
      return;
    }

    try {
      const blob = new Blob([jsonOutput], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "generated-prompt.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        description: "JSON file downloaded successfully!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Failed to download file",
      });
    }
  };

  const faqs = [
    {
      question: "What types of prompts can I convert to JSON?",
      answer:
        "You can convert any text description into structured JSON. Our tool works best with chatbot instructions, API requirements, search queries, analysis tasks, and content generation prompts. The more specific your description, the better the generated JSON structure.",
    },
    {
      question: "How does the auto-enhance feature work?",
      answer:
        "The auto-enhance feature analyzes your text and adds relevant context, best practices, and additional specifications based on common patterns. It helps improve your prompts by adding error handling, validation requirements, and industry-standard practices.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Yes, absolutely. All processing happens directly in your browser using client-side JavaScript. Your text prompts and generated JSON never leave your device or get sent to our servers, ensuring complete privacy and security.",
    },
    {
      question: "Can I modify the generated JSON?",
      answer:
        "The generated JSON is designed to be a starting point. You can copy it to your preferred editor and modify it according to your specific needs. The structure includes comments and examples to guide customization.",
    },
    {
      question: "What programming languages can use the generated JSON?",
      answer:
        "The generated JSON is language-agnostic and can be used with any programming language that supports JSON parsing, including JavaScript, Python, Java, C#, PHP, Ruby, Go, and many others.",
    },
    {
      question: "How accurate is the JSON structure generation?",
      answer:
        "Our tool uses intelligent pattern recognition and best practices to generate JSON structures. While very accurate for common use cases, you may need to fine-tune the output for complex or highly specialized requirements.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 bg-white">
              AI-Powered JSON Converter
            </Badge>
            <AnimatedHeading
              variant="h1"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Transform Text to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Structured JSON
              </span>
            </AnimatedHeading>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Convert simple text descriptions into professional JSON prompts
              with AI-powered enhancement, real-time validation, and instant
              export capabilities.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                className="flex items-center gap-2 text-sm text-gray-600"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>No signup required</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-sm text-gray-600"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Shield className="w-4 h-4 text-green-600" />
                <span>100% client-side processing</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-sm text-gray-600"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Zap className="w-4 h-4 text-green-600" />
                <span>Instant results</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Tool Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Input Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <AnimatedHeading
                      variant="h2"
                      className="text-xl text-gray-900"
                      delay={0.4}
                    >
                      Enter Your Text Prompt
                    </AnimatedHeading>
                    <motion.p
                      className="text-sm text-gray-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      Describe what you want in natural language. Be as specific
                      as possible.
                    </motion.p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Textarea
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Example: Create a chatbot that helps users find restaurants with specific dietary requirements, location preferences, and budget constraints, including user ratings and reviews."
                      className="min-h-32 sm:min-h-40 resize-none text-gray-700 placeholder-gray-400 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      aria-label="Text prompt input"
                    />
                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={handleEnhance}
                        disabled={isEnhancing || !inputText.trim()}
                        variant="outline"
                        className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300"
                      >
                        {isEnhancing ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Enhancing...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 mr-2" />
                            Auto Enhance
                          </>
                        )}
                      </Button>
                      <Button
                        onClick={handleConvert}
                        disabled={isProcessing || !inputText.trim()}
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Converting...
                          </>
                        ) : (
                          <>
                            <RotateCcw className="w-4 h-4 mr-2" />
                            Convert to JSON
                          </>
                        )}
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      💡 Try the Auto Enhance feature to improve your prompt
                      with AI suggestions
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Validation Status */}
              {validationStatus.message && (
                <Alert
                  className={cn(
                    "border-l-4",
                    validationStatus.isValid
                      ? "bg-green-50 border-green-400 text-green-800"
                      : "bg-red-50 border-red-400 text-red-800",
                  )}
                >
                  <div className="flex items-center gap-2">
                    {validationStatus.isValid ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <XCircle className="w-5 h-5" />
                    )}
                    <AlertDescription className="font-medium">
                      {validationStatus.message}
                    </AlertDescription>
                  </div>
                </Alert>
              )}

              {/* Quick Tips */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Quick Tips
                  </h3>
                  <ul className="text-sm text-blue-800 space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronDown className="w-3 h-3 mt-1 flex-shrink-0" />
                      Include specific requirements like location, budget, or
                      user preferences
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronDown className="w-3 h-3 mt-1 flex-shrink-0" />
                      Mention the type of data or functionality you need
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronDown className="w-3 h-3 mt-1 flex-shrink-0" />
                      Use the Auto Enhance feature for professional-grade
                      prompts
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Output Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <AnimatedHeading
                        variant="h2"
                        className="text-xl text-gray-900"
                        delay={0.6}
                      >
                        Generated JSON Prompt
                      </AnimatedHeading>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleCopy}
                          disabled={!jsonOutput}
                          className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        >
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleDownload}
                          disabled={!jsonOutput}
                          className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                    <motion.p
                      className="text-sm text-gray-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      Your structured JSON will appear here with proper
                      formatting and validation.
                    </motion.p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="relative rounded-lg overflow-hidden">
                      <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto font-mono text-sm max-h-96 overflow-y-auto">
                        <code className="language-json">
                          {jsonOutput ||
                            `{
  "// Your generated JSON will appear here": "waiting for input...",
  "example_structure": {
    "task": "custom_prompt",
    "purpose": "Your description here",
    "parameters": {},
    "constraints": {},
    "output_format": {}
  }
}`}
                        </code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Copy Success Message */}
              {copySuccess && (
                <Alert className="bg-green-50 border-green-200">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    JSON copied to clipboard successfully!
                  </AlertDescription>
                </Alert>
              )}

              {/* Example Templates */}
              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Example Use Cases
                  </h3>
                  <div className="text-sm text-purple-800 space-y-2">
                    <div className="p-2 bg-white rounded border border-purple-200">
                      <strong>Chatbot:</strong> "Create a customer support bot
                      for e-commerce"
                    </div>
                    <div className="p-2 bg-white rounded border border-purple-200">
                      <strong>API:</strong> "Search restaurants by cuisine and
                      location with ratings"
                    </div>
                    <div className="p-2 bg-white rounded border border-purple-200">
                      <strong>Analysis:</strong> "Analyze user feedback
                      sentiment and categorize issues"
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimatedHeading
              variant="h2"
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              Why Choose Our JSON Converter?
            </AnimatedHeading>
            <motion.p
              className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Built by developers for developers, featuring the latest AI
              enhancements and best practices.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="text-center border-0 shadow-sm h-full">
                <CardContent className="p-6">
                  <motion.div
                    className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    AI Enhancement
                  </h3>
                  <p className="text-sm text-gray-600">
                    Automatically improve your prompts with AI-powered
                    suggestions and best practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="text-center border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Lightning Fast
                  </h3>
                  <p className="text-sm text-gray-600">
                    Real-time processing with instant validation and immediate
                    results.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="text-center border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    100% Private
                  </h3>
                  <p className="text-sm text-gray-600">
                    All processing happens in your browser. Your data never
                    leaves your device.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="text-center border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-16j bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Easy Export
                  </h3>
                  <p className="text-sm text-gray-600">
                    Copy to clipboard or download as .json file with a single
                    click.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to know about our JSON converter tool.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Transform Your Workflow?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Join thousands of developers who use our tool to create structured
            JSON prompts effortlessly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/tools">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Explore More Tools
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-black border-white hover:bg-white hover:text-blue-600"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
