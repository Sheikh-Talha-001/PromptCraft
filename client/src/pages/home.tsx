import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  RotateCcw, 
  Copy, 
  Download, 
  CheckCircle, 
  XCircle, 
  Zap, 
  Shield, 
  FileText,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [jsonOutput, setJsonOutput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [validationStatus, setValidationStatus] = useState<{
    isValid: boolean;
    message: string;
  }>({ isValid: true, message: "" });
  const [copySuccess, setCopySuccess] = useState(false);
  
  const { toast } = useToast();

  const generateJsonPrompt = (text: string): string => {
    if (!text.trim()) return "";

    // Parse the text and create a structured JSON prompt
    const words = text.toLowerCase().split(/\s+/);
    
    // Detect common patterns and generate appropriate structure
    let taskName = "custom_prompt";
    let purpose = text.trim();
    
    // Extract key concepts for better structure
    if (text.toLowerCase().includes("chatbot") || text.toLowerCase().includes("bot")) {
      taskName = "chatbot_assistant";
    } else if (text.toLowerCase().includes("find") || text.toLowerCase().includes("search")) {
      taskName = "search_assistant";
    } else if (text.toLowerCase().includes("analyze") || text.toLowerCase().includes("analysis")) {
      taskName = "analysis_tool";
    } else if (text.toLowerCase().includes("generate") || text.toLowerCase().includes("create")) {
      taskName = "content_generator";
    }

    // Generate parameters based on content
    const parameters: Record<string, any> = {};
    
    if (text.toLowerCase().includes("location")) {
      parameters.location = {
        type: "string",
        description: "Geographic location or area",
        required: true
      };
    }
    
    if (text.toLowerCase().includes("user") || text.toLowerCase().includes("people")) {
      parameters.user_preferences = {
        type: "object",
        description: "User preferences and requirements",
        required: false
      };
    }
    
    if (text.toLowerCase().includes("type") || text.toLowerCase().includes("category")) {
      parameters.category = {
        type: "string",
        description: "Category or type specification",
        required: false
      };
    }

    // Add default parameters if none were detected
    if (Object.keys(parameters).length === 0) {
      parameters.input_data = {
        type: "string",
        description: "Primary input for processing",
        required: true
      };
      parameters.options = {
        type: "object",
        description: "Additional configuration options",
        required: false
      };
    }

    const jsonStructure = {
      task: taskName,
      purpose: purpose,
      parameters: parameters,
      constraints: {
        max_results: 10,
        response_format: "structured_data",
        include_metadata: true
      },
      output_format: {
        result: "string",
        confidence: "number",
        metadata: "object",
        timestamp: "string"
      }
    };

    return JSON.stringify(jsonStructure, null, 2);
  };

  const validateJson = (jsonString: string): { isValid: boolean; message: string } => {
    if (!jsonString.trim()) {
      return { isValid: false, message: "No JSON output to validate" };
    }
    
    try {
      JSON.parse(jsonString);
      return { isValid: true, message: "Valid JSON generated successfully!" };
    } catch (error) {
      return { isValid: false, message: `Invalid JSON: ${error instanceof Error ? error.message : 'Unknown error'}` };
    }
  };

  const handleConvert = async () => {
    if (!inputText.trim()) {
      setValidationStatus({ isValid: false, message: "Please enter a text prompt" });
      return;
    }

    setIsProcessing(true);
    setValidationStatus({ isValid: true, message: "" });

    // Simulate processing time for better UX
    await new Promise(resolve => setTimeout(resolve, 800));

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
        message: `Error generating JSON: ${error instanceof Error ? error.message : 'Unknown error'}` 
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
      const blob = new Blob([jsonOutput], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'generated-prompt.json';
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

  return (
    <div className="bg-slate-50 font-sans antialiased min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-slate-900 text-center">
            Text-to-JSON Prompt Converter
          </h1>
          <p className="text-lg text-slate-600 text-center mt-2">
            Transform simple text descriptions into structured JSON prompts
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            {/* Input Card */}
            <Card className="bg-white rounded-xl shadow-sm border border-slate-200">
              <CardContent className="p-6">
                <label htmlFor="textInput" className="block text-lg font-semibold text-slate-900 mb-3">
                  Enter your simple text prompt:
                </label>
                <Textarea
                  id="textInput"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Describe what you want the JSON prompt to do... For example: 'Create a chatbot that helps users find restaurants with specific dietary requirements and location preferences'"
                  className="min-h-40 resize-none text-slate-700 placeholder-slate-400"
                  aria-describedby="input-help"
                />
                <p id="input-help" className="text-sm text-slate-500 mt-2">
                  Describe your requirements in natural language. Be as specific as possible.
                </p>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleConvert}
                disabled={isProcessing}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 h-auto transition-colors duration-200"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <RotateCcw className="w-5 h-5" />
                    Convert to JSON
                  </span>
                )}
              </Button>
            </div>

            {/* Validation Status */}
            {validationStatus.message && (
              <Alert className={cn(
                "border",
                validationStatus.isValid 
                  ? "bg-emerald-50 border-emerald-200" 
                  : "bg-red-50 border-red-200"
              )}>
                <div className={cn(
                  "flex items-center gap-2",
                  validationStatus.isValid ? "text-emerald-800" : "text-red-800"
                )}>
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
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            {/* Output Card */}
            <Card className="bg-white rounded-xl shadow-sm border border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-lg font-semibold text-slate-900">
                    Generated JSON Prompt:
                  </label>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopy}
                      disabled={!jsonOutput}
                      className="text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      title="Copy to clipboard"
                    >
                      <Copy className="w-4 h-4 mr-1" />
                      Copy
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleDownload}
                      disabled={!jsonOutput}
                      className="text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      title="Download JSON file"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
                
                {/* JSON Output Display */}
                <div className="relative">
                  <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto font-mono text-sm max-h-96 overflow-y-auto">
                    <code className="language-json">
                      {jsonOutput || "// Your generated JSON will appear here"}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Copy Success Message */}
            {copySuccess && (
              <Alert className="bg-emerald-50 border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-800 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <AlertDescription>JSON copied to clipboard!</AlertDescription>
                </div>
              </Alert>
            )}

            {/* Usage Instructions */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-blue-900 mb-2">How to use this tool:</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Describe your requirements in plain English</li>
                  <li>• Click "Convert to JSON" to generate structured format</li>
                  <li>• Copy or download the JSON for your projects</li>
                  <li>• Use the generated JSON as a prompt template</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-sm border border-slate-200 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Real-time Processing</h3>
              <p className="text-sm text-slate-600">Instant conversion with live validation and error feedback</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm border border-slate-200 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">JSON Validation</h3>
              <p className="text-sm text-slate-600">Automatic validation ensures your JSON is properly formatted</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm border border-slate-200 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Easy Export</h3>
              <p className="text-sm text-slate-600">Copy to clipboard or download as .json file with one click</p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center text-slate-600">
            <p>&copy; 2025 Text-to-JSON Converter Tool. Built for developers, by developers.</p>
            <p className="text-sm mt-2">Transform natural language into structured JSON prompts effortlessly.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
