import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
          <div className="prose max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: January 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                Our Text-to-JSON Prompt Converter processes your input data locally in your browser. We are committed to protecting your privacy and ensuring your data remains secure.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Input text and prompts you enter into our converter tool</li>
                <li>Generated JSON output based on your inputs</li>
                <li>Basic usage analytics to improve our service (anonymized)</li>
                <li>Technical information such as browser type and device information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                Your data is processed for the sole purpose of converting text prompts to JSON format:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Processing and converting your text inputs to structured JSON</li>
                <li>Providing auto-enhancement suggestions for better prompts</li>
                <li>Improving our conversion algorithms and user experience</li>
                <li>Ensuring the security and reliability of our service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Storage and Security</h2>
              <p className="text-gray-700 mb-4">
                We prioritize your data security and privacy:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>All text processing happens locally in your browser</li>
                <li>No personal data is stored on our servers permanently</li>
                <li>Temporary processing data is encrypted and automatically deleted</li>
                <li>We use industry-standard security measures to protect data transmission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                Our service may use third-party analytics and improvement tools:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Analytics services for usage statistics (anonymized)</li>
                <li>Content delivery networks for faster loading times</li>
                <li>Security services for protection against malicious activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the following rights regarding your data:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Right to access any personal information we may have</li>
                <li>Right to request deletion of your data</li>
                <li>Right to correct any inaccurate information</li>
                <li>Right to withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Email: privacy@jsonconverter.com</li>
                <li>Contact Form: <Link href="/contact" className="text-blue-600 hover:text-blue-800">Visit our Contact page</Link></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}